import{_ as o,c as a,a2 as r,o as t}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"Raft","description":"","frontmatter":{},"headers":[],"relativePath":"system/ds/Raft.md","filePath":"system/ds/Raft.md"}'),l={name:"system/ds/Raft.md"};function i(n,e,p,d,L,s){return t(),a("div",null,e[0]||(e[0]=[r('<h1 id="raft" tabindex="-1">Raft <a class="header-anchor" href="#raft" aria-label="Permalink to &quot;Raft&quot;">​</a></h1><h2 id="脑裂-split-brain" tabindex="-1">脑裂（Split Brain） <a class="header-anchor" href="#脑裂-split-brain" aria-label="Permalink to &quot;脑裂（Split Brain）&quot;">​</a></h2><h2 id="过半票决-majority-vote" tabindex="-1">过半票决（Majority Vote） <a class="header-anchor" href="#过半票决-majority-vote" aria-label="Permalink to &quot;过半票决（Majority Vote）&quot;">​</a></h2><h2 id="raft-初探" tabindex="-1">Raft 初探 <a class="header-anchor" href="#raft-初探" aria-label="Permalink to &quot;Raft 初探&quot;">​</a></h2><p>应用程序只会将来自客户端的请求对应的操作向下发送到Raft层，并且告知Raft层，请把这个操作提交到多副本的日志（Log）中，并在完成时通知我。</p><p>Raft节点之间相互交互，直到过半的Raft节点将这个新的操作加入到它们的日志中，也就是说这个操作被过半的Raft节点复制了。</p><h2 id="leader选举-leader-election" tabindex="-1">Leader选举（Leader Election） <a class="header-anchor" href="#leader选举-leader-election" aria-label="Permalink to &quot;Leader选举（Leader Election）&quot;">​</a></h2><p>Raft生命周期中可能会有不同的Leader，它使用任期号（term number）来区分不同的Leader。Followers 不需要知道 Leader 的 ID，它们只需要知道当前的任期号。每一个任期最多有一个Leader。对于每个任期来说，只能有 0 个或一个 Leader，不可能两个Leader出现在同一个任期中。</p><p>那Leader是如何创建出来的呢？每个Raft节点都有一个选举定时器（Election Timer），如果在这个定时器时间耗尽之前，当前节点没有收到任何当前 Leader 的消息，这个节点会认为 Leader 已经下线，并开始一次选举。所以我们这里有了这个选举定时器，当它的时间耗尽时，当前节点会开始一次选举。</p><p>开始一次选举的意思是，当前服务器会增加任期号（term number），因为它想成为一个新的Leader。</p><h2 id="日志恢复-log-backup" tabindex="-1">日志恢复（Log Backup） <a class="header-anchor" href="#日志恢复-log-backup" aria-label="Permalink to &quot;日志恢复（Log Backup）&quot;">​</a></h2><p>我们现在想将这个请求复制到所有的 Followers 上。这里的 AppendEntries RPC还包含了prevLogIndex字段和prevLogTerm字段。</p><p>prevLogIndex是前一个槽位的位置；prevLogTerm是S3上前一个槽位的任期号。</p><p>这样的AppendEntries消息发送给了Followers。而Followers，它们在收到AppendEntries消息时，可以知道它们收到了一个带有若干Log条目的消息，并且是从槽位prevLogIndex开始。Followers在写入Log之前，会检查本地的前一个Log条目，是否与Leader发来的有关前一条Log的信息匹配。</p><p>如果不匹配的话，S2将拒绝这个AppendEntries，并返回False给Leader。</p><p>为了响应Followers返回的拒绝，Leader会减小对应的nextIndex。所以它现在减小了两个Followers的nextIndex。这次Leader发送的AppendEntries消息包含了prevLogIndex之后的所有条目</p><p>而Leader在收到了Followers对于AppendEntries的肯定的返回之后，它会增加相应的nextIndex到14。</p><p>我们擦除了一些Log条目，为什么Raft系统可以安全的删除这条记录？</p><p>这条Log条目并没有存在于过半服务器中，因此无论之前的Leader是谁，发送了这条Log，它都没有得到过半服务器的认可。因此旧的Leader不可能commit了这条记录，也就不可能将它应用到应用程序的状态中，进而也就不可能回复给客户端说请求成功了。</p><h2 id="选举约束-election-restriction" tabindex="-1">选举约束（Election Restriction） <a class="header-anchor" href="#选举约束-election-restriction" aria-label="Permalink to &quot;选举约束（Election Restriction）&quot;">​</a></h2><p>Raft有一个稍微复杂的选举限制（Election Restriction）。这个限制要求，在处理别节点发来的RequestVote RPC时，需要做一些检查才能投出赞成票。这里的限制是，节点只能向满足下面条件之一的候选人投出赞成票：</p><ol><li><p>候选人最后一条Log条目的任期号<strong>大于</strong>本地最后一条Log条目的任期号；</p></li><li><p>或者，候选人最后一条Log条目的任期号<strong>等于</strong>本地最后一条Log条目的任期号，且候选人的Log记录长度<strong>大于等于</strong>本地Log记录的长度</p></li></ol><h2 id="快速恢复-fast-backup" tabindex="-1">快速恢复（Fast Backup） <a class="header-anchor" href="#快速恢复-fast-backup" aria-label="Permalink to &quot;快速恢复（Fast Backup）&quot;">​</a></h2><p>为了能够更快的恢复日志，让Follower返回足够的信息给Leader，这样Leader可以以任期（Term）为单位来回退，而不用每次只回退一条Log条目。所以现在，在恢复Follower的Log时，如果Leader和Follower的Log不匹配，Leader只需要对每个不同的任期发送一条AppendEntries，而不用对每个不同的Log条目发送一条AppendEntries。</p><p>我将可能出现的场景分成3类，为了简化，这里只画出一个Leader（S2）和一个Follower（S1），S2将要发送一条任期号为6的AppendEntries消息给Follower。</p><ul><li>场景1：S1没有任期6的任何Log，因此我们需要回退一整个任期的Log。</li></ul><blockquote><p>S1: 4 5 5</p><p>S2: 4 6 6 6</p></blockquote><ul><li>场景2：S1收到了任期4的旧Leader的多条Log，但是作为新Leader，S2只收到了一条任期4的Log。所以这里，我们需要覆盖S1中有关旧Leader的一些Log。</li></ul><blockquote><p>S1: 4 4 4</p><p>S2: 4 6 6 6</p></blockquote><ul><li>场景3：S1与S2的Log不冲突，但是S1缺失了部分S2中的Log。</li></ul><blockquote><p>S1: 4</p><p>S2: 4 6 6 6</p></blockquote><p>可以让Follower在回复Leader的AppendEntries消息中，携带3个额外的信息，来加速日志的恢复。这里的回复是指，Follower因为Log信息不匹配，拒绝了Leader的AppendEntries之后的回复。这里的三个信息是指：</p><ul><li>XTerm：这个是Follower中与Leader冲突的Log对应的任期号。在之前（7.1）有介绍Leader会在prevLogTerm中带上本地Log记录中，前一条Log的任期号。如果Follower在对应位置的任期号不匹配，它会拒绝Leader的AppendEntries消息，并将自己的任期号放在XTerm中。如果Follower在对应位置没有Log，那么这里会返回 -1。</li><li>XIndex：这个是Follower中，对应任期号为XTerm的第一条Log条目的槽位号。</li><li>XLen：如果Follower在对应位置没有Log，那么XTerm会返回-1，XLen表示空白的Log槽位数。</li></ul><p>我们再来看这些信息是如何在上面3个场景中，帮助Leader快速回退到适当的Log条目位置。</p><ul><li>场景1。Follower（S1）会返回XTerm=5，XIndex=2。Leader（S2）发现自己没有任期5的日志，它会将自己本地记录的，S1的nextIndex设置到XIndex，也就是S1中，任期5的第一条Log对应的槽位号。所以，如果Leader完全没有XTerm的任何Log，那么它应该回退到XIndex对应的位置（这样，Leader发出的下一条AppendEntries就可以一次覆盖S1中所有XTerm对应的Log）。</li><li>场景2。Follower（S1）会返回XTerm=4，XIndex=1。Leader（S2）发现自己其实有任期4的日志，它会将自己本地记录的S1的nextIndex设置到本地在XTerm位置的Log条目后面，也就是槽位2。下一次Leader发出下一条AppendEntries时，就可以一次覆盖S1中槽位2和槽位3对应的Log。</li><li>场景3。Follower（S1）会返回XTerm=-1，XLen=2。这表示S1中日志太短了，以至于在冲突的位置没有Log条目，Leader应该回退到Follower最后一条Log条目的下一条，也就是槽位2，并从这开始发送AppendEntries消息。槽位2可以从XLen中的数值计算得到。</li></ul><h2 id="持久化-persistence" tabindex="-1">持久化（Persistence） <a class="header-anchor" href="#持久化-persistence" aria-label="Permalink to &quot;持久化（Persistence）&quot;">​</a></h2><p>为什么可以安全的丢弃lastApplied？</p><p>这里综合考虑了Raft的简单性和安全性。之所以这些数据是非持久化存储的，是因为Leader可以通过检查自己的Log和发送给Followers的AppendEntries的结果，来发现哪些内容已经commit了。如果因为断电，所有节点都重启了。Leader并不知道哪些内容被commit了，哪些内容被执行了。但是当它发出AppendEntries，并从Followers搜集回信息。它会发现，Followers中有哪些Log与Leader的Log匹配，因此也就可以发现，在重启前，有哪些被commit了。</p><h2 id="日志快照-log-snapshot" tabindex="-1">日志快照（Log Snapshot） <a class="header-anchor" href="#日志快照-log-snapshot" aria-label="Permalink to &quot;日志快照（Log Snapshot）&quot;">​</a></h2><p>有了快照，并且Raft将它存放在磁盘中之后，Raft将不会再需要这部分Log。只要Raft持久化存储了快照，快照对应的Log槽位号，以及Log槽位号之后的所有Log，那么快照对应槽位号之前的这部分Log可以被丢弃，我们将不再需要这部分Log。</p><p>Raft要求应用程序做快照，得到快照之后将其存储在磁盘中，同时持久化存储快照之后的Log，并丢弃快照之前的Log。所以，Raft的持久化存储实际上是持久化应用程序快照，和快照之后的Log。</p><p>如果Leader发现有任何一个Follower的Log落后于Leader要做快照的点，Raft选择的方法是，Leader可以丢弃Follower需要的Log。所以，我们需要某种机制让AppendEntries能处理某些Follower Log的结尾到Leader Log开始之间丢失的这一段Log。解决方法是（一个新的消息类型）InstallSnapshot RPC。</p><p>如果它的Log短于Leader通过 AppendEntries RPC发给它的内容，那么它首先会强制Leader回退自己的Log。在某个点，Leader将不能再回退，因为它已经到了自己Log的起点。这时，Leader会将自己的快照发给Follower，之后立即通过AppendEntries将后面的Log发给Follower。</p><h2 id="线性一致-linearizability" tabindex="-1">线性一致（Linearizability） <a class="header-anchor" href="#线性一致-linearizability" aria-label="Permalink to &quot;线性一致（Linearizability）&quot;">​</a></h2><p>通常来说，线性一致等价于强一致。一个服务是线性一致的，那么它表现的就像只有一个服务器，并且服务器没有故障，这个服务器每次执行一个客户端请求，并且没什么奇怪的是事情发生。</p><p>要达到线性一致，我们需要为这里的4个操作生成一个线性一致的顺序。所以我们现在要确定顺序，对于这个顺序，有两个限制条件：</p><ol><li><p>如果一个操作在另一个操作开始前就结束了，那么这个操作必须在执行历史中出现在另一个操作前面。</p></li><li><p>执行历史中，读操作，必须在相应的key的写操作之后。</p></li></ol><p>（这里可以这么理解，左边是一个多副本系统的输入输出，因为分布式程序或者程序的执行，产生了这样的时序，但是在一个线性一致的系统中，实际是按照右边的顺序执行的操作。左边是实际时钟，右边是逻辑时钟。）</p>',48)]))}const h=o(l,[["render",i]]);export{c as __pageData,h as default};
