import{_ as s,c as i,a2 as t,o as h}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"P_6577_模板_二分图最大权完美匹配","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-05/P_6577_模板_二分图最大权完美匹配.md","filePath":"cpp/2024-05/P_6577_模板_二分图最大权完美匹配.md"}'),k={name:"cpp/2024-05/P_6577_模板_二分图最大权完美匹配.md"};function n(l,a,p,d,E,c){return h(),i("div",null,a[0]||(a[0]=[t(`<h1 id="p-6577-模板-二分图最大权完美匹配" tabindex="-1" data-v-f8055ac6>P_6577_模板_二分图最大权完美匹配 <a class="header-anchor" href="#p-6577-模板-二分图最大权完美匹配" aria-label="Permalink to &quot;P_6577_模板_二分图最大权完美匹配&quot;" data-v-f8055ac6>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-f8055ac6><button title="Copy Code" class="copy" data-v-f8055ac6></button><span class="lang" data-v-f8055ac6>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-f8055ac6><code data-v-f8055ac6><span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&lt;iostream&gt;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&lt;cstdio&gt;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&lt;cmath&gt;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&lt;cstring&gt;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> LL</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6> long</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> N</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6> 510</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>12</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> n,m;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> match[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//右点匹配了哪个左点</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> va[N],vb[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//标记是否在交替路中</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>LL la[N],lb[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//左顶标,右顶标</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>LL w[N][N],d[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//维护更新的delta值</span></span>
<span class="line" data-v-f8055ac6></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>bool</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-f8055ac6> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>    va[x]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6> //x在交替路中</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>vb[y]){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>          if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(la[x]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>lb[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>w[x][y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//相等子图</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>              vb[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6> //y在交替路中</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>match[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>||</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(match[y])){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>                match[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>x;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6> //配对</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>                return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>              }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>          }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>          else</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6> //不是相等子图则记录最小的d[y]</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>            d[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(d[y],la[x]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>lb[y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>w[x][y]);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>      }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>    }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>}</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>LL</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> KM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>  //左顶标取i的出边的最大边权</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>) la[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>INF;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>)</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>) </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>          la[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(la[i],w[i][j]);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>) lb[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;      </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>        while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//直到左点i找到匹配</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>            fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(va</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,va</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>            fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(vb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,vb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>            fill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,INF);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(i))</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>          LL delta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>INF;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>)</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>vb[j])delta</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(delta,d[j]);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-f8055ac6>//修改顶标</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(va[j])la[j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>-=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>delta;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>              if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(vb[j])lb[j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>delta;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>            }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>        }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>    }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>    LL res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>)res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>w[match[i]][i];    </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> res;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>}</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>    scanf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>%d%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>m);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>)</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>) </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>          w[i][j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>INF; </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>){</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> x,y,z;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>        scanf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>%d%d%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>x,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>y,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>z);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>        w[x][y]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>z;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>    }</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>    printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>%lld\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>KM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>());</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>) </span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-f8055ac6>      printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-f8055ac6> &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>,match[i]);</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-f8055ac6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-f8055ac6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>;</span></span>
<span class="line" data-v-f8055ac6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-f8055ac6>}</span></span></code></pre></div>`,2)]))}const v=s(k,[["render",n],["__scopeId","data-v-f8055ac6"]]);export{f as __pageData,v as default};
