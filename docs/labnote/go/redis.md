# redis

## 如何使用redis

核心是列举自己解决过的问题。这里我们准备一些很常见的场景，你可以自由挑选两三个：

- String类型，首先是热点数据的缓存，再者比较多的就是通过它的incr实现计数，来统计点赞数，播放量，访问量场景，以及进行全局id的生成。而后比较高端就是实现分布式锁，以及布隆过滤器；
- Hash类型，则用在比如说用户不同场景维度的发私信的频控，以及电商类的客户的购物车信息，抖音作品的播放、点赞、收藏等系列数据；
- List 类型，适用于有序但不频繁随机访问的场景，用的比较少。例如说用来实现限流算法，以及关注列表等；
- Set类型，使用在比如说在社交类的场景里面可以用于用户推荐、好友关系（例如我关注了谁，谁关注了我，哪些是互关好友）、存储共同关注的人，推荐可能认识的人等；
- ZSet类型，使用场景如最近听歌数据，最近联系的人，送礼排行榜，热搜榜；

最典型的使用场景就是用 Redis 来作为缓存，一般来说根据缓存的数据不同，可以是缓存字符串，或者是 List 结构、哈希结构。一般来说引入 Redis 作为缓存之后，性能会有数量级的提升。

除此以外，Redis 还会被用来解决一些复杂的问题。比如说我就用 Redis 实现过滑动窗口算法，用于限流。其基本的思路就是用 List 来维持住流量进来的时间戳，而后每次判定限流的时候则是判定时间窗内有多少时间戳，也就是已经有多少流量了，而这本质上就是一个 Range 的用法。当然在实现的过程中是使用 Lua 脚本来完成的。

我还用 Redis 处理过更加复杂的问题，比如说榜单问题。这个榜单问题的核心就是利用 ZSet 来排序，对应的 score 则是根据排序规则来计算。比如说根据时间、点赞和评论数等计算一个热度，把这个热度作为 score。每次获取前几名，也就是执行一次 Range 而已。

我还用 Redis 来设计过分布式锁。使用 Redis 来设计分布式锁的关键点有两个：使用 SETNX 来排他性的设置一个值；要考虑续约的问题。也就是在设置了一定的过期时间之后，如果在快要过期了业务还没执行完毕，那么要考虑续约的问题，防止分布式锁因为过期而失效。

## redis 数据结构

Redis 提供了多种数据结构，每种结构都有其独特的应用场景和底层实现。以下是 Redis 的主要数据结构及其底层实现：

- 字符串（String）
  - 底层实现：简单动态字符串（SDS）
  - 特点：适用于存储单个值，如用户 session、缓存对象。
  - 场景：大部分简单数据的缓存都是使用这个数据结构的
- 列表（List）
  - 底层实现：有两种实现，ziplist，quicklist（链表）。这在面试中会是一个难点，但是大部分面试官如果没有更新自己的八股文知识的话，应该也不太知道，也不太会问。
  - 特点：适用于存储有序元素，如消息队列、文章列表。
  - 场景：例如说收藏夹中的收藏列表，好友列表等，有些公司还会用作消息队列。List 还有一个使用场景，就是可以用来实现滑动窗口算法，达成限流的效果。
- 集合（Set）
  - 底层实现：hashtable 和 intset
  - 特点：适用于存储无序且唯一元素，如标签、用户关注列表。
  - 场景：很多都是利用集合求差集、并集或者交集。比如说共同好友、共同关注的人这种社交的应用。
- 有序集合（Sorted Set）
  - 底层实现：skiplist（跳表） 和 ziplist
  - 特点：适用于存储有序且唯一元素，如排行榜、时间线。
  - 场景：最典型的就是各种榜单了，比如说游戏里面的分数排行，或者社交平台的各种榜单，电商平台的各种榜单。
- 哈希（Hash）
  - 底层实现： ziplist 或 hashtable （取决于元素数量和大小）
  - 特点：适用于存储对象属性，如用户信息、配置项。
  - 场景：适合存储有很多属性的对象，比如说在用户系统中，使用 Redis 哈希存储用户信息，键为 user:userid，字段为 name、email 等，HSET 设置属性，HGET 获取属性，读写都可以只操作部分数据，减少数据冗余。
- 地理空间（Geospatial）
  - 底层实现：有序集合（Sorted Set）的扩展
  - 特点：适用于存储地理空间数据，如附近的人、位置服务。
  - 场景：计算附近的人
- 位图（Bitmap）
  - 底层实现：字符串（String）的位操作
  - 特点：适用于存储布尔值，如用户签到、活跃用户统计。
  - 场景：在社交平台中，使用 Redis 位图记录用户每日签到情况，键为 signin:userid，SETBIT 设置签到，GETBIT 查询签到，节省存储空间。
- HyperLogLog
  - 底层实现：HyperLogLog 算法
  - 特点：适用于统计大量数据的基数，如 UV 统计。
  - 场景：UV 统计，在网站分析系统中，使用 Redis HyperLogLog 统计每日 UV，键为 uv:date，PFADD 添加访问记录，PFCOUNT 获取 UV 数，高效处理大数据统计。
- 流（Stream）
  - 底层实现：Rax 树和链表
  - 特点：适用于消息队列和日志收集，支持持久化。
  - 场景：在监控系统 中，使用 Redis 流收集日志信息，键为 log_stream，XADD 添加日志，XREAD 读取日志，支持持久化和高吞吐量。

我加粗的五种字符串，列表，集合，有序集合和哈希是一定要记住的，剩下的几种你要是在项目里面用过，就要记住，并且在回答的时候引导到你用的案例上。

而后可以考虑在面试中进一步回答选择 Redis 数据结构的基本原则：

- 功能性：也就是你选择的 Redis 数据结构至少能支持你所需要的业务场景，能够解决你的业务问题
- 性能：内存要少，读写操作要快
- 底层实现的潜在问题：要进一步评估在你的业务数据特性下，你使用的数据结构对应的底层结构究竟是什么，防止出现 intset 那种升级问题，或者 ziplist 连锁更新的问题
- 扩展性：典型的就是在考虑存储一个大 JSON 串还是使用 Hash 结构，如果考虑到未来存在单字段的读写情况，那么使用扩展性的问题

> 功能性是基础，性能是目标，底层实现是防御，扩展是未来

## redis 高可用

Redis 的高可用主要是源自两套方案：Redis Sentinel 和 Redis Cluster。

Redis Sentinel 本质上是一个主从集群，内部可以进一步细分为 Sentinel 集群和数据集群。Sentinel 集群监控数据集群，而后数据的

首先是数据复制。也就是主节点和从节点保持数据同步，这样即便主节点崩溃了，从节点上也还有数据。

其次是主从选举，也就是说主节点崩溃之后会立刻选举出来一个新的主节点，继续提供服务。不过 Redis Sentinel 的主从选举和一般主从选举有点区别，它不是从节点互相推举选出来的，而是 Sentinel 选出来的。

第二种模式是 Redis Cluster。

Redis Cluster 是一个对等结构和主从结构的混合架构。Redis Cluster 由多个节点组成，这些节点之间地位是平等的，也就是说它们构成了一个对等结构。

但是从细节上来说，每一个节点都是一个主从集群，也就是说每一个节点都是类似于 Redis Sentinel 模式。

Redis Cluster 利用 CRC16 将 key 分散到 16384 个槽上面，而后再次将这些槽分配给不同的节点。可以平均分，也可以不是平均分。

通过这种混合模式，Redis 能有效应对各种问题。

首先是从对等结构上来说，就算是某个节点彻底不可用，也不会影响到别的节点，整个集群还是能够提供有损服务的。

而从主从结构上来说，通过数据同步和主从选举，这样即便主节点崩溃了， 也能选举出来一个新的从节点顶上。

Redis Cluster 这种对等集群和主从集群的混合模式，在别的中间件里面也能看到类似的设计，甚至于可以说现代的大规模分布式软件的高可用都是通过这种设计来保证的。

举个例子来说，Kafka 的一个 Topic 有多个分区，这些分区之间地位是平等的，所以可以看做是对等结构。而每一个分区本身也是一个主从结构，也有数据复制和主从选举。所以Kafka 就算一个分区出问题，或者逻辑分区的主分区出现问题，依旧能够正常对外提供服务。

再举个例子来说，MySQL 的分库分表也可以看做是这种形态。一个逻辑表被分库分表之后，每一个物理表地位都是平等的，也就是可以看做是对等结构。而每一个物理表都是存储在 MySQL 主从集群上的，那么也就是说物理表本身也有主表和从表。通过这种混合模式可以保证极高的可用性。

## redis 字典和哈希表

Redis 的 hashtable 有两个核心特征：使用拉链法解决冲突，支持渐进式 rehash。

使用拉链法就意味着 hashtable 是一个数组加链表的混合结构，也就是每个数组的元素都是一个链表。在插入数据的时候，就在链表头部插入，这样更加高效。

在查找的时候，首先根据 key 算出哈希值，而后哈希值除以数组的长度得到下标，沿着下标所在的链表进行查找。

而渐进式的 rehash 则意味着在 hashtable 里面，有 ht[0] 和 ht[1] 两个标准的哈希表，它们也代表渐进式 rehash 中的旧表和新表。而不管是扩容还是缩容都是使用渐进式 rehash 来完成的。

渐进式 rehash 的过程包含三个主要步骤。

1. ht[1] 上创建一个新容量的哈希表。
2. 逐步把 ht[0] 上的数据迁移到 ht[1] 上。一方面，增删改查都会触发迁移，另外一方面 Redis 的后台任务循环也会主动迁移。
3.  ht[0] 的数据迁移完成之后，交换 ht[0] 和 ht[1] 的指针，而后将 ht[1] 置为 NULL。

（分析增删改查的过程）在渐进式的 rehash 过程中，如果是增加新的 key，那么会直接在 ht[1] 上操作。

如果是删改查已有的 key，那么就会先找 ht[0] 再找 ht[1]，找到之后就执行操作。

需要注意的是，渐进式过程中，一个 key 要么出现在 ht[0] 上，要么出现在 ht[1] 上。

## redis 主从复制

Redis 的主从复制就两个：

1. **全量复制**：在全量复制中，从节点从主节点那里复制整个数据集。这种策略适用于从节点初次加入或者数据丢失的情况。主节点会生成一个 RDB 快照，并将其发送给从节点，从节点加载这个快照来进行复制。全量复制的缺点是，如果数据集非常大，将会占用大量的网络带宽和时间。
2. **增量复制**：部分重同步是一种增量复制方式，在从节点和主节点断线后重新连接时使用。主节点会将从断线期间执行的写命令发送给从节点，使得从节点能够只接收丢失的部分数据，以此保持数据的一致性。这种方式相对于全量复制来说，节省了大量的带宽和时间。

综合来看，全量复制适用于初始化同步或数据丢失的情况，而部分重同步适用于从节点和主节点断线后的重新连接。

如果站在一个节点的角度，那么当一个节点加入了主从集群之后：

1. **初始化同步**：从服务器连接到主服务器并发送SYNC命令请求进行初始化同步。
2. **快照传输**：如果主服务器没有持久化数据到磁盘，它将执行BGSAVE命令创建一个RDB快照文件。然后，主服务器将这个快照文件发送给从服务器。
3. **增量复制**：一旦快照传输完成，主服务器将继续将写命令传输给从服务器，从服务器会逐步复制主服务器上的新写命令，从而保持数据的一致性。
4. **复制偏移量**：主服务器会记录传输给从服务器的最后一条写命令的偏移量，当从服务器重新连接时，会根据这个偏移量来进行增量复制，从而不重复传输已经同步过的数据。

也不仅仅是 Redis 使用两种形态的复制，在所有的主从结构中，基本上都会支持两种复制模式。

举个例子，MySQL 也支持全量复制和增量复制两种形式，其中增量复制主要是依赖于 binlog 实现的，并且业界还针对这种增量复制模式搞出来很多工具，例如说 Canal，可以进一步用于监听 MySQL 的数据变更。

但是在具体实现上，不同的中间件都会有一些差异。例如说在 MySQL 的例子里面，增量复制借助 binlog 来实现，而从节点在收到 binlog 并不是直接执行这个 binlog，而是要先写入到中继日志中。但是 Redis 的从节点是立刻执行的。