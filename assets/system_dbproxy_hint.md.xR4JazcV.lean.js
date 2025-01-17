import{_ as t,c as e,a2 as i,o as r}from"./chunks/framework.BQmytedh.js";const u=JSON.parse('{"title":"链路数据传递和 HINT 机制","description":"","frontmatter":{},"headers":[],"relativePath":"system/dbproxy/hint.md","filePath":"system/dbproxy/hint.md"}'),l={name:"system/dbproxy/hint.md"};function o(n,a,d,s,h,p){return r(),e("div",null,a[0]||(a[0]=[i('<h1 id="链路数据传递和-hint-机制" tabindex="-1">链路数据传递和 HINT 机制 <a class="header-anchor" href="#链路数据传递和-hint-机制" aria-label="Permalink to &quot;链路数据传递和 HINT 机制&quot;">​</a></h1><p>HINT 其实是我们自己定义的一种语法，用来<strong>传递上下文信息</strong>，这些上下文信息取决于具体的业务场景。我举几个例子：</p><ul><li>AB 测试；</li><li>全链路追踪，也就是所谓的 trace id。有一些公司有自己的标准，他们可能需要传递 transaction id，也就是 tid。通过这个 trace id，就可以将一个请求从 web 到 service，再到 dbproxy 的整个链条都串起来；</li><li>全链路压测，也就是借助 HINT 来传递当前查询是测试请求的查询，还是线上请求的查询，从而决定将请求转发到哪一个数据库；</li></ul><p>除了这些功能，还有一些 dbproxy 本身的功能也要借助这个 HINT 来实现：</p><ul><li>强制走主库：要用 HINT 来告诉 dbproxy；</li><li>使用何种跨库事务，也要 HINT 来告诉 dbproxy；</li></ul><p>而 HINT 的语法也很简单，就是一种特殊格式的 SQL 注释而已。例如前面几个例子：</p><ul><li>/* @ab_test a */: 表明这是AB 测试中的 A</li><li>/* @shadow true */: 表明这里全链路测试中的测试请求的查询</li><li>/* @use_master true*/: 表明这是强制走主库</li></ul><p>HINT 是我们设计的一种携带查询上下文信息的机制，它的本质就是一种特殊格式的注释。</p><p>我们在设计的时候，就考虑到需要携带上下文信息，所以在 ANTLR 里面定义了 HINT 的语法。在我们的预期中，HINT 主要解决的场景包括 AB 测试，链路追踪，全链路压测等。</p><p>当然，我们 dbproxy 本身也用 HINT 来支持了一些特定的功能，比如说在读写分离之后，要指定强制走主库，是通过 HINT 来传递的。在开启数据库事务的时候，如果不希望使用默认的延迟事务，那么也需要借助 HINT 来传递事务信息。</p><h2 id="链路数据传递" tabindex="-1">链路数据传递 <a class="header-anchor" href="#链路数据传递" aria-label="Permalink to &quot;链路数据传递&quot;">​</a></h2><h2 id="hint-机制的设计与实现" tabindex="-1">HINT 机制的设计与实现 <a class="header-anchor" href="#hint-机制的设计与实现" aria-label="Permalink to &quot;HINT 机制的设计与实现&quot;">​</a></h2><h2 id="使用-hint-机制传递-trace-id" tabindex="-1">使用 HINT 机制传递 trace id <a class="header-anchor" href="#使用-hint-机制传递-trace-id" aria-label="Permalink to &quot;使用 HINT 机制传递 trace id&quot;">​</a></h2>',13)]))}const N=t(l,[["render",o]]);export{u as __pageData,N as default};