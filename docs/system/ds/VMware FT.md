# VMware FT

> 容错（Fault-Tolerance）和复制（Replication）
>
> 虚拟机监控器（VMM，Virtual Machine Monitor）
>
> VMware FT论文中将 Primary 到 Backup 之间同步的数据流的通道称之为Log Channel

Fail-stop 是一种容错领域的通用术语。它是指，如果某些东西出了故障，比如说计算机，那么它会单纯的停止运行。当任何地方出现故障时，就停止运行，而不是运算出错误结果。

假设 我们有两个副本，一个Primay 和一个 Backup 节点

## 状态转移和复制状态机（State Transfer and Replicated State Machine）

### 状态转移

Primary将自己完整状态，比如说内存中的内容，拷贝并发送给Backup。当Primary故障了，Backup就可以从它所保存的最新状态开始运行。Primary就会对自身的内存做一大份拷贝，并通过网络将其发送到Backup。

### 复制状态机

> 只涉及了单核CPU

它只会从 Primary 将这些外部事件，例如外部的输入，发送给 Backup。状态转移传输的是可能是内存，而复制状态机会将来自客户端的操作或者其他外部事件，从 Primary 传输到 Backup。

我们需要决定要在什么级别上复制状态，VMware FT 论文对这个问题有一个非常有趣的回答。它会复制机器的完整状态，这包括了所有的内存，所有的寄存器。

GFS 也有复制，但是它绝对没有在 Primary 和 Backup 之间复制内存中的每一个 bit，它复制的更多是应用程序级别的 Chunk。

VMware FT 的独特之处在于，它从机器级别实现复制，因此它不关心你在机器上运行什么样的软件，它就是复制底层的寄存器和内存。

## VMware FT 工作原理

1. 客户端，向 Primary 发送了一个请求，这个请求以网络数据包的形式发出。
2. 这个网络数据包产生一个中断，之后这个中断送到了 VMM。VMM 可以发现这是一个发给我们的多副本服务的一个输入，所以这里VMM 会做两件事情：
   - 在虚拟机的 guest 操作系统中，模拟网络数据包到达的中断，以将相应的数据送给应用程序的 Primary 副本。
   - VMM 会将网络数据包拷贝一份，并通过网络送给 Backup 虚机所在的 VMM。
3. Backup 虚机所在的 VMM 知道这是发送给 Backup 虚机的网络数据包，它也会在 Backup 虚机中模拟网络数据包到达的中断，以将数据发送给应用程序的 Backup。所以现在，Primary 和 Backup 都有了这个网络数据包，它们有了相同的输入，再加上许多细节，它们将会以相同的方式处理这个输入，并保持同步。
4. 虚机内的服务会回复客户端的请求。在 Primary 虚机里面，服务会生成一个回复报文，并通过 VMM 在虚机内模拟的虚拟网卡发出。之后 VMM 可以看到这个报文，它会实际的将这个报文发送给客户端。另一方面，由于 Backup 虚机运行了相同顺序的指令，它也会生成一个回复报文给客户端，并将这个报文通过它的 VMM 模拟出来的虚拟网卡发出。但是它的 VMM 知道这是 Backup 虚机，会丢弃这里的回复报文。
5. 当 Primary 因为故障停止运行时，FT（Fault-Tolerance）就开始工作了。从 Backup 的角度来说，它将不再收到来自于 Log Channel 上的 Log 条目（实际中，Backup 每秒可以收到很多条 Log，其中一个来源就是来自于 Primary 的定时器中断）Primary 一定是挂了。当Backup 不再从 Primary 收到消息，VMware FT 论文的描述是，Backup 虚机会上线（Go Alive）。

## 非确定性事件（Non-Deterministic Events）

非确定性事件可以分成几类。

- 客户端输入。这里的问题是，中断在什么时候，具体在指令流中的哪个位置触发？对于Primary和Backup，最好要在相同的时间，相同的位置触发，否则执行过程就是不一样的，进而会导致它们的状态产生偏差。
- 怪异指令
  - 随机数生成器
  - 获取当前时间的指令，在不同时间调用会得到不同的结果
  - 获取计算机的唯一ID
- 多CPU的并发

所有的事件都需要通过 Log Channel，从Primary 同步到 Backup。如果有怪异指令，会从 Primary 计算出结果并转发给 Backup

其中有三个条目

1. 事件发生时的指令序号
2. 日志条目的类型，可能是普通的网络数据输入，也可能是怪异指令。
3. 数据

在适当的时候，VMM 会停止 Primary 虚机的指令执行，并记下当前的指令序号，然后在指令序号的位置插入伪造的模拟定时器中断，并恢复 Primary 虚机的运行。之后，VMM 将指令序号和定时器中断再发送给 Backup 虚机。

物理服务器的网卡会将网络数据包拷贝给 VMM 的内存，之后，网卡中断会送给 VMM，并说，一个网络数据包送达了。这时，VMM 会暂停 Primary 虚机，记住当前的指令序号，将整个网络数据包拷贝给 Primary 虚机的内存，之后模拟一个网卡中断发送给 Primary 虚机。

## 输出控制（Output Rule）

假设 Primary 确实生成了回复给客户端，但是之后立马崩溃了。更糟糕的是，现在网络不可靠，Primary 发送给 Backup 的 Log 条目在Primary 崩溃时也丢包了。那么现在的状态是，客户端收到了回复说现在的数据是11，但是 Backup 虚机因为没有看到客户端请求，所以它保存的数据还是10。

论文里的解决方法就是控制输出（Output Rule）。直到Backup虚机确认收到了相应的Log条目，Primary虚机不允许生成任何输出。让我们回到Primary崩溃前，并且计数器的内容还是10，Primary上的正确的流程是这样的：

1. 客户端输入到达Primary。
2. Primary 的 VMM 将输入的拷贝发送给 Backup 虚机的 VMM。所以有关输入的 Log 条目在 Primary 虚机生成输出之前，就发往了Backup。之后，这条 Log 条目通过网络发往 Backup，但是过程中有可能丢失。
3. Primary 的 VMM 将输入发送给 Primary 虚机，Primary 虚机生成了输出。现在 Primary 虚机的里的数据已经变成了 11，生成的输出也包含了11。但是 VMM 不会无条件转发这个输出给客户端。
4. Primary 的 VMM 会等到之前的 Log 条目都被 Backup 虚机确认收到了才将输出转发给客户端。所以，包含了客户端输入的 Log 条目，会从 Primary 的 VMM 送到 Backup 的 VMM，Backup 的 VMM 不用等到 Backup 虚机实际执行这个输入，就会发送一个表明收到了这条 Log 的 ACK 报文给 Primary 的 VMM。当 Primary 的 VMM 收到了这个 ACK，才会将 Primary 虚机生成的输出转发到网络中。

## 重复输出（Duplicated Output）

假设回复报文已经从 VMM 发往客户端了，所以客户端收到了回复，但是这时 Primary 虚机崩溃了。而在 Backup 侧，客户端请求还堆积在Backup 对应的 VMM 的 Log 等待缓冲区，也就是说客户端请求还没有真正发送到 Backup 虚机中。当 Primary 崩溃之后，Backup 接管服务，Backup首先需要消费所有在等待缓冲区中的 Log。假设最后一条Log条目对应来自客户端的请求，这意味着，Backup会将自己的计数器增加到11，并生成一个输出报文。

好消息是，也就是说客户端请求和回复都通过 TCP Channel 收发。当 Backup 接管服务时，因为它的状态与 Primary 相同，所以它知道TCP连接的状态和TCP传输的序列号。当 Backup 生成回复报文时，这个报文的 TCP 序列号与之前 Primary 生成报文的 TCP 序列号是一样的，这样客户端的 TCP 栈会发现这是一个重复的报文，它会在TCP层面丢弃这个重复的报文

## Test-and-Set 服务

Primary 和 Backup 都在运行，但是它们之间的网络出现了问题，同时它们各自又能够与一些客户端通信。这时，它们都会以为对方挂了，自己需要上线并接管服务。

Test-and-Set 服务不运行在 Primary 和 Backup 的物理服务器上，VMware FT 需要通过网络支持 Test-and-Set 服务。Primary 和 Backup都需要获取 Test-and-Set 标志位，这有点像一个锁。
