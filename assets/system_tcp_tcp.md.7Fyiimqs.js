import{_ as t,c as d,a2 as o,o as a}from"./chunks/framework.BQmytedh.js";const P=JSON.parse('{"title":"TCP","description":"","frontmatter":{},"headers":[],"relativePath":"system/tcp/tcp.md","filePath":"system/tcp/tcp.md"}'),c={name:"system/tcp/tcp.md"};function n(i,e,s,p,r,l){return a(),d("div",null,e[0]||(e[0]=[o(`<h1 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-label="Permalink to &quot;TCP&quot;">​</a></h1><h2 id="包传输" tabindex="-1">包传输 <a class="header-anchor" href="#包传输" aria-label="Permalink to &quot;包传输&quot;">​</a></h2><p>互联网提供一种_<strong>无连接</strong>，<strong>尽力而为</strong>_ 的数据包传输服务模型，这个模型由互联网协议（Internet Protocol，IP）所规定，由交换机和路由器实现。</p><ul><li><em><strong>无连接</strong></em> 意味着每个IP数据包将携带足够的信息供网络将其转发到正确的目的地；并不需要提前设置网络来应对数据包的到达。</li><li><em><strong>尽力而为</strong></em> 意味着如果出了问题，例如数据包在半路丢失、损坏或错误投递，网络不会做任何事情来弥补，恢复或者纠正这些问题；从这些问题中恢复是运行在终端主机上的更高层级协议的责任。</li></ul><p>这样设计的后果是导致拥塞，而路由不能解决拥塞问题</p><blockquote><p><strong>Quality-of-Service</strong></p><p>在尽力而为的传输模型下，所有数据包基本上都被平等对待，网络终端没有机会要求网络对某些数据包或数据流提供特定保证或优先服务。如果定义一种传输模型可以优先支持某个服务或提供某种保证——例如，为视频流确保所需的带宽——会产生一种新的支持多种服务质量（Qualitie of Service, QoS）的架构。</p><p>实际上，在纯的尽力而为传输模型和特定数据流获得定量 QoS 保证的传输模型之间，存在一定的灰度空间。互联网支持不同级别的服务，但是(1)它们并未在互联网上广泛部署，(2)即使部署了，尽力而为的传输仍然可以存在。本书中描述的拥塞控制算法，运行在尽力而为的传输模型中。</p></blockquote><h3 id="数据流和软件状态" tabindex="-1">数据流和软件状态 <a class="header-anchor" href="#数据流和软件状态" aria-label="Permalink to &quot;数据流和软件状态&quot;">​</a></h3><p>由于互联网采用了无连接模型，任何面向连接的服务都是通过在终端主机上运行的端到端传输协议（例如TCP）来实现的。网络中没有实现连接设置阶段，因此，单个路由器无法为活跃的连接预分配缓冲区空间或链路带宽。</p><p>虽然没有显式地建立连接阶段，并不意味着路由器对端到端的连接就完全一无所知。虽然IP数据包是独立交换的，但通常情况下，一对主机会连续交换多个数据包，例如，当客户端从服务器下载大型视频文件时。此外，一对主机之间的多个数据包通常会“流”经一组固定的路由器。这种 <em><strong>数据流</strong></em> 是一个重要概念，它表示一系列从源发往目的地的数据包，且经过网络中相同的路径。</p><p>按照数据流进行描述的一个强大之处在于：可以在不同的层级定义数据流。例如，数据流可以是主机之间（即，具有相同的源/目标 IP 地址），也可以是进程之间（即，具有相同的源/目标主机/端口对）。</p><p>因为多个相关联的数据包会流经同一个路由器，所以有时候保持每个数据流的某些状态信息还是有意义的，这些信息可用于对特定数据流进行资源分配的决策。这些信息被称为_soft state_，其与hard state的主要区别在于前者并非通过信令报文<strong>显式</strong>创建和移除，如果不更新，随着时间而消失。<em>soft state</em> 是位于纯无连接网络（在路由器中不维持任何状态）与纯基于连接网络（在路由器中维持hard state）之间的中间地带。一般而言，网络的正确运行不依赖于_soft state_的存在（每个数据包仍然可以在没有该状态的情况下被正确转发），但是当一个数据包恰好匹配路由器当前正在维护的_soft state_时，路由器能够更好地处理该数据包。</p><h3 id="ip-包格式" tabindex="-1">IP 包格式 <a class="header-anchor" href="#ip-包格式" aria-label="Permalink to &quot;IP 包格式&quot;">​</a></h3><p>![image (4) (1) (1)](./assets/image (4) (1) (1).png)</p><h3 id="fifo-队列" tabindex="-1">FIFO 队列 <a class="header-anchor" href="#fifo-队列" aria-label="Permalink to &quot;FIFO 队列&quot;">​</a></h3><p>每个路由器都实现某种队列规则，以控制在等待传输时数据包是如何被缓存的。队列算法可以被认为同时分配了带宽（决定哪些数据包被传输）和缓冲空间（决定哪些数据包被丢弃）。它还直接影响数据包所经历的延迟，因为它决定了一个数据包等待传输的时间长短。</p><p>最常见的队列算法是先进先出_（First-In/First-Out，FIFO）_，该算法中第一个到达路由器的数据包将会是是第一个被传输的数据包。</p><p>鉴于每个路由器的缓冲区空间是有限的，如果数据包到达队列（缓冲区）已满，则路由器将丢弃该数据包。这时并不考虑数据包属于哪个数据流，或者数据包有多重要。如果队列已满，那么到达FIFO队列末尾的数据包将被丢弃，这有时被称为尾部丢弃（<em>tail drop）</em>。</p><p>tail drop 和 FIFO 是两个分离的概念。FIFO是一种_<strong>调度策略</strong><em>——它决定了数据包的传输顺序。Tail drop是一种</em><strong>丢包策略</strong>_——它决定了哪些数据包会被丢弃。</p><blockquote><p><strong>Fair Queuing</strong></p><p>公平队列（Fair Queue，FQ）是一种不同于FIFO的队列管理策略，主要用于实现QoS。FQ的核心思想是为路由器当前处理的每个数据流（按某种流量粒度）维护一个独立队列。在FQ最简单的版本中，路由器会以轮询的方式依次服务这些队列。当路由器服务于多个数据流且面临拥塞时，FQ可以确保没有任何一个数据流耗尽出向链路，也就是每个数据流流都将获得链路的一部分资源。通过这种方式，任何特定发送端都不能以牺牲其它数据流为代价，任意增加其对于网络资源的消耗。</p><p>FQ可以与端到端拥塞控制算法一起工作。它通过简单地将流量分隔开来，确保流氓流量源不会干扰那些老实实施端到端拥塞控制算法的流量源。即使在优秀的拥塞控制算法管理的数据流之间，FQ 也可以更好的确保公平性。</p></blockquote><h2 id="可靠的字节流" tabindex="-1">可靠的字节流 <a class="header-anchor" href="#可靠的字节流" aria-label="Permalink to &quot;可靠的字节流&quot;">​</a></h2><h3 id="需要解决的问题" tabindex="-1">需要解决的问题 <a class="header-anchor" href="#需要解决的问题" aria-label="Permalink to &quot;需要解决的问题&quot;">​</a></h3><p>TCP的核心是滑动窗口算法。TCP除了大家熟悉的确认/超时/重传机制外，还必须解决下面的问题。</p><ol><li>因为TCP运行在互联网上的任意两个计算机上的两个进程之间，它需要一个明确的连接建立过程，使得参与传输的双方都同意与对方进行数据传输。在连接建立的过程中，TCP的传输双方需要共享状态以启动滑动窗口算法。传输结束后还需要关闭连接，这样传输双方才知道可以释放状态。</li><li>不同的 TCP 连接的 RTT（Round-trip time，往返时间）时间可能相差非常之大，这意味着TCP中触发重传的超时机制必须是自适应的。</li><li>由于互联网的尽力而为（best-effort）传输特性，packet 在传输过程中可能会乱序。packet 轻微的乱序不会造成问题，因为滑动窗口算法可以基于 sequence number 正确的重排 packets，所以这不是真正的问题。互联网的尽力而为传输带来的真正问题时，packet 究竟可以多乱，换句话说，一个 packet 最长会延迟多久才到达目的地。在最糟的情况下，packet 可以在互联网上被耽搁无限久。每当一个 packet 被一个路由器转发时，IP header 中的 time-to-live（TTL）字段就会被减一，最终达到 0。此时，packet 会被丢弃。TTL 在 IP 协议里被错误命名了，并且在 IPv6中被重新命名为更准确的 Hop Count。由于知道 IP 协议会在 TTL 耗尽之后丢弃 packet，所以 TCP 假设每个 packet 都有一个最大的生命周期。在 TCP 协议里，这个最大生命周期是 Maximum Segment Life(MSL)，当前的默认值是 120 秒。但这仅仅是个工程实现上的变量，因为 IP 协议并不会强制在 120 秒之后丢包，这个值仅仅是 TCP 预估一个 packet 在互联网上存活的最长时间。虽然如此，这个值的象征意义还是非常重要，它表明TCP 需要准备好面对被耽误了很久的 packet 突然出现，尽管这个 packet 会使得滑动窗口算法处理起来很复杂。</li><li>因为任何计算机都可以接入到互联网，所以分配给 TCP 连接的资源也千差万别，尤其考虑到任何一个主机都可以同时支持数百个 TCP 连接。这意味着 TCP 需要有一种机制来使得传输的双方能够“学习”到对方能够提供的资源（例如，对方有多少 buffer 空间）。这是流控（flow control）需要解决的问题。</li><li>TCP 的发送端并不知道要通过什么样的网络链路才能到达接收端</li></ol><h3 id="tcp-数据格式" tabindex="-1">TCP 数据格式 <a class="header-anchor" href="#tcp-数据格式" aria-label="Permalink to &quot;TCP 数据格式&quot;">​</a></h3><p>![image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1)](./assets/image (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1) (1).png)</p><p>TCP 是一个面向字节的协议，这意味着发送端向 TCP 连接中写入字节，而接收端从 TCP 连接中读取字节。尽管“字节流”描述了 TCP 为应用程序提供的服务，但是 TCP 本身并不会在互联网上传输单个的字节。相应的，在发送端，TCP会从发送程序中接收并缓存足够多字节数的数据，然后填装在合适大小的 packet 中，然后将这个 packet 发送给 TCP 的接收端。TCP 的接收端会将 packet 中的所有数据存入到接收缓存中，之后，接收端程序在有空的时候读取这个 buffer 中的数据。</p><ul><li><p><code>SrcPort</code> 和 <code>DstPort</code> 表明了源和目的的传输层端口。这两个字段加上源目的IP地址，一起唯一标识了一个 TCP 连接。所有与 TCP 连接相关的状态，包括了后面章节介绍的拥塞控制的状态，都唯一对应一个4 元组<code>(SrcPort, SrcIPAddr, DstPort, DstIPAddr)</code>。</p></li><li><p><code>Acknowledgment</code>, <code>SequenceNum</code>, 和 <code>AdvertisedWindow</code>字段与TCP 的滑动窗口算法相关。因为 TCP 是面向字节的协议，传输数据中的每一个字节都有一个序列号（Sequence number）。<code>SequenceNum</code>是当前 segment 中所有数据第一个字节对应的序列号。<code>Acknowledgment</code>和<code>AdvertisedWindow</code>包含了数据流在接收端的信息。为了简化这里的讨论，我们先不考虑数据是双向传递的，这里我们只关注数据向一边传输</p></li><li><p>6bit 的 <code>Flags</code> 字段用来在 TCP 两端传递控制信息。控制信息包含了：SYN 和 FIN 标志，用来建立和终结 TCP 连接；ACK 标志，用来表示<code>Acknowledgment</code>是有用的（也就是说接收端应该关注<code>Acknowledgment</code>）。</p></li><li><p>最后，由于 TCP header 是可变长度的（因为在固定字段后面还有 options），所以 header 中还包含了 <code>HdrLen</code> 用来表示 TCP header 的长度是 32bit word 的多少倍。当 TCP extenstion 存在于 header 之后时，这个字段是有用的。为什么选择将 TCP extenstion 作为 option 加在 TCP header 之后而不是修改 TCP header 的固定字段？因为将TCP extension作为可变长度挂在固定字段之后，就算某些 TCP 实现没有包含对应的 extenstion，仍然能使用 TCP 进行通信（注，如果放在固定字段会导致解析出错，因为一般header解析都是移位读取内容）。TCP 会话的两端会在连接建立的过程中协商并同意使用哪些 extenstion/option。</p></li></ul><h3 id="可靠和有序的传输" tabindex="-1">可靠和有序的传输 <a class="header-anchor" href="#可靠和有序的传输" aria-label="Permalink to &quot;可靠和有序的传输&quot;">​</a></h3><p>TCP 的滑动窗口算法主要解决两个问题：</p><ol><li>确保数据可靠有序的传输</li><li>在发送端和接收端之间进行流控（flow control）</li></ol><p>为了实现流控，接收端确定好滑动窗口的大小，并通过 TCP header 中的<code>AdvertisedWindow</code> 字段传递给发送端。TCP 的接收端根据当前 TCP 连接所分配到的内存大小（也就是接收端的 buffer 大小）来确定合适的<code>AdvertisedWindow</code>。TCP 的发送端在任何时候都不会发送超过<code>AdvertisedWindow</code>的未确认数据。这样，发送端就不会打爆接收端的buffer。</p><p>图展示了 TCP 滑动窗口的工作方式。TCP 的发送端维护了一个发送端 buffer，用来保存已发送但是还未被确认的数据，以及被发送端应用程序写入但是还未被传输的数据。在接收端，TCP 维护了接收端 buffer，用来保存所有接收到的数据，包括乱序和正确顺序但是应用程序还没来的及读的部分。</p><p>![image (3) (1) (1) (1) (1)](../../../docs/public/ass/image (3) (1) (1) (1) (1).png)</p><p>为了让接下来的讨论更加简单，我们先忽略 buffer 和序列号都是有限大小，并且最终都会溢出这个事实（注，TCP的序列号时32bit整数，针对字节数而言极易溢出）。并且我们也不区分buffer 使用的指针和序列号。</p><p>发送端buffer维护了三个指针，<code>LastByteAcked</code>, <code>LastByteSent</code>, 和 <code>LastByteWritten</code>，它们的名字都说明了它们的含义。因为只有数据发送了才有可能被接收端确认，所以<code>LastByteSent</code>大于等于<code>LastByteAcked</code>。因为只有数据被TCP 写入到buffer了，才有可能被发送，所以<code>LastByteWritten</code>大于等于<code>LastByteSent</code>。最终，这三个指针之间有以下明显的关系：</p><p><code>LastByteAcked &lt;= LastByteSent &lt;= LastByteWritten</code></p><p>在接收端也有类似的指针（序列号），<code>LastByteRead</code>, <code>NextByteExpected</code>, 和 <code>LastByteRcvd</code>。由于乱序的存在，这里的不等式有一点点不好理解。首先，因为TCP会确保顺序，所以NextByteExpected之前的字节必然已经全部被接受，而数据只有被接受了才有可能被接收端应用程序读取，所以<code>NextByteExpected - 1</code> 大于等于<code>LastByteRead</code>。当数据顺序传输时，<code>NextByteExpected</code> 等于<code>LastByteRcvd + 1</code>。而当数据乱序时，<code>LastByteRcvd</code> 大于<code>NextByteExpected</code> ，如图10所示（注，此时表明接收端希望重传一个<code>LastByteRcvd</code> 之前的packet）。最终，这三者的关系如下表示：</p><p><code>LastByteRead &lt; NextByteExpected &lt;= LastByteRcvd + 1</code></p><h3 id="流控-flow-control" tabindex="-1">流控（Flow Control） <a class="header-anchor" href="#流控-flow-control" aria-label="Permalink to &quot;流控（Flow Control）&quot;">​</a></h3><p>截止到目前为止，所有的讨论都假设接收端可以瞬间处理完接收到的数据。但实际情况并不一定这样，接收端程序可能本身要花费大量的时间来处理和运算数据，所以数据可能在接收端buffer堆积，而接收端 buffer大小又不是无限的。所以接收端需要有某种方式来降低发送段端的速率，以避免自身buffer被打爆，这就是TCP流控的核心。</p><p>尽管前面已经说过，TCP 的流控（Flow Control）和拥塞控制（Congestion Control）是不同的机制，为了理解拥塞控制，必须要先理解流控。另一方面，用来实现流控的窗口机制，在拥塞控制中也很重要。在流控中，窗口机制向发送端提供了一个清晰的指示：当前可以有多少未被确认的数据被发送出来，而这同时是流控和拥塞控制的核心问题。</p><p>接下来，我们将认为 buffer 都是有限大小。TCP 接收端会通过通知发送端自己当前的 buffer 大小来调整发送端的速率。TCP 的接收端必须保证：</p><p><code>LastByteRcvd - NextByteRead &lt;= RcvBufferSize</code></p><p>来避免自己的 buffer 被打爆。因此它会发布其 buffer 中空余的空间 <code>AdvertisedWindow</code> 大小为：</p><p><code>AdvertisedWindow = RcvBufferSize - ((NextByteExpected - 1) - LastByteRead)</code></p><p>当接收到数据时，只要 TCP 接收端已经收到了这份数据前面的所有数据，它就会确认这份数据。对应的<code>NextByteExpected</code>会向右移动（增加），意味着 <code>AdvertisedWindow</code> 相应的减少。实际中，窗口是否真的会变小，取决于本地应用程序消费数据的速度。如果本地进程能够与数据传输相同的速度消费数据（也就是<code>LastByteRead</code> 以与<code>LastByteRcvd</code>相同的速率增加），那么<code>AdvertisedWindow</code> = <code>RcvBufferSize</code>，也就是说接收端的buffer总是为空。然而，如果接收程序落后了，例如程序要对读取的每个字节进行大量的运算，那么每当segment到达时，<code>AdvertisedWindow</code>都会变小，最终变成0。</p><p>TCP发送端需要遵循它从接收端获取的<code>AdvertisedWindow</code>，在任何时刻，它必须保证：</p><p><code>LastByteSent - LastByteAcked &lt;= AdvertisedWindow</code></p><p>换句话说，发送端会计算出它还可以发送的未被确认的数据量，并记录为<code>EffectiveWindow</code>（注，EffectiveWindow表示的是将来还可以发送的未被确认的数据量，而不是当前所有的未被确认的数据量）。</p><p><code>EffectiveWindow = AdvertisedWindow - (LastByteSent - LastByteAcked)</code></p><p>很明显，<code>EffectiveWindow</code>要大于0，TCP发送端才能继续发送数据。存在这样一种场景：TCP发送端收到了一个ACK确认了x字节的数据，因此使得发送端增加<code>LastByteAcked</code> x个字节；但是因为接收端程序并没有读取任何数据，<code>AdvertisedWindow</code>比之前小了x个字节。在这种情况下，发送端是可以释放自己的buffer（注，刚刚被确认的数据可以从buffer中被释放掉），但是不能发送任何新的数据。</p><p>除了接收端的buffer之外，发送端的buffer也必须注意。在发送数据的过程中，TCP发送端必须确保本地发送数据的程序不会过载发送端buffer，也就是要确保：</p><p><code>LastByteWritten - LastByteAcked &lt;= SendBufferSize</code></p><p>如果发送端程序想要向TCP写入b个字节，但是</p><p><code>(LastByteWritten - LastByteAcked + b) &gt; SendBufferSize</code></p><p>此时，TCP会挂起发送端程序，并且不允许它向TCP写入数据。</p><p>现在大家应该可以理解一个慢接收端是如何阻止一个快的发送端了。</p><ul><li>首先，慢接收端处理数据很慢，导致从接收端buffer读数据很慢，导致buffer被填满。这意味着<code>AdvertisedWindow</code>减小为0，也意味着发送端不能再发送任何数据，即使之前发送的数据被ACK了也不行。</li><li>其次，不能发送数据意味着发送端buffer会被发送端程序填满，最终会导致TCP挂起发送端程序，从而导致发送端被阻止。</li><li>一旦接收端程序开始读取数据，接收端TCP就能打开其窗口（<code>AdvertisedWindow</code> &gt; 0），进而使得TCP的发送端从其buffer中发送数据。</li><li>当发送的数据被ACK之后，<code>LastByteAcked</code> 会增加，对应的被确认部分的数据会被从发送端buffer中释放，发送端的程序会继续运行。</li></ul><p>接下来还有最后一个细节需要关注：发送端怎么能知道<code>AdvertisedWindow</code>不为0了？</p><p>正常情况下，TCP接收端是通过ACK来确认接收了一个数据segment。在ACK里，会包含最新的<code>Acknowledge</code>和<code>AdvertisedWindow</code>字段，就算这些字段与上一次相比没有变化，也会包含在ACK里，发送端可以用这些数据来更新<code>AdvertisedWindow</code>。</p><p>现在的问题是，当<code>AdvertisedWindow</code>为0时，发送端不再发送任何数据，也就不能收到任何ACK，也就没法知道什么时候<code>AdvertisedWindow</code>不再是0。TCP的接收端不会自发的发送ACK，它只会在收到数据segment时回复对应的ACK。</p><p>TCP会这样处理这个问题：当对端宣告<code>AdvertisedWindow</code>为0时，发送端会时不时的发送一个1字节的segment，它知道数据可能不会被接收，但它还是要尝试一下，因为每一个这样的segment都会触发接收端的一个回复，其中包含了最新的<code>AdvertisedWindow</code>，而这个窗口终将打开（注，即AdvertisedWindow变成非0）。这里的1字节消息被称为Zero Window Probe，实际中它们会每5-60秒发送一次。</p><h3 id="触发tcp传输" tabindex="-1">触发TCP传输 <a class="header-anchor" href="#触发tcp传输" aria-label="Permalink to &quot;触发TCP传输&quot;">​</a></h3><p>我们接下来讨论一个非常微妙的问题：TCP如何决定是否应该传输一个segment？如果我们忽略流控并认为窗口总是打开的，那么TCP发送端有三个场景可以触发一个segment的传输：</p><ul><li>TCP维护了一个变量，称为maximum segment size（MSS），当它从发送程序中收集到MSS个字节时，它会立刻送出一个segment。</li><li>发送端程序通过一个push操作，显示的要求TCP发送一个segment。这会使得TCP发送完buffer中未发送的字节。</li><li>定时器触发，会使得当前buffer中的所有数据被打包成一个segment被发送出去。</li></ul><p>当然，我们不能忽略流控。如果发送端的buffer已经有了MSS个字节，且当前<code>AdvertisedWindow</code>也支持足够多的数据，那么TCP发送端就发送一个完整的segment。然而，假设发送端buffer正在累积数据，而此时窗口是关闭的；过会窗口打开了，但是只有MSS/2个字节。发送端应该发送一个一半大小的segment还是等窗口打开到完整的MSS再进行发送？</p><p>最早的TCP规范文档中没有提及这个问题，早期的TCP实现会发送一个一半大小的segment。但是后来发现，这种利用任何可用窗口的激进策略会导致一个问题：_silly window syndrome。_在这个问题里，由于<code>AdvertisedWindow</code>断断续续的打开，发送端不能将数据聚合成一个完整的MSS再发送。为了解决这个问题，引入了一个复杂的决策过程，被称为Nagle算法。之所以这里要提到这个算法，因为它会成为后面介绍的拥塞控制算法的核心部分。</p><p>Nagle算法面对的核心问题是：当<code>EffectiveWindow</code>小于MSS时，发送端需要等待多久再发送一个segment？如果我们等的时间过长，那么我们就伤害到了应用程序的交互的实时性。如果我们等的时间不够长，那么我们可能会发送一堆小的packet，并且陷入到_silly window syndrome（注，SWS的主要问题是效率太低，因为处理每个segment都需要一定的代价，而现在每个segment的数据都很少，处理代价就相对较高）。_</p><p>Nagle算法引入了一种优雅的自我驱动的解决方案。它的想法是，只要TCP有任何数据在传输，发送端最终总会收到一个ACK。这个ACK可以被用来当做一个自我驱动的机制，触发发送端发送更多的数据。Nagle算法提供了一个简单的，统一的规则来决定何时传输数据：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>When the application produces data to send </span></span>
<span class="line"><span>    if both the available data and the window &gt;= MSS </span></span>
<span class="line"><span>        send a full segment </span></span>
<span class="line"><span>    else </span></span>
<span class="line"><span>        if there is unACKed data in flight </span></span>
<span class="line"><span>            buffer the new data until an ACK arrives </span></span>
<span class="line"><span>        else </span></span>
<span class="line"><span>            send all the new data now</span></span></code></pre></div><p>可以这样理解Nagle算法：</p><ul><li>当窗口允许时，总是发送一个完整的segment</li><li>如果当前没有segment在发送的过程中，那么也可以立即发送一小部分数据</li><li>如果当前有任何segment在传输过程中，发送端等待ACK再发送下一个segment</li></ul><p>这样对于一个连续一次只写入1个字节的应用程序，在每次RTT时间只会发送一个segment。某些segment可能只会包含1个字节，而其他的segment可能会包含在一个RTT时间内用户输入的尽可能多的数据。因为有些程序不能接受这里的延时，所以TCP socket接口提供了一个<code>TCP_NODELAY</code>参数，它会使得数据传输尽可能的快（注，也就是相当于关闭了Nagle算法，同时承担SWS的后果）。</p><h2 id="高速网络" tabindex="-1">高速网络 <a class="header-anchor" href="#高速网络" aria-label="Permalink to &quot;高速网络&quot;">​</a></h2><p>TCP最早是在1980年代初部署的，当时的骨干网络的链路带宽只有数十 Kbps。随着网络速度的不断提升，很自然，大量的注意力被投入到适配 TCP 上来。原则上来说，网络速度的变化与后续章节中介绍的拥塞控制算法的发展是独立的，但拥塞控制算法的部署与网络速度的增加是同时发生的，所以这两个问题不幸的被混淆在了一起。在 TCP 头部有一些扩展同时解决了这两个问题，这又进一步模糊了这两个问题的边界。最后，值得注意的是，带宽延迟积的增加的确对拥塞控制有影响，后续章节中讨论的一些方法就是处理该问题的。</p><p>在本节中，我们将探讨高速网络面临的挑战，而用于解决这些挑战的 TCP 扩展的详细信息将推迟到第4章介绍，在那里我们还将考虑相关的拥塞控制机制。目前，我们先关注<code>SequenceNum</code> 和 <code>AdvertisedWindow</code> 的局限性，以及它们对于 TCP 的正确性和性能的影响。</p><h3 id="sequencenum-整数溢出问题" tabindex="-1">SequenceNum 整数溢出问题 <a class="header-anchor" href="#sequencenum-整数溢出问题" aria-label="Permalink to &quot;SequenceNum 整数溢出问题&quot;">​</a></h3><p><code>SequenceNum</code> 为32 bit 的整数，在特定连接上可能会导致整数溢出问题——一个<code>SequenceNum</code>为 S 的字节可能在某一时间被发送，然后在稍后的时间内，一个具有相同<code>SequenceNum</code> S 的另一个字节也被发送。我们假设数据包在互联网上的生存时间不会超过 MSL，即 120 秒。因此，我们目前需要确保序列号在 120 秒内不发生整数溢出。这是否会发生取决于数据传输的速度——也就是32 bit <code>SequenceNum</code>被消耗的速度。</p><p>在适度的带宽下，32位序列号空间是足够的，但鉴于大多数服务器现在配备 10Gbps 以太网接口，32 bit现在远远不够。一个TCP扩展可以将<code>SequenceNum</code>空间翻倍，以防止<code>SequenceNum</code>整数溢出的问题。这个扩展在拥塞控制中也起了一定的作用，即 TCP timestamp option</p><h3 id="充分利用网络" tabindex="-1">充分利用网络 <a class="header-anchor" href="#充分利用网络" aria-label="Permalink to &quot;充分利用网络&quot;">​</a></h3><p><code>AdvertisedWindow</code>必须足够大，以便允许发送者保持网络管道是填满数据的。虽然，接收方可以选择不将窗口打开到<code>AdvertisedWindow</code>字段允许的最大值（即65535）；我们这里假设接收端有足够的缓存空间来处理当<code>AdvertisedWindow</code>字段为最大值时的数据。</p><p>在这个问题里，我们关心的不再是网络带宽。这里是带宽延迟积决定了 <code>AdvertisedWindow</code> 字段需要多大，即，窗口需要打开得足够大，以允许传输一个完整的带宽延迟乘积的数据量。</p><p>换句话说，TCP的<code>AdvertisedWindow</code>字段比<code>SequenceNum</code>字段的状况更糟糕——它甚至不足以处理横跨美国大陆的T3连接，因为一个16位的字段只能让我们宣告一个64 KB的窗口。</p><p>TCP通过一个扩展来完成改进，这个扩展允许接收方宣告一个更大的窗口，从而使发送方能够填满由高速网络所可能带来的更大的带宽延迟积管道。这个扩展包含了一个定义_<strong>缩放因子</strong>_ 的选项，即，不是把出现在<code>AdvertisedWindow</code>字段中的数字解释为允许发送方有多少字节未被确认，而是允许 TCP 的两端同意<code>AdvertisedWindow</code>字段表示更大的数据块（例如，发送方可以有多少个16字节单位的数据未被确认，如果缩放因子等于 16）。换句话说， 定义窗口缩放因子的选项指定了双方应该将<code>AdvertisedWindow</code>字段向左移动多少位，再使用计算后的结果作为有效窗口。</p>`,84)]))}const f=t(c,[["render",n]]);export{P as __pageData,f as default};
