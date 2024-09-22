import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const y=JSON.parse('{"title":"P1194 买礼物","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P1194 买礼物.md","filePath":"cpp/1984-01-24/P1194 买礼物.md"}'),n={name:"cpp/1984-01-24/P1194 买礼物.md"},h=t(`<h1 id="p1194-买礼物" tabindex="-1" data-v-112e3006>P1194 买礼物 <a class="header-anchor" href="#p1194-买礼物" aria-label="Permalink to &quot;P1194 买礼物&quot;" data-v-112e3006>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-112e3006><button title="Copy Code" class="copy" data-v-112e3006></button><span class="lang" data-v-112e3006>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-112e3006><code data-v-112e3006><span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-112e3006> &lt;iostream&gt;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-112e3006> &lt;cstring&gt;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 510</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> g[N][N],n,m;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> dis[N];</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> vis[N];</span></span>
<span class="line" data-v-112e3006></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006> prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006>	memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(dis, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006>3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>, sizeof dis);</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>	int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>vis[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> (t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> dis[t] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> dis[j]))</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>				t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> j;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>		}</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> dis[t] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(i) res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> dis[t];</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>			dis[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(dis[j], g[t][j]);</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>		}</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>		vis[t] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>	}</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>	return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> res;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>}</span></span>
<span class="line" data-v-112e3006></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> m;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> m; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>){</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>			cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> g[i][j];</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>(g[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> g[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> n)</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>				g[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> n;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>		}</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>	}</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>+</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-112e3006> prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006> endl;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-112e3006>	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-112e3006> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>;</span></span>
<span class="line" data-v-112e3006><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-112e3006>}</span></span></code></pre></div>`,2),k=[h];function e(p,l,d,E,v,r){return i(),s("div",null,k)}const F=a(n,[["render",e],["__scopeId","data-v-112e3006"]]);export{y as __pageData,F as default};
