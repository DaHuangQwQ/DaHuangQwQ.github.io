# Aurora

## Quorum

假设有N个副本。为了能够执行写请求，必须要确保写操作被W个副本确认，W小于N。所以你需要将写请求发送到这W个副本。如果要执行读请求，那么至少需要从R个副本得到所读取的信息。这里的W对应的数字称为Write Quorum，R对应的数字称为Read Quorum。这是一个典型的Quorum配置。

Quorum系统要求，任意你要发送写请求的W个服务器，必须与任意接收读请求的R个服务器有重叠。这意味着，R加上W必须大于N（ 至少满足R + W = N + 1 ），这样任意W个服务器至少与任意R个服务器有一个重合。

这是Quorum系统的要求，Read Quorum必须至少与Write Quorum有一个服务器是重合的。所以任何读请求可以从至少一个看见了之前写请求的服务器得到回复。

客户端读请求可能会得到R个不同的结果，现在的问题是，客户端如何知道从R个服务器得到的R个结果中，哪一个是正确的呢？在Quorum系统中使用的是版本号（Version）。每一次执行写请求，你需要将新的数值与一个增加的版本号绑定。之后，客户端发送读请求，从Read Quorum得到了一些回复，客户端可以直接使用其中的最高版本号的数值。

如果你不能与Quorum数量的服务器通信，不管是Read Quorum还是Write Quorum，那么你只能不停的重试了。这是Quorum系统的规则，你只能不停的重试，直到服务器重新上线，或者重新联网。

相比Chain Replication，这里的优势是可以轻易的剔除暂时故障、失联或者慢的服务器。当你执行写请求时，你会将新的数值和对应的版本号给所有N个服务器，但是只会等待W个服务器确认。对于读请求，你可以将读请求发送给所有的服务器，但是只等待R个服务器返回结果。因为你只需要等待R个服务器，这意味着在最快的R个服务器返回了之后，你就可以不用再等待慢服务器或者故障服务器超时。这里忽略慢服务器或者挂了的服务器的机制完全是隐式的。在这里，我们不用决定哪个服务器是在线或者是离线的，只要Quorum能达到，系统就能继续工作，所以我们可以非常平滑的处理慢服务或者挂了的服务。

除此之外，Quorum系统可以调整读写的性能。通过调整Read Quorum和Write Quorum，可以使得系统更好的支持读请求或者写请求。对于前面的例子，我们可以假设Write Quorum是3，每一个写请求必须被所有的3个服务器所确认。Read Quorum可以只是1。所以，如果你想要提升读请求的性能，在一个3个服务器的Quorum系统中，你可以设置R为1，W为3，这样读请求会快得多，因为它只需要等待一个服务器的结果，但是代价是写请求执行的比较慢。如果你想要提升写请求的性能，可以设置R为3，W为1，这意味着可能只有1个服务器有最新的数值，但是因为客户端会咨询3个服务器，3个服务器其中一个肯定包含了最新的数值。

## Aurora读写存储服务器

对于Aurora来说，它的写请求从来不会覆盖任何数据，它的写请求只会在当前Log中追加条目（Append Entries）。所以，Aurora使用Quorum只是在数据库执行事务并发出新的Log记录时，确保Log记录至少出现在4个存储服务器上，之后才能提交事务。所以，Aurora的Write Quorum的实际意义是，每个新的Log记录必须至少追加在4个存储服务器中，之后才可以认为写请求完成了。当Aurora执行到事务的结束，并且在回复给客户端说事务已经提交之前，Aurora必须等待Write Quorum的确认，也就是4个存储服务器的确认，组成事务的每一条Log都成功写入了。

数据库服务器有时需要读取page。Aurora数据库服务器写入的是Log条目，但是读取的是page。这也是与Quorum系统不一样的地方。Quorum系统通常读写的数据都是相同的。除此之外，在一个普通的操作中，数据库服务器可以避免触发Quorum Read。数据库服务器会记录每一个存储服务器接收了多少Log。首先，Log条目都有类似12345这样的编号，当数据库服务器发送一条新的Log条目给所有的存储服务器，存储服务器接收到它们会返回说，我收到了第79号和之前所有的Log。数据库服务器会记录这里的数字，或者说记录每个存储服务器收到的最高连续的Log条目号。这样的话，当一个数据库服务器需要执行读操作，它只会挑选拥有最新Log的存储服务器，然后只向那个服务器发送读取page的请求。所以，数据库服务器执行了Quorum Write，但是却没有执行Quorum Read。因为它知道哪些存储服务器有最新的数据，然后可以直接从其中一个读取数据。这样的代价小得多，因为这里只读了一个副本，而不用读取Quorum数量的副本。

## 数据分片

为了能支持超过10TB数据的大型数据库。Amazon的做法是将数据库的数据，分割存储到多组存储服务器上，每一组都是6个副本，分割出来的每一份数据是10GB。所以，如果一个数据库需要20GB的数据，那么这个数据库会使用2个PG（Protection Group），其中一半的10GB数据在一个PG中，包含了6个存储服务器作为副本，另一半的10GB数据存储在另一个PG中，这个PG可能包含了不同的6个存储服务器作为副本。

这里有一件有意思的事情，你可以将磁盘中的data page分割到多个独立的PG中，比如说奇数号的page存在PG1，偶数号的page存在PG2。如果可以根据data page做sharding，那是极好的。

Sharding之后，Log该如何处理就不是那么直观了。如果有多个Protection Group，该如何分割Log呢？答案是，当Aurora需要发送一个Log条目时，它会查看Log所修改的数据，并找到存储了这个数据的Protection Group，并把Log条目只发送给这个Protection Group对应的6个存储服务器。这意味着，每个Protection Group只存储了部分data page和所有与这些data page关联的Log条目。所以每个Protection Group存储了所有data page的一个子集，以及这些data page相关的Log条目。

如果其中一个存储服务器挂了，我们期望尽可能快的用一个新的副本替代它。因为如果4个副本挂了，我们将不再拥有Read Quorum，我们也因此不能创建一个新的副本。所以我们想要在一个副本挂了以后，尽可能快的生成一个新的副本。表面上看，每个存储服务器存放了某个数据库的某个某个Protection Group对应的10GB数据，但实际上每个存储服务器可能有1-2块几TB的磁盘，上面存储了属于数百个Aurora实例的10GB数据块。所以在存储服务器上，可能总共会有10TB的数据，当它故障时，它带走的不仅是一个数据库的10GB数据，同时也带走了其他数百个数据库的10GB数据。所以生成的新副本，不是仅仅要恢复一个数据库的10GB数据，而是要恢复存储在原来服务器上的整个10TB的数据。我们来做一个算术，如果网卡是10Gb/S，通过网络传输10TB的数据需要8000秒。这个时间太长了，我们不想只是坐在那里等着传输。所以我们不想要有这样一种重建副本的策略：找到另一台存储服务器，通过网络拷贝上面所有的内容到新的副本中。我们需要的是一种快的多的策略。

类似的，对于所有的Protection Group对应的数据块，都会有类似的副本。这种模式下，如果一个存储服务器挂了，假设上面有100个数据块，现在的替换策略是：找到100个不同的存储服务器，其中的每一个会被分配一个数据块，也就是说这100个存储服务器，每一个都会加入到一个新的Protection Group中。所以相当于，每一个存储服务器只需要负责恢复10GB的数据。所以在创建新副本的时候，我们有了100个存储服务器（下图中下面那5个空白的）。

## 只读数据库

但是对于读请求，可以发送给多个数据库。Aurora的确有多个只读数据库，这些数据库可以从后端存储服务器读取数据。所以，图3中描述了，除了主数据库用来处理写请求，同时也有一组只读数据库。论文中宣称可以支持最多15个只读数据库。如果有大量的读请求，读请求可以分担到这些只读数据库上。