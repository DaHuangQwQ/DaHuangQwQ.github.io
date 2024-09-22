import{_ as a,c as s,o as i,V as e}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_1451_求细胞数量","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04-12/P_1451_求细胞数量.md","filePath":"cpp/2024-04-12/P_1451_求细胞数量.md"}'),t={name:"cpp/2024-04-12/P_1451_求细胞数量.md"},n=e(`<h1 id="p-1451-求细胞数量" tabindex="-1" data-v-e01abe93>P_1451_求细胞数量 <a class="header-anchor" href="#p-1451-求细胞数量" aria-label="Permalink to &quot;P_1451_求细胞数量&quot;" data-v-e01abe93>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-e01abe93><button title="Copy Code" class="copy" data-v-e01abe93></button><span class="lang" data-v-e01abe93>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-e01abe93><code data-v-e01abe93><span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> ONLINE_JUDGE</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#else</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;iostream&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;assert.h&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;algorithm&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;cstring&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;queue&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &lt;vector&gt;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#endif</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> long</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>9</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> PII;</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> LOCAL_MACHINE</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(format, ##arg)</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#else</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>...);</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, ...)</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#endif</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>\\</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>)</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e01abe93>// </span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n,m;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> board[N][N];</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> res;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>bool</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> vis[N][N];</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> dx[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> {</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>};</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> dy[] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> {</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>,</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>};</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> bfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-e01abe93> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    queue</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> &gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> q;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>make_pair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(x, y));</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    vis[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>empty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>()){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>        auto</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>front</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>();</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>        q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>pop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>();</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> dx[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> t.first;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> dy[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> t.second;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> vis[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> true</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> board[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>            q.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>make_pair</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(x, y));</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>            vis[x][y] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>        }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>}</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> m;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>        string str; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> str;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>            board[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> str[j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-e01abe93> &#39;0&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>        }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> m;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>            if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>vis[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> board[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>                bfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(i, j);</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>            }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>        }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    }</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> endl;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>}</span></span>
<span class="line" data-v-e01abe93></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(){</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93> ONLINE_JUDGE</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e01abe93>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    #endif</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>);</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-e01abe93>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-e01abe93>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>();}</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-e01abe93>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-e01abe93> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>;</span></span>
<span class="line" data-v-e01abe93><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-e01abe93>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,d,E,b,v){return i(),s("div",null,h)}const y=a(t,[["render",k],["__scopeId","data-v-e01abe93"]]);export{g as __pageData,y as default};
