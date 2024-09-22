import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const y=JSON.parse('{"title":"P_1434_SHOI_2002_滑雪","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P_1434_SHOI_2002_滑雪.md","filePath":"cpp/1984-01-24/P_1434_SHOI_2002_滑雪.md"}'),d={name:"cpp/1984-01-24/P_1434_SHOI_2002_滑雪.md"},h=t(`<h1 id="p-1434-shoi-2002-滑雪" tabindex="-1" data-v-2bde0269>P_1434_SHOI_2002_滑雪 <a class="header-anchor" href="#p-1434-shoi-2002-滑雪" aria-label="Permalink to &quot;P_1434_SHOI_2002_滑雪&quot;" data-v-2bde0269>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-2bde0269><button title="Copy Code" class="copy" data-v-2bde0269></button><span class="lang" data-v-2bde0269>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-2bde0269><code data-v-2bde0269><span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2bde0269> &lt;iostream&gt;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;</span></span>
<span class="line" data-v-2bde0269></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> board[N][N],n,m,res;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> s[N][N];</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> dx[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>};</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> dy[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>};</span></span>
<span class="line" data-v-2bde0269></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-2bde0269> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-2bde0269> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(s[x][y]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> s[x][y];</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    s[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> xx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> dx[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> x;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> yy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> dy[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> y;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(xx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> xx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> yy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> yy </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> board[xx][yy] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> board[x][y]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269>        dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(xx,yy);</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>        s[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(s[xx][yy] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>, s[x][y]);</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    }</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> s[x][y];</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>}</span></span>
<span class="line" data-v-2bde0269></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> m;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>            cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> board[i][j];</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>        }</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    }</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2bde0269> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>){</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>            res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(res, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2bde0269>dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>(i,j));</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>        }</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    }</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2bde0269>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269> endl;</span></span>
<span class="line" data-v-2bde0269><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2bde0269>}</span></span></code></pre></div>`,2),n=[h];function k(e,l,p,E,b,v){return i(),s("div",null,n)}const g=a(d,[["render",k],["__scopeId","data-v-2bde0269"]]);export{y as __pageData,g as default};
