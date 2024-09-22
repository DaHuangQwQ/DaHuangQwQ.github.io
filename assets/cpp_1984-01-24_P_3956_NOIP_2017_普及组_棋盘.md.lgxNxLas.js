import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_3956_NOIP_2017_普及组_棋盘","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P_3956_NOIP_2017_普及组_棋盘.md","filePath":"cpp/1984-01-24/P_3956_NOIP_2017_普及组_棋盘.md"}'),h={name:"cpp/1984-01-24/P_3956_NOIP_2017_普及组_棋盘.md"},k=t(`<h1 id="p-3956-noip-2017-普及组-棋盘" tabindex="-1" data-v-78f038aa>P_3956_NOIP_2017_普及组_棋盘 <a class="header-anchor" href="#p-3956-noip-2017-普及组-棋盘" aria-label="Permalink to &quot;P_3956_NOIP_2017_普及组_棋盘&quot;" data-v-78f038aa>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-78f038aa><button title="Copy Code" class="copy" data-v-78f038aa></button><span class="lang" data-v-78f038aa>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-78f038aa><code data-v-78f038aa><span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &lt;iostream&gt;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &lt;queue&gt;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &lt;algorithm&gt;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &lt;cstring&gt;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> long</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 1000</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> n,m;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> a[N][N], dis[N][N];</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>{</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> x,y,color,w;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-78f038aa> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>{</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> a.w;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>};</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>priority_queue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> q;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dx[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>};</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>//12方向及魔法代价 </span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dy[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>};</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dw[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>};</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> bfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(dis, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>, sizeof dis);</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    dis[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>((node){</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>, a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>], dis[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>]});</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>()){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        node t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>();</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>();</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(t.w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dis[t.x][t.y]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> t.x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dx[i];</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> t.y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dy[i];</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> t.w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dw[i];</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>a[x][y]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>            // cout &lt;&lt; x &lt;&lt; &quot; &quot; &lt;&lt; y &lt;&lt; &quot; &quot; &lt;&lt; w &lt;&lt; endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(t.color </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> a[x][y]) w</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(dis[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> w){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>                dis[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> w;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>                q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>((node){x,y,a[x][y],w});</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>            }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>}</span></span>
<span class="line" data-v-78f038aa></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> m;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>,x,y,c; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> c;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        a[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> c </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa>    bfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>();</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    // for(int i = 1;i &lt;= n;i++){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    //     for(int j = 1; j&lt;= n;j++){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    //         cout &lt;&lt; dis[i][j] &lt;&lt; &quot; &quot;;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    //     }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    //     cout &lt;&lt; endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-78f038aa>    // }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(a[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        dis[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-78f038aa> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(dis[n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>][n], dis[n][n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(dis[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>            cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &quot;-1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>else</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dis[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>(dis[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&gt;=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>){</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-78f038aa> &quot;-1&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>{</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> dis[n][n] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa> endl;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>    }</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-78f038aa>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-78f038aa> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>;</span></span>
<span class="line" data-v-78f038aa><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-78f038aa>}</span></span></code></pre></div>`,2),n=[k];function l(p,d,E,e,f,v){return i(),s("div",null,n)}const y=a(h,[["render",l],["__scopeId","data-v-78f038aa"]]);export{g as __pageData,y as default};
