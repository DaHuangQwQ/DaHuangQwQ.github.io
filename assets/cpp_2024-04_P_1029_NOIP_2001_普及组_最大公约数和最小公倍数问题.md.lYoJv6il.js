import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04/P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题.md","filePath":"cpp/2024-04/P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题.md"}'),d={name:"cpp/2024-04/P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题.md"},n=t(`<h1 id="p-1029-noip-2001-普及组-最大公约数和最小公倍数问题" tabindex="-1" data-v-c67d00a6>P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题 <a class="header-anchor" href="#p-1029-noip-2001-普及组-最大公约数和最小公倍数问题" aria-label="Permalink to &quot;P_1029_NOIP_2001_普及组_最大公约数和最小公倍数问题&quot;" data-v-c67d00a6>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-c67d00a6><button title="Copy Code" class="copy" data-v-c67d00a6></button><span class="lang" data-v-c67d00a6>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-c67d00a6><code data-v-c67d00a6><span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> ONLINE_JUDGE</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#else</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;iostream&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;assert.h&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;algorithm&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;cstring&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;queue&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &lt;vector&gt;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#endif</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> long</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>9</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> PII;</span></span>
<span class="line" data-v-c67d00a6></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> LOCAL_MACHINE</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(format, ##arg)</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#else</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>...);</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, ...)</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#endif</span></span>
<span class="line" data-v-c67d00a6></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>\\</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c67d00a6>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>)</span></span>
<span class="line" data-v-c67d00a6></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c67d00a6>// </span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> n, m;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> gcd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c67d00a6> y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>){</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(y </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> x;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> gcd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(y, x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> y);</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>}</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> res;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(){</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> m;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> m;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>t; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>)</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6> &amp;&amp;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> gcd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(i, t </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> i) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> n) </span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>          res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>m) res</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;      </span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> endl;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>}</span></span>
<span class="line" data-v-c67d00a6></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(){</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6> ONLINE_JUDGE</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c67d00a6>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    #endif</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>);</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c67d00a6>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c67d00a6>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>();}</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c67d00a6>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c67d00a6> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>;</span></span>
<span class="line" data-v-c67d00a6><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c67d00a6>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,c,e,E,v){return i(),s("div",null,h)}const F=a(d,[["render",k],["__scopeId","data-v-c67d00a6"]]);export{g as __pageData,F as default};
