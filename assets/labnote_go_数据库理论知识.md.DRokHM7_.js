import{_ as a,c as i,a2 as l,o}from"./chunks/framework.BQmytedh.js";const c=JSON.parse('{"title":"数据库理论知识","description":"","frontmatter":{},"headers":[],"relativePath":"labnote/go/数据库理论知识.md","filePath":"labnote/go/数据库理论知识.md"}'),d={name:"labnote/go/数据库理论知识.md"};function t(p,e,r,n,u,s){return o(),i("div",null,e[0]||(e[0]=[l('<h1 id="数据库理论知识" tabindex="-1">数据库理论知识 <a class="header-anchor" href="#数据库理论知识" aria-label="Permalink to &quot;数据库理论知识&quot;">​</a></h1><h2 id="自增主键" tabindex="-1">自增主键 <a class="header-anchor" href="#自增主键" aria-label="Permalink to &quot;自增主键&quot;">​</a></h2><p>一句话解释自增主键，就是为了提高性能。自增主键从两方面提高性能：</p><ul><li>自增主键可以使得新插入的记录在物理上总是出现在已有记录的后面，避免了页分裂，减少了索引碎片，提升了插入和查询的性能；</li><li>自增主键可以优化页的利用，减少磁盘 I/O 和内存使用，因为数据是按顺序写入的。并且在范围查询的时候，如果结果集是连续的，那么这些数据很有可能在同一页，或者相邻的页上，这样能够充分利用预读的特性。</li></ul><p>除了这两个关键好处以外，从工程上来说自增主键也有好处：</p><ul><li>从代码落地的角度上来说，可以避免自己手动生成、管理主键的问题；</li><li>可以统一规定使用自增主键，而不必担忧因为团队规模扩大导致大家胡乱使用主键；</li></ul><blockquote><p>预读；页分裂；减少页分裂，优化页利用；</p></blockquote><p>一般来说，只有在没有进行分库分表的时候，我们才会选择自增主键。在分库分表的时候，自增主键就不太好用了。</p><p>不过在分库分表环境下，也可以通过设置步长来使用自增主键。例如说分了三个表，那么就可以将步长设置为 3，并且每个表从不同的起点开始自增。具体来说，第一个表就可以按照 1, 4 ,7 ... 的规律使用自增主键，第二个表按照 2,5,8... 的规律使用自增主键，以及第三个表就用 3,6,9 ... 的规律来使用自增主键。</p><p>即便排除这种用法，在分库分表的环境下依旧会尽量让生成的主键保持单调递增，以尽量获得和自增主键差不多的优势。</p><h2 id="mvcc" tabindex="-1">MVCC <a class="header-anchor" href="#mvcc" aria-label="Permalink to &quot;MVCC&quot;">​</a></h2><h3 id="版本链" tabindex="-1">版本链 <a class="header-anchor" href="#版本链" aria-label="Permalink to &quot;版本链&quot;">​</a></h3><p>我们先来看第一个存储不同版本的数据。MVCC 将数据的不同版本存储在 undo log 里面。undo log 是 MySQL 中和事务密切有关的概念，主要是用于在事务回滚的时候，能够将数据恢复到事务开始之前的状态。</p><p>在 undo log 里面使用版本链将数据不同的版本串联起来了，你可以注意到，上图里面 x 这一条数据有两个额外的列：trx_id，事务 ID，你可以认为它代表的就是版本；roll_ptr，回滚指针，实质上就是用它来将不同版本串联在了一起。</p><h3 id="read-view" tabindex="-1">Read View <a class="header-anchor" href="#read-view" aria-label="Permalink to &quot;Read View&quot;">​</a></h3><p>那么当一个事务执行的时候，它在这么长的一个链条里面，就要考虑读数据应该读哪个版本了——也就是读哪个事务 ID 对应的数据。这个过程是通过一个称为 Read View 的机制来实现的，它也就是 MySQL 中实现不同隔离级别的核心机制。</p><p>Read View，如果要是我来翻译的话，我会翻译为<strong>可见视图</strong>，也就是说 Read View 决定了你这个事务能看到什么版本的数据。暂时你可以理解为，这个 Read View 就是记录了哪些事务 ID 对于当下这个正在执行的事务来说是可见的。</p><p>这里我们深入分析已提交读和可重复读。</p><ul><li>对于已提交读来说，每次执行读数据的时候都会生成一个 Read View。</li><li>对于可重复读来说，在事务开始的时候生成一个 Read View，后面都用这个 Read View。</li></ul><p>所以你瞬间就懂了可重复读的精髓—— Read View 始终都是那一个，后续就算事务执行过程中有新事务提交了，但是 Read View 没有更新，读到的就还是历史版本，也就是你事务开启时候的那一个版本的数据。</p><p>而 Read View 记录哪些事务是可见，哪些事务不可见的原理有点违反直觉，它记录的是 m_ids，也就是当前事务开启的时候，数据库上别的还没提交的事务 ID。那么很显然，假设说现在有一个事务的 ID 是 10，并且 m_ids = 7,8，那么在事务开启的时候：</p><ul><li>9 是可见的，因为 9 在事务 10 开始的时候已经提交了；</li><li>7 和 8 是不可见的，因为它们还没有提交</li><li>1...6 都是可见的，因为它们也已经提交了</li></ul><p>假设说现在有一个新的事务又开始了，ID 是 11，在 11 没有提交的时候，它都是不可见的（除非你是未提交读）。当 11 提交之后：</p><ul><li>如果是已提交读，重新生成一个 Read View，那么这时候数据库就会发现，11 已经提交了，那么它就可见了；</li><li>如果是可重复读，那么 Read View 还是那个 Read View，而 11 不在 m_ids 中，说明是事务 10 生成之后开启的事务，就算提交了也不可见；</li></ul><p>而与 MVCC 还强关联的一个概念是 redo log，它实际上并不是为了支撑 MVCC 而引入的，它是为了事务提交之后崩溃，还能恢复过来而引入的。</p><blockquote><p>怎么存，undo log；怎么取，Read View</p></blockquote><p>MVCC，全称是多版本并发控制，是 MySQL InnoDB 中用来实现事务，以及事务隔离级别的核心机制。</p><p>它的关键点有两个：存储不同版本的数据以及如何控制事务读取哪个版本的事务。</p><p>就存储来说，MVCC 使用了版本链。每一条数据都有两个额外的列，一个是事务 ID，也可以看做是版本号；一个是回滚指针，MVCC 利用回滚指针将数据不同的版本串联在一起，并且将这个版本链存储到了 undo log 日志中。</p><p>而后，MVCC 使用 Read View 来做数据可见性控制，它记录了生成 Read View 时候还保持活跃的事务。在已提交读的情况下，事务会在每次执行读数据的时候，就重新生成一个 Read View，这样可以保证能够立刻看到最新的提交的事务。</p><p>而在可重复读的情况下，只会在事务 BEGIN 的时候生成一个 Read View，后面都是使用这个 Read View。</p><p>和 MVCC，或者说和事务实现机制有关的是 redo log，但是一般来说 redo log 是用于事务恢复的。例如说事务提交之后数据库就立刻崩溃了，工作还没做完，那么就需要从 redo log 来恢复数据，保证数据一致性。</p>',32)]))}const h=a(d,[["render",t]]);export{c as __pageData,h as default};
