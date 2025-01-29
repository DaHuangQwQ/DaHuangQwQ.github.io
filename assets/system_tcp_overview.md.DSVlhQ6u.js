import{_ as t,c as o,a2 as a,o as r}from"./chunks/framework.BQmytedh.js";const h=JSON.parse('{"title":"今天的网络","description":"","frontmatter":{},"headers":[],"relativePath":"system/tcp/overview.md","filePath":"system/tcp/overview.md"}'),p={name:"system/tcp/overview.md"};function s(n,e,i,m,l,c){return r(),o("div",null,e[0]||(e[0]=[a('<h1 id="今天的网络" tabindex="-1">今天的网络 <a class="header-anchor" href="#今天的网络" aria-label="Permalink to &quot;今天的网络&quot;">​</a></h1><h2 id="控制拥塞" tabindex="-1">控制拥塞 <a class="header-anchor" href="#控制拥塞" aria-label="Permalink to &quot;控制拥塞&quot;">​</a></h2><p><em>拥塞崩溃</em> 的本质：资源是有限的，有很多参与者竞争这个资源，当拥塞过于严重时，每一个参与者分配到的资源比没有拥塞时要差的多</p><p>从设计第一个网络以来，<strong>资源分配</strong>和<strong>拥塞控制</strong>就是网络领域中一直被研究的复杂问题。这些问题之所以复杂的一个原因是，它们不仅限于分层网络协议中的某一层。</p><p><strong>资源分配</strong>指的是网络设备试图满足应用程序对网络资源（主要是链路带宽和路由器或交换机中的缓存）的竞争性需求的过程。资源分配问题的一部分是决定何时说不，以及对谁说不。</p><p><strong>拥塞控制</strong>来描述网络节点（包括终端主机）为预防或应对超载所做的努力。首要任务是减轻拥塞，或者预防拥塞。拥塞控制机制中更常见的是具备一定的公平性，它们试图在所有用户之间分享痛苦，而不是只给少数人造成更大的痛苦。因此，我们可以看到许多拥塞控制机制内置了某种资源分配。</p><p>理解<strong>流量控制</strong>和<strong>拥塞控制</strong>之间的区别也很重要。流量控制的目的是防止发送端过快发送数据压垮慢的接收端。相比之下，拥塞控制旨在防止一组发送方发送过多的数据从而压垮网络中某个资源不足的点。</p><p>考虑到拥塞控制和资源分配可能在各种不同的地方（网络设备，终端主机）和各种不同的网络分层（IP层，传输层，应用层）中实现，最好可以从一个简单的方法开始进行研究，而这正是Jacobson 和 Karels 所做的（尽管他们的解决方案最终内容有很多细节）。</p><p>在早期的互联网中，路由器使用的是最基本的资源分配方法：First In First Out（FIFO）和 Tail Drop。路由器不感知数据流或应用程序，只是按照到达的顺序接收数据包。当出向链路容量小于到达速率时，数据包将被放入队列，并按照先进先出（FIFO）的规则处理队列中的数据。当队列满时，后到达的数据包将被丢弃（Tail Drop）。尽管历史悠久，但这仍然是今天最常见的队列形式</p><p>早期互联网发生拥塞崩溃的原因在于，被丢弃的数据包并不只是被弃置和遗忘。如果端到端的传输协议是TCP，丢弃的数据包将会被重传。因此，随着拥塞的增加，重传的数据包数量也在增加；换句话说，在发生拥塞时，进入网络的数据包数量会多于用户和应用程序带来的实际负载。更多的数据包会导致更多的丢包，进而导致更多的重传，进而导致更多的数据包进入网络中，以此循环往复。这就是导致崩溃的原因。</p><p>在讨论拥塞时，一个有用的术语是 <em><em>goodput</em></em>，它与吞吐量（throughput）有所区别，只有实际能传输数据的数据包才会计算在_goodput_之内。假设一个链路的利用率达到100%，但有60%的数据包是因为之前的丢失而被重新传输，那么你可以说这个链路的 <em><em>goodput</em></em> 只有40%。</p><p>当TCP遇到拥塞时不应该无脑的重传丢包，而必须同时做出其它响应。TCP需要能检测到拥塞——它可以通过识别数据包丢失来实现检测——随后通过减少发送到网络中的流量来响应拥塞。这种在拥塞发生时，端到端协议和网络之间的交互，构成了大部分当今拥塞控制和拥塞规避方法的基础。</p><h2 id="理论基础" tabindex="-1">理论基础 <a class="header-anchor" href="#理论基础" aria-label="Permalink to &quot;理论基础&quot;">​</a></h2><p>在考虑避免拥塞时，特别重要的两个话题是_公平性_ 和_稳定性_。</p><p>当网络出现拥塞时，某些用户或数据流必须减少发送量。显然，值得询问的问题包括：哪些数据流应该减少发送？所有数据流是否应该平等地分担拥塞带来的后果？如果某些数据流比其他数据流更加关注拥塞，会发生什么情况？这些问题是公平性问题的核心。</p><p>稳定性是任何控制系统的关键属性，拥塞控制也不例外。当检测到拥塞时，某些措施会被采取，以减少总体流量，从而缓解拥塞。当拥塞缓解时，似乎合理的做法是再次增加流量，但随着流量的不断增加又会导致新的拥塞。可以想象，这种拥塞与非拥塞状态之间的振荡可能会永远持续下去，如果网络一直在未被充分利用和拥塞崩溃之间来回切换，将会非常有害。我们真正希望找到的是一种平衡状态，网络忙碌但不至于发生拥塞崩溃。</p><p>在实现和部署了最初版本的 TCP 拥塞控制算法之后，研究人员开始构建 TCP 行为的数学模型，从而能够建立起丢包率、往返时间（RTT）和吞吐量之间的关系。</p><p>最终，大多数关于拥塞控制的理论工作将拥塞控制定义为“_一个分布式算法，用于在竞争者之间共享网络资源，其目标是选择发送速率，以在容量约束条件下最大化总体发送效率。</p>',18)]))}const g=t(p,[["render",s]]);export{h as __pageData,g as default};
