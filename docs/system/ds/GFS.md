# GFS

> NV（non-volatile, 非易失）

## Master 节点

1. Master节点用来管理文件和Chunk的信息，而Chunk服务器用来存储实际的数据，Chunk每个是64MB大小
2. Master节点就知道文件的每个Chunk存储在哪，当我想读取这个文件中的任意一个部分时
3. 我需要向Master节点查询对应的Chunk在哪个服务器上，之后我可以直接从Chunk服务器读取对应的Chunk数据

### Master 数据结构

- 第一个是文件名到Chunk ID或者Chunk Handle`（NV）`数组的对应。这个表单告诉你，文件对应了哪些Chunk。但是只有Chunk ID是做不了太多事情的，所以有了第二个表单。
- 第二个表单记录了Chunk ID到Chunk数据的对应关系。这里的数据又包括了：
  - 每个Chunk存储在哪些服务器上，所以这部分是Chunk服务器的列表`（V）`
  - 每个Chunk当前的版本号，所以Master节点必须记住每个Chunk对应的版本号。`（NV）`
  - 所有对于Chunk的写操作都必须在主Chunk（Primary Chunk）上顺序处理，主Chunk是Chunk的多个副本之一。所以，Master节点必须记住哪个Chunk服务器持有主Chunk。`（V）`
  - 主Chunk只能在特定的租约时间内担任主Chunk，所以，Master节点要记住主Chunk的租约过期时间。`（V）`

### Master 故障恢复

你不会想要从 log 的最开始重建状态，因为 log 的最开始可能是几年之前，所以 Master 节点会在磁盘中创建一些 checkpoint 点，这可能要花费几秒甚至一分钟。这样 Master 节点重启时，会从 log 中的最近一个 checkpoint 开始恢复，再逐条执行从 Checkpoint 开始的 log，最后恢复自己的状态。

## GFS 读文件

> 从最新的Chunk副本读取数据

1. GFS 客户端有一个文件名和偏移量，应用程序会将这些信息发送给Master节点。
2. Master节点会从自己的 file 表单中查询文件名，得到Chunk ID 的数组。因为每个Chunk是64MB，所以偏移量除以 64MB 就可以从数组中得到对应的 Chunk ID。
3. 之后 Master 再从 Chunk 表单中找到存有 Chunk 的服务器列表，并将列表返回给客户端。客户端再从这些 Chunk 服务器中挑选一个来读取数据。
4. 将 Chunk Handle和偏移量发送给那个 Chunk 服务器。Chunk 服务器会在本地的硬盘上，将每个 Chunk 存储成独立的 Linux 文件，并通过普通的 Linux 文件系统管理，将数据返回给客户端。

## GFS 写文件

> 必须要通过Chunk的主副本（Primary Chunk）来写入。

1. 对于Master节点来说，如果发现 Chunk 的主副本不存在，Master 会找出所有存有 Chunk 最新副本的 Chunk 服务器。
2. Master节点需要告诉客户端向哪个Chunk服务器（也就是Primary Chunk所在的服务器）去做追加操作。

> 最新的副本是指，副本中保存的版本号与Master中记录的Chunk的版本号一致。Chunk副本中的版本号是由Master节点下发的，所以Master节点知道，对于一个特定的Chunk，哪个版本号是最新的。
>
> 当客户端想要对文件进行追加，但是又不知道文件尾的Chunk对应的Primary在哪时，Master会等所有存储了最新Chunk版本的服务器集合完成，然后挑选一个作为Primary，其他的作为Secondary。
>
> 它还给Primary一个租约，这个租约告诉Primary说，在接下来的60秒中，你将是Primary，60秒之后你必须停止成为Primary。这种机制可以确保我们不会同时有两个Primary

3. 如果 Secondary 实际真的将数据写入到了本地磁盘存储的 Chunk 中，它会回复“yes”给 Primary。如果所有的 Secondary 服务器都成功将数据写入，并将“yes”回复给了 Primary，并且 Primary 也收到了这些回复。Primary 会向客户端返回写入成功。
4. 如果至少一个 Secondary 服务器没有回复 Primary，或者回复了，但是内容却是：抱歉，一些不好的事情发生了，比如说磁盘空间不够，或者磁盘故障了，Primary 会向客户端返回写入失败。

## GFS 一致性

> GFS 是弱一致性

在GFS的这种工作方式下，如果Primary返回写入成功，那么一切都还好，如果Primary返回写入失败，就不是那么好了。Primary返回写入失败会导致不同的副本有完全不同的数据。
