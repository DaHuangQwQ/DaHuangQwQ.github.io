# Raft

## 脑裂（Split Brain）

## 过半票决（Majority Vote）

## Raft 初探

应用程序只会将来自客户端的请求对应的操作向下发送到Raft层，并且告知Raft层，请把这个操作提交到多副本的日志（Log）中，并在完成时通知我。

Raft节点之间相互交互，直到过半的Raft节点将这个新的操作加入到它们的日志中，也就是说这个操作被过半的Raft节点复制了。

## Leader选举（Leader Election）

Raft生命周期中可能会有不同的Leader，它使用任期号（term number）来区分不同的Leader。Followers（非Leader副本节点）不需要知道Leader的ID，它们只需要知道当前的任期号。每一个任期最多有一个Leader，这是一个很关键的特性。对于每个任期来说，或许没有Leader，或许有一个Leader，但是不可能有两个Leader出现在同一个任期中。每个任期必然最多只有一个Leader。

那Leader是如何创建出来的呢？每个Raft节点都有一个选举定时器（Election Timer），如果在这个定时器时间耗尽之前，当前节点没有收到任何当前Leader的消息，这个节点会认为Leader已经下线，并开始一次选举。所以我们这里有了这个选举定时器，当它的时间耗尽时，当前节点会开始一次选举。

开始一次选举的意思是，当前服务器会增加任期号（term number），因为它想成为一个新的Leader。

## 日志恢复（Log Backup）

我们现在想将这个请求复制到所有的Followers上。这里的AppendEntries RPC还包含了prevLogIndex字段和prevLogTerm字段。

prevLogIndex是前一个槽位的位置；prevLogTerm是S3上前一个槽位的任期号。

这样的AppendEntries消息发送给了Followers。而Followers，它们在收到AppendEntries消息时，可以知道它们收到了一个带有若干Log条目的消息，并且是从槽位prevLogIndex开始。Followers在写入Log之前，会检查本地的前一个Log条目，是否与Leader发来的有关前一条Log的信息匹配。

如果不匹配的话，S2将拒绝这个AppendEntries，并返回False给Leader。

为了响应Followers返回的拒绝，Leader会减小对应的nextIndex。所以它现在减小了两个Followers的nextIndex。这次Leader发送的AppendEntries消息包含了prevLogIndex之后的所有条目

而Leader在收到了Followers对于AppendEntries的肯定的返回之后，它会增加相应的nextIndex到14。 

我们擦除了一些Log条目，为什么Raft系统可以安全的删除这条记录？

这条Log条目并没有存在于过半服务器中，因此无论之前的Leader是谁，发送了这条Log，它都没有得到过半服务器的认可。因此旧的Leader不可能commit了这条记录，也就不可能将它应用到应用程序的状态中，进而也就不可能回复给客户端说请求成功了。

## 选举约束（Election Restriction）

Raft有一个稍微复杂的选举限制（Election Restriction）。这个限制要求，在处理别节点发来的RequestVote RPC时，需要做一些检查才能投出赞成票。这里的限制是，节点只能向满足下面条件之一的候选人投出赞成票：

1. 候选人最后一条Log条目的任期号**大于**本地最后一条Log条目的任期号；

2. 或者，候选人最后一条Log条目的任期号**等于**本地最后一条Log条目的任期号，且候选人的Log记录长度**大于等于**本地Log记录的长度

## 快速恢复（Fast Backup）

为了能够更快的恢复日志，让Follower返回足够的信息给Leader，这样Leader可以以任期（Term）为单位来回退，而不用每次只回退一条Log条目。所以现在，在恢复Follower的Log时，如果Leader和Follower的Log不匹配，Leader只需要对每个不同的任期发送一条AppendEntries，而不用对每个不同的Log条目发送一条AppendEntries。

我将可能出现的场景分成3类，为了简化，这里只画出一个Leader（S2）和一个Follower（S1），S2将要发送一条任期号为6的AppendEntries消息给Follower。

- 场景1：S1没有任期6的任何Log，因此我们需要回退一整个任期的Log。

> S1: 4 5 5
>
> S2: 4 6 6 6

- 场景2：S1收到了任期4的旧Leader的多条Log，但是作为新Leader，S2只收到了一条任期4的Log。所以这里，我们需要覆盖S1中有关旧Leader的一些Log。

> S1: 4 4 4
>
> S2: 4 6 6 6

- 场景3：S1与S2的Log不冲突，但是S1缺失了部分S2中的Log。

> S1: 4
>
> S2: 4 6 6 6

可以让Follower在回复Leader的AppendEntries消息中，携带3个额外的信息，来加速日志的恢复。这里的回复是指，Follower因为Log信息不匹配，拒绝了Leader的AppendEntries之后的回复。这里的三个信息是指：

- XTerm：这个是Follower中与Leader冲突的Log对应的任期号。在之前（7.1）有介绍Leader会在prevLogTerm中带上本地Log记录中，前一条Log的任期号。如果Follower在对应位置的任期号不匹配，它会拒绝Leader的AppendEntries消息，并将自己的任期号放在XTerm中。如果Follower在对应位置没有Log，那么这里会返回 -1。
- XIndex：这个是Follower中，对应任期号为XTerm的第一条Log条目的槽位号。
- XLen：如果Follower在对应位置没有Log，那么XTerm会返回-1，XLen表示空白的Log槽位数。

我们再来看这些信息是如何在上面3个场景中，帮助Leader快速回退到适当的Log条目位置。

- 场景1。Follower（S1）会返回XTerm=5，XIndex=2。Leader（S2）发现自己没有任期5的日志，它会将自己本地记录的，S1的nextIndex设置到XIndex，也就是S1中，任期5的第一条Log对应的槽位号。所以，如果Leader完全没有XTerm的任何Log，那么它应该回退到XIndex对应的位置（这样，Leader发出的下一条AppendEntries就可以一次覆盖S1中所有XTerm对应的Log）。
- 场景2。Follower（S1）会返回XTerm=4，XIndex=1。Leader（S2）发现自己其实有任期4的日志，它会将自己本地记录的S1的nextIndex设置到本地在XTerm位置的Log条目后面，也就是槽位2。下一次Leader发出下一条AppendEntries时，就可以一次覆盖S1中槽位2和槽位3对应的Log。
- 场景3。Follower（S1）会返回XTerm=-1，XLen=2。这表示S1中日志太短了，以至于在冲突的位置没有Log条目，Leader应该回退到Follower最后一条Log条目的下一条，也就是槽位2，并从这开始发送AppendEntries消息。槽位2可以从XLen中的数值计算得到。
