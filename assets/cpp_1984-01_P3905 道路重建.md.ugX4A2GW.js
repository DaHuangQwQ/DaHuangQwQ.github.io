import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P3905 道路重建","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P3905 道路重建.md","filePath":"cpp/1984-01/P3905 道路重建.md"}'),n={name:"cpp/1984-01/P3905 道路重建.md"},h=t(`<h1 id="p3905-道路重建" tabindex="-1" data-v-b83bc715>P3905 道路重建 <a class="header-anchor" href="#p3905-道路重建" aria-label="Permalink to &quot;P3905 道路重建&quot;" data-v-b83bc715>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-b83bc715><button title="Copy Code" class="copy" data-v-b83bc715></button><span class="lang" data-v-b83bc715>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-b83bc715><code data-v-b83bc715><span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b83bc715> &lt;iostream&gt;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b83bc715> &lt;deque&gt;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b83bc715> &lt;cstring&gt;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-b83bc715> &lt;vector&gt;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 10010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> M </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> N;</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715> edge</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>{</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> to, w;};</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> n,m,ans,dis[N],beg,en,jud[N][N];</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> vis[N];</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>vector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>edge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> e[M];</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715> spfa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	deque</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> q;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>	memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(dis, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715>3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>, sizeof dis);</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(beg);</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	vis[beg] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	dis[beg] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>	while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>()){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>();</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>pop_front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>();</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		vis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>		for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> v : e[u]){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>			int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> pay </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> v.w;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>jud[u][v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>||</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>jud[v.to][u]) pay </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b83bc715> // 关键的一步</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> dis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> pay){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>				dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> dis[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> pay;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>				if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>vis[v.to]){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>					vis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>					if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> dis[v.to] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> dis[q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>()]){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>						q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>push_front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(v.to);</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>					}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>{</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>						q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(v.to);</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>					}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>				}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>			}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>}</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(){</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> m;</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> u,v,w;cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> w;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		e[u].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(edge{v,w});</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		e[v].</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(edge{u,w});</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> m;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>	for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>){</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>		int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> u,v; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> v;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b83bc715>		// e[u][v].w = 0x3f;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-b83bc715>		// e[v][u].w = 0x3f;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>		jud[u][v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> jud[v][u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	}</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> beg </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> en;</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-b83bc715>	spfa</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>();</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> dis[en] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715> endl;</span></span>
<span class="line" data-v-b83bc715></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-b83bc715>	return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-b83bc715> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>;</span></span>
<span class="line" data-v-b83bc715><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-b83bc715>}</span></span></code></pre></div>`,2),k=[h];function p(l,b,d,E,c,e){return i(),s("div",null,k)}const r=a(n,[["render",p],["__scopeId","data-v-b83bc715"]]);export{g as __pageData,r as default};
