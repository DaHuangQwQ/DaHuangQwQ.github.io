import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_2758_编辑距离","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_2758_编辑距离.md","filePath":"cpp/1984-01/P_2758_编辑距离.md"}'),d={name:"cpp/1984-01/P_2758_编辑距离.md"},h=t(`<h1 id="p-2758-编辑距离" tabindex="-1" data-v-e8dca914>P_2758_编辑距离 <a class="header-anchor" href="#p-2758-编辑距离" aria-label="Permalink to &quot;P_2758_编辑距离&quot;" data-v-e8dca914>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-e8dca914><button title="Copy Code" class="copy" data-v-e8dca914></button><span class="lang" data-v-e8dca914>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-e8dca914><code data-v-e8dca914><span class="line" data-v-e8dca914><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e8dca914>//https://www.luogu.com.cn/problem/P2758</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e8dca914> &lt;algorithm&gt;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e8dca914> &lt;iostream&gt;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e8dca914> &lt;string&gt;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 10000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>string a,b;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> dp[N][N];</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e8dca914> // （最短距离）</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> b;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>){</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>        dp[i][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> i;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>    }</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> b.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>){</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>        dp[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> i;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>    }</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>){</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> b.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(); j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>){</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(a[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> b[j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>]){</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>                dp[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> dp[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>][j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>];</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>                continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>            }</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>            dp[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914> min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>(dp[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>][j], dp[i][j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>]), dp[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>][j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>        }</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>    }</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> dp[a.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>()][b.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e8dca914>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>()] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914> endl;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e8dca914>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e8dca914> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>;</span></span>
<span class="line" data-v-e8dca914><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e8dca914>}</span></span></code></pre></div>`,2),n=[h];function k(e,p,l,E,c,v){return i(),s("div",null,n)}const y=a(d,[["render",k],["__scopeId","data-v-e8dca914"]]);export{g as __pageData,y as default};
