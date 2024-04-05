# GFS

> NV（non-volatile, 非易失）

## Master 节点

1. Master节点用来管理文件和Chunk的信息，而Chunk服务器用来存储实际的数据，Chunk每个是64MB大小
2. Master节点就知道文件的每个Chunk存储在哪，当我想读取这个文件中的任意一个部分时
3. 我需要向Master节点查询对应的Chunk在哪个服务器上，之后我可以直接从Chunk服务器读取对应的Chunk数据

### Master 数据结构

- 第一个是文件名到Chunk ID或者Chunk Handle**（NV）**数组的对应。这个表单告诉你，文件对应了哪些Chunk。但是只有Chunk ID是做不了太多事情的，所以有了第二个表单。
- 第二个表单记录了Chunk ID到Chunk数据的对应关系。这里的数据又包括了：
  - 每个Chunk存储在哪些服务器上，所以这部分是Chunk服务器的列表**（V）**
  - 每个Chunk当前的版本号，所以Master节点必须记住每个Chunk对应的版本号。**（NV）**
  - 所有对于Chunk的写操作都必须在主Chunk（Primary Chunk）上顺序处理，主Chunk是Chunk的多个副本之一。所以，Master节点必须记住哪个Chunk服务器持有主Chunk。**（V）**
  - 主Chunk只能在特定的租约时间内担任主Chunk，所以，Master节点要记住主Chunk的租约过期时间。**（V）**

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

1. 对于Master节点来说，如果发现Chunk的主副本不存在，Master会找出所有存有Chunk最新副本的Chunk服务器。
2. Master节点需要告诉客户端向哪个Chunk服务器（也就是Primary Chunk所在的服务器）去做追加操作。
