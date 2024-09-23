import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const y=JSON.parse('{"title":"P2700 逐个击破","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P2700 逐个击破.md","filePath":"cpp/1984-01/P2700 逐个击破.md"}'),d={name:"cpp/1984-01/P2700 逐个击破.md"},n=t(`<h1 id="p2700-逐个击破" tabindex="-1" data-v-002e293d>P2700 逐个击破 <a class="header-anchor" href="#p2700-逐个击破" aria-label="Permalink to &quot;P2700 逐个击破&quot;" data-v-002e293d>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-002e293d><button title="Copy Code" class="copy" data-v-002e293d></button><span class="lang" data-v-002e293d>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-002e293d><code data-v-002e293d><span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-002e293d> &lt;iostream&gt;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-002e293d> &lt;cstring&gt;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-002e293d> &lt;algorithm&gt;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 100010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> edge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>{</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u,v,w;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> edge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-002e293d> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>{</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> a.w;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	}</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>}e[N];</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> n,m,tot,sum,res,p[N];</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> vis[N];</span></span>
<span class="line" data-v-002e293d></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-002e293d> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(p[a] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> a) p[a] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(p[a]);</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> p[a];</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>}</span></span>
<span class="line" data-v-002e293d></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> m;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>		vis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	}</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u,v,w; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> w;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>		e[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> edge{u,v,w};</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>		tot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> w;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	}</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>) p[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> i;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d>	sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>, e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>n);</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(e[i].u);</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-002e293d> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(e[i].v);</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(vis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> vis[v]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> v){</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>			p[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> v;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>		}</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>		sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> e[i].w;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(vis[u]) vis[v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-002e293d> // 标记一对相互连接的节点，以确保它们被同时处理或不被同时处理</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>(vis[v]) vis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	}</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> tot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d> endl;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-002e293d>	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-002e293d> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>;</span></span>
<span class="line" data-v-002e293d><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-002e293d>}</span></span></code></pre></div>`,2),h=[n];function k(e,p,l,E,v,r){return i(),s("div",null,h)}const F=a(d,[["render",k],["__scopeId","data-v-002e293d"]]);export{y as __pageData,F as default};
