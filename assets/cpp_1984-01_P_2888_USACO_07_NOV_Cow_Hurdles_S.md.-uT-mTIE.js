import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_2888_USACO_07_NOV_Cow_Hurdles_S","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_2888_USACO_07_NOV_Cow_Hurdles_S.md","filePath":"cpp/1984-01/P_2888_USACO_07_NOV_Cow_Hurdles_S.md"}'),d={name:"cpp/1984-01/P_2888_USACO_07_NOV_Cow_Hurdles_S.md"},n=t(`<h1 id="p-2888-usaco-07-nov-cow-hurdles-s" tabindex="-1" data-v-67321df9>P_2888_USACO_07_NOV_Cow_Hurdles_S <a class="header-anchor" href="#p-2888-usaco-07-nov-cow-hurdles-s" aria-label="Permalink to &quot;P_2888_USACO_07_NOV_Cow_Hurdles_S&quot;" data-v-67321df9>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-67321df9><button title="Copy Code" class="copy" data-v-67321df9></button><span class="lang" data-v-67321df9>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-67321df9><code data-v-67321df9><span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-67321df9> &lt;iostream&gt;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-67321df9> &lt;cstring&gt;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-67321df9> &lt;algorithm&gt;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-67321df9> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 310</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> n,m,q;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> f[N][N];</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-67321df9> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> q;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-67321df9>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(f, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>, sizeof f);</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> u,v,w; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> w;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>        f[u][v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> w;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>        f[i][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    f[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>; k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> n;k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>n; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>                f[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-67321df9> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(f[i][j], </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-67321df9>max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(f[i][k], f[k][j]));</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>            }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>        }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> q;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>){</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> u,v; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> v;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>(f[u][v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>) cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> endl;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> f[u][v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9> endl;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>    }</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-67321df9>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-67321df9> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>;</span></span>
<span class="line" data-v-67321df9><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-67321df9>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,E,e,f,v){return i(),s("div",null,h)}const y=a(d,[["render",k],["__scopeId","data-v-67321df9"]]);export{g as __pageData,y as default};
