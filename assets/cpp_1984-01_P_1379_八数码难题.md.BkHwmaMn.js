import{_ as s,c as i,a2 as t,o as d}from"./chunks/framework.BQmytedh.js";const v=JSON.parse('{"title":"P_1379_八数码难题","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_1379_八数码难题.md","filePath":"cpp/1984-01/P_1379_八数码难题.md"}'),h={name:"cpp/1984-01/P_1379_八数码难题.md"};function k(n,a,e,p,l,E){return d(),i("div",null,a[0]||(a[0]=[t(`<h1 id="p-1379-八数码难题" tabindex="-1" data-v-da0c69e6>P_1379_八数码难题 <a class="header-anchor" href="#p-1379-八数码难题" aria-label="Permalink to &quot;P_1379_八数码难题&quot;" data-v-da0c69e6>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-da0c69e6><button title="Copy Code" class="copy" data-v-da0c69e6></button><span class="lang" data-v-da0c69e6>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-da0c69e6><code data-v-da0c69e6><span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;iostream&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;string&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;map&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;cmath&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;algorithm&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;queue&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;cstring&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&lt;cstdio&gt;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> ss[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>];</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> board[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>[{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>},</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>},</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>},</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>}];</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>],k,judge;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> dx[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>};</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> dy[]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>};</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6> check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>()</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>j)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(board[i][j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>a[i][j])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>}</span></span>
<span class="line" data-v-da0c69e6></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-da0c69e6> step</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> cnt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>j)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(board[i][j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>a[i][j]){ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>cnt</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>step</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>k) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;}</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>}</span></span>
<span class="line" data-v-da0c69e6></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6> A_star</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-da0c69e6> step</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-da0c69e6> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-da0c69e6> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-da0c69e6> pre</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(step</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>k){ </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>())judge</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>//达到当前限制的最大深度</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(judge) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    {</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> nx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>dx[i],ny</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>dy[i];</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(nx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>nx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>ny</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>ny</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>pre</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>//加入了上述最优性剪枝</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>        swap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(a[x][y],a[nx][ny]);</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(step)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&amp;&amp;!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>judge) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>A_star</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(step</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,nx,ny,i);</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>//A*估价合法再向下搜索</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>        swap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(a[x][y],a[nx][ny]);</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    }</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>}</span></span>
<span class="line" data-v-da0c69e6></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>()</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>{</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> ss[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>15</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>];</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> x,y;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> ss;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>    // scanf(&quot;%s&quot;,&amp;ss);</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>9</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i)</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    {</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>        a[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>][i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>ss[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(ss[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&#39;0&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>)x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,y</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    }</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>check</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>()){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&quot;0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>);</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>//特判不用移动</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>k)</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-da0c69e6>//枚举最大深度</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    {</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>        A_star</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,x,y,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>);</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(judge){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-da0c69e6>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-da0c69e6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>,k);</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;}</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>    }</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-da0c69e6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-da0c69e6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>;</span></span>
<span class="line" data-v-da0c69e6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-da0c69e6>}</span></span></code></pre></div>`,2)]))}const r=s(h,[["render",k],["__scopeId","data-v-da0c69e6"]]);export{v as __pageData,r as default};
