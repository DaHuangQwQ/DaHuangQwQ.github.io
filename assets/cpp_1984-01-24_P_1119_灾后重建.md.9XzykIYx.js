import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const r=JSON.parse('{"title":"P_1119_灾后重建","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P_1119_灾后重建.md","filePath":"cpp/1984-01-24/P_1119_灾后重建.md"}'),n={name:"cpp/1984-01-24/P_1119_灾后重建.md"},h=t(`<h1 id="p-1119-灾后重建" tabindex="-1" data-v-326b787c>P_1119_灾后重建 <a class="header-anchor" href="#p-1119-灾后重建" aria-label="Permalink to &quot;P_1119_灾后重建&quot;" data-v-326b787c>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-326b787c><button title="Copy Code" class="copy" data-v-326b787c></button><span class="lang" data-v-326b787c>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-326b787c><code data-v-326b787c><span class="line" data-v-326b787c><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-326b787c>// https://www.luogu.com.cn/problem/P1119</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-326b787c> &lt;iostream&gt;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-326b787c> &lt;algorithm&gt;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-326b787c> &lt;cstring&gt;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-326b787c> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n,m,q;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> a[N];</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[N][N];</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-326b787c> update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-326b787c> k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(f[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[i][k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[k][j]){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>                f[j][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[i][k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[k][j];</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>            }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>}</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-326b787c> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> m;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-326b787c>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(f, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c>3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>, sizeof f);</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> a[i];</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> u,v,w;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> w;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        f[u][v] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[v][u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> w;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        f[i][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> q;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> ;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> q;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x1,x2,x3;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x3;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(a[now] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> n){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-326b787c>            update</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(now);</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>            now</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(a[x1] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x3 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> a[x2] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> x3){</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>            cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> endl;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>{</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>(f[x1][x2] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c>3f3f3f3f</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>) cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> endl;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>            else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> f[x1][x2] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c> endl;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>        }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>    }</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-326b787c>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-326b787c> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>;</span></span>
<span class="line" data-v-326b787c><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-326b787c>}</span></span></code></pre></div>`,2),k=[h];function l(p,d,E,c,e,v){return i(),s("div",null,k)}const g=a(n,[["render",l],["__scopeId","data-v-326b787c"]]);export{r as __pageData,g as default};
