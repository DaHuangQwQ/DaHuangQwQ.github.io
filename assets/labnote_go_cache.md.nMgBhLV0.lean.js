import{_ as e,c as l,a2 as i,o as r}from"./chunks/framework.BQmytedh.js";const b=JSON.parse('{"title":"缓存","description":"","frontmatter":{},"headers":[],"relativePath":"labnote/go/cache.md","filePath":"labnote/go/cache.md"}'),h={name:"labnote/go/cache.md"};function t(o,a,n,c,u,d){return r(),l("div",null,a[0]||(a[0]=[i('<h1 id="缓存" tabindex="-1">缓存 <a class="header-anchor" href="#缓存" aria-label="Permalink to &quot;缓存&quot;">​</a></h1><h2 id="缓存模式" tabindex="-1">缓存模式 <a class="header-anchor" href="#缓存模式" aria-label="Permalink to &quot;缓存模式&quot;">​</a></h2><h3 id="cache-aside" tabindex="-1">Cache Aside <a class="header-anchor" href="#cache-aside" aria-label="Permalink to &quot;Cache Aside&quot;">​</a></h3><ul><li>把 Cache 当成一个普通的数据源</li><li>更新 Cache 和 DB 都依赖于开发者自己写代码</li></ul><p><strong>业务代码</strong>可以做决策:</p><ul><li>未命中的时候是否要从 DB 取数据。如果不从 DB 取，可以考虑使用默认值进行业务处理</li><li>同步 or 异步读取数据并且写入</li><li>采用 singleflight</li></ul><h3 id="read-through" tabindex="-1">Read Through <a class="header-anchor" href="#read-through" aria-label="Permalink to &quot;Read Through&quot;">​</a></h3><ul><li>业务代码只需要从 cache 中读取数据，cache 会在缓存不命中的时候去读取数据</li><li>写数据的时候，业务代码需要自己写 DB 和写 cache</li></ul><p><strong>cache</strong> 可以做决策:</p><ul><li><p>未命中的时候是否要从 DB 取数据。如果不从 DB 取，可以考虑使用默认值进行业务处理</p></li><li><p>同步 or 异步读取数据并且写入</p></li><li><p>采用 singleflight</p></li></ul><h3 id="write-through" tabindex="-1">Write Through <a class="header-anchor" href="#write-through" aria-label="Permalink to &quot;Write Through&quot;">​</a></h3><ul><li>开发者只需要写入 cache，cache 自己会更新数据库</li><li>在读未命中缓存的情况下，开发者需要自己去数据库捞数据，然后更新缓存(此时缓存不需要更新 DB 了)</li></ul><h3 id="write-back" tabindex="-1">Write Back <a class="header-anchor" href="#write-back" aria-label="Permalink to &quot;Write Back&quot;">​</a></h3><ul><li>在写操作的时候写了缓存直接返回，不会直接更新数据库，读也是直接读缓存</li><li>在缓存过期的时候，将缓存写回去数据库</li><li>所有 goroutine 都是读写缓存，不存在一致性的问题(如果是本地缓存依旧会有问题)</li><li>数据可能丢失:如果在缓存过期刷新到数据库之前，缓存宕机，那么会丢失数据</li></ul><h3 id="refresh-ahead" tabindex="-1">Refresh Ahead <a class="header-anchor" href="#refresh-ahead" aria-label="Permalink to &quot;Refresh Ahead&quot;">​</a></h3><p>refresh-ahead 依赖于 CDC(changed data capture) 接口: • 数据库暴露数据变更接口</p><ul><li>cache 或者第四方在监听到数据变更之后自动更新数据</li><li>如果读 cache 未命中，依旧要刷新缓存的话，依然会出现并发问题</li></ul><h2 id="缓存异常" tabindex="-1">缓存异常 <a class="header-anchor" href="#缓存异常" aria-label="Permalink to &quot;缓存异常&quot;">​</a></h2><h3 id="缓存穿透" tabindex="-1">缓存穿透 <a class="header-anchor" href="#缓存穿透" aria-label="Permalink to &quot;缓存穿透&quot;">​</a></h3><ul><li>读请求对应的数据根本不存在，因此每次都会发起数 据库查询。数据库返回 NULL，所以下一次请求依旧 会打到数据库。</li><li>关键点就是这个数据根本没有，所以不会回写缓存。</li><li>一般是黑客使用了一些非法的请求，比如说非法的邮 箱、ID 等。</li></ul><h4 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><ul><li>使用 singleflight 能够缓解问题。但如果攻击者是构造了大量不同的不存在的 key，那么 singleflight 的效果并不是很好</li><li>知道数据库里面根本没有数据，缓存未命中就直接返回 <ul><li>缓存里面是全量数据，那么未命中就可以直接返回</li><li>使用布隆过滤器、bit array 等结构，未命中的时候再问一下这些结构</li></ul></li><li>缓存没有，但是依旧不会去数据库查询，而是使用默认值</li><li>在缓存未命中回表查询的时候，限流</li></ul><h3 id="缓存击穿" tabindex="-1">缓存击穿 <a class="header-anchor" href="#缓存击穿" aria-label="Permalink to &quot;缓存击穿&quot;">​</a></h3><ul><li>缓存中没有对应 key 的数据。</li><li>一般情况下，某个 key 缓存未命中并不会导致严重问 题。但是如果该 key 的访问量非常大，大家都去数据 库查询数据，那么就可能压垮数据库。</li><li>击穿和穿透比起来，关键在于击穿本身数据在 DB 里 面是有的，只是缓存里面没有而已，所以只要回写到 缓存，此一次访问就是命中缓存。</li></ul><h4 id="解决方案-1" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-1" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><ul><li>singleflight</li><li>缓存未命中的时候，使用默认值</li><li>在回查数据库的时候，限流</li></ul><h3 id="缓存雪崩" tabindex="-1">缓存雪崩 <a class="header-anchor" href="#缓存雪崩" aria-label="Permalink to &quot;缓存雪崩&quot;">​</a></h3><ul><li>同一时刻，大量 key 过期，查询都要回查数据库。</li><li>常见场景是在启动的时候加载缓存，因为所有 key 的 过期时间都一样，所以会在同一时间全部过期。</li></ul><h4 id="解决方案-2" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-2" aria-label="Permalink to &quot;解决方案&quot;">​</a></h4><ul><li>在设置 key 过期时间的时候，加上一个随机的偏移量</li></ul><blockquote><p>singleflight 设计模式：在有多个 goroutine 试图去数据库加载 同一个 key 对应数据的时候，只允许一个 goroutine 过 去查询，其它都在原地等待结果。</p><p>对数据库的压力本来是跟 QPS 相当，变为跟同一时刻不 同 key 的数量和实例数量相当。</p></blockquote><h2 id="缓存一致性" tabindex="-1">缓存一致性 <a class="header-anchor" href="#缓存一致性" aria-label="Permalink to &quot;缓存一致性&quot;">​</a></h2><p>缓存一致性的主要根源<strong>并发更新</strong>和<strong>部分失败</strong></p><h3 id="解决方案-3" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案-3" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>哈希一致性负载均衡算法 + singleflight，确保某个 key 对应的请求必然打到同一个机器上，唯一可能出现一致性问题是在扩容、缩容和应用重启的过程</li><li>全局的分布式锁。适合 于强一致性，极端写少的场景</li></ul><blockquote><p>可以采用两段式加锁:首先在实例级别上应用 singleflight ，确保一个实例只有一个goroutine 参与全局锁竞争。那么最终有 N 个实例，就是有 N 个 goroutine 去抢分布式锁</p></blockquote>',36)]))}const g=e(h,[["render",t]]);export{b as __pageData,g as default};