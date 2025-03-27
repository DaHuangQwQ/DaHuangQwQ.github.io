# epoll

linux 内核提供了三种经典的多路复用技术：select、poll、epoll

### （1）select

- 一次可以处理多个 fd，体现多路. 但 fd 数量有限，最多 1024 个
- loop thread 通过 select 将一组 fd 提交到内核做监听
- 当 fd 中无 io event 就绪时，loop thread 会陷入阻塞
- 每当这组 fd 中有 io event 到达时，内核会唤醒 loop thread
- loop thread 无法精准感知到哪些 fd 就绪，需要遍历一轮 fd 列表，时间复杂度 O(N)
- 托付给内核的 fd 列表只具有一轮交互的时效. 新的轮次中，loop thread 需要重新将监听的 fd 列表再传递给内核一次

### （2）epoll

- 每次处理的 fd 数量无上限
- loop thread 通过 epoll_create 操作创建一个 epoll 池子
- loop thread 通过 epoll_ctl 每次将一个待监听的 fd 添加到 epoll 池中
- 每当 fd 列表中有 fd 就绪事件到达时，会唤醒 loop thread. 同时内核会将处于就绪态的 fd 直接告知 loop thread，无需额外遍历

综上所述，select 和 epoll 等多路复用操作利用了内核的能力，能在待监听 fd 中有 io event 到达时，将 loop thread 唤醒，避免无意义的主动轮询操作.

其中，epoll 相比于 select 的核心性能优势在于：

- • loop thread 被唤醒时，能明确知道哪些 fd 需要处理，减少了一次额外遍历的操作，时间复杂度由 O(N) 优化到 O(1)
- • epoll 通过将创建池子和添加 fd两个操作解耦，实现了池中 fd 数据的复用，减少了用户态与内核态间的数据拷贝成本

## 边缘触发和水平触发

epoll 支持两种事件触发模式，分别是**边缘触发（edge-triggered，ET）和水平触发（level-triggered，LT）**。

这两个术语还挺抽象的，其实它们的区别还是很好理解的。

- 使用边缘触发模式时，当被监控的 Socket 描述符上有可读事件发生时，**服务器端只会从 epoll_wait 中苏醒一次**，即使进程没有调用 read 函数从内核读取数据，也依然只苏醒一次，因此我们程序要保证一次性将内核缓冲区的数据读取完
- 使用水平触发模式时，当被监控的 Socket 上有可读事件发生时，**服务器端不断地从 epoll_wait 中苏醒，直到内核缓冲区数据被 read 函数读完才结束**，目的是告诉我们有数据需要读取

## Event poll 原理

epoll 又称 EventPoll，使用很简单，包含三个指令“

- epoll_create
- epoll_ctl
- epoll_wait

下面我们逐一展开聊聊：

### （1）epoll_create

在内核开辟空间，创建一个 epoll 池子用于批量存储管理 fd，后续可以通过 epoll_ctl 往池子中增删改 fd.

```go
func epollcreate1(flags int32) int32
```

### （2）epoll_ctl

在某个 epoll 池子中进行一个 fd 的增删改操作.

正是由于 epoll 中将 epoll_ctl 与 epoll_create 操作进行了解耦，才实现了对 epoll_create 时传递的 fd 数据的复用，减少了用户态和内核态之间对 fd 数据的重复传递

此外，在 epoll_ctl 实现时，也需要通过 epollevent 设置好回调事件，当 fd 有指定事件到达时，会被添加到就绪队列中，最终将 loop thread 唤醒.

```go
func epollctl(epfd, op, fd int32, ev *epollevent) int32


type epollevent struct {
    events uint32
    data   [8]byte // unaligned uintptr
}
```

### （3）epoll_wait

从对应 epoll 池子中获取就绪的 epollevent，从中可以关联到对应的 fd 和 loop thread 信息.

```go
func epollwait(epfd int32, ev *epollevent, nev, timeout int32) int32
```

## 数据结构

### （1）epoll 池红黑树

一个 epoll 池子中管理的 fd 数量理论上上不封顶. 同时后续可能存在对 fd 的增删改操作，因此需要使用合适的数据结构加以管理，从而降低后续操作的时间复杂度.

linux 内核中，实现 epoll 池的数据结构采用的是红黑树（Red-Black Tree，一种自平衡二叉查找树，这里不作展开，感兴趣自行了解）实现，保证了所有增、删、改操作的平均时间复杂度维持在 O(logN) 的对数级水平.

### （2）就绪事件队列

针对于 fd 的就绪 io event，由于通常数量有限，且每个事件都需要逐一处理，没有优先级之分，因此采用简单的双向链表实现即可.

## 事件回调机制

epoll 高效的核心建立在精准的事件回调机制之上.

首先，通过内核感知到 io event 事件的动态，令 loop thread 在合适的时机阻塞，避免浪费 CPU；在合适的时机执行，及时处理 io event.

其次，在 io event 就绪时，会精准地将真正就绪的 fd 传递到 loop thread 手中，减少了一次无意义的遍历查询动作.

事件回调的注册是在调用 epoll_ctl 添加 fd 时，此时会提前设置好对这个 fd 关心的事件类型，当对应的 io event 真的发生时，内核会将该 fd 和对应的 loop thread 封装到 epollevent 中，添加到就绪队列 ready list 当中.

之后当用户调用 epoll_wait 时，能够准确地获取到这部分就绪的 epollevent，进而能够将对应的 loop thread 唤醒.