import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P2656 采蘑菇","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P2656 采蘑菇.md","filePath":"cpp/1984-01-24/P2656 采蘑菇.md"}'),d={name:"cpp/1984-01-24/P2656 采蘑菇.md"},n=t(`<h1 id="p2656-采蘑菇" tabindex="-1" data-v-eaa94df2>P2656 采蘑菇 <a class="header-anchor" href="#p2656-采蘑菇" aria-label="Permalink to &quot;P2656 采蘑菇&quot;" data-v-eaa94df2>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-eaa94df2><button title="Copy Code" class="copy" data-v-eaa94df2></button><span class="lang" data-v-eaa94df2>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-eaa94df2><code data-v-eaa94df2><span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;iostream&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;deque&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;vector&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;cstring&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;stack&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-eaa94df2> &lt;algorithm&gt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 100010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> M </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> N;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> edge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> to, w;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> rate;};</span></span>
<span class="line" data-v-eaa94df2></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>vector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>edge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> e[M];</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dis[N],n,m,s;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> ans;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> vis[N],vi[N];</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dfn[N],low[N],cnt,tot,col[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-eaa94df2> // 增加了一个用于记录缩点后的颜色数组</span></span>
<span class="line" data-v-eaa94df2></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> tarjan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-eaa94df2> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	dfn[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> low[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>cnt;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	stack</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> st;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	vi[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	st.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(u);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v : e[u]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>dfn[v.to]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>			tarjan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(v.to);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>			low[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(low[u], low[v.to]);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(vi[v.to]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>			low[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(low[u], dfn[v.to]);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(low[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dfn[u]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		tot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>        do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> {</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>            v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> st.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>top</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>();</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>            st.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>();</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>            col[v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> tot;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>            vi[v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>        } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> (v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> u);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>}</span></span>
<span class="line" data-v-eaa94df2></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> spfa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-eaa94df2> s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	deque</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> q;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>	memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(dis, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>, sizeof dis);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>	memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(vis,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>, sizeof vis);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>push_front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(s);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	dis[s] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	vis[s] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>()){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>();</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>pop_front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>();</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		vis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v : e[u]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v.w){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>				dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v.w;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>				v.w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>*=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v.rate;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>				if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>vis[v.to]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>					vis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>					if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> dis[q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>()]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>						q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>push_front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(v.to);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>					}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>{</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>						q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(v.to);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>					}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>				}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>			}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>}</span></span>
<span class="line" data-v-eaa94df2></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> m;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> m; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> u , v, w;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		double</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> rate;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> rate;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		e[u].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(edge{v,w,rate});</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> s;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>	spfa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(s);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>) {</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>dfn[i]) {</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2>            tarjan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(i);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>        }</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>    }</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>    vector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2> long&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(tot</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>    	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> col[i];</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>    	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v : e[i]){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>    		sum[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(sum[v.to], sum[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> v.w);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>    	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>    }</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> s){</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>			ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-eaa94df2> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>(ans, dis[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> sum[col[i]]);</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>		}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	}</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2> endl;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-eaa94df2>	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-eaa94df2> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>;</span></span>
<span class="line" data-v-eaa94df2><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-eaa94df2>}</span></span></code></pre></div>`,2),h=[n];function k(e,l,p,E,v,f){return i(),s("div",null,h)}const y=a(d,[["render",k],["__scopeId","data-v-eaa94df2"]]);export{g as __pageData,y as default};
