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
