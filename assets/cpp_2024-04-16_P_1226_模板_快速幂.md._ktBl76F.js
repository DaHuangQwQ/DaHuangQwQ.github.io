import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const r=JSON.parse('{"title":"P_1226_模板_快速幂","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04-16/P_1226_模板_快速幂.md","filePath":"cpp/2024-04-16/P_1226_模板_快速幂.md"}'),d={name:"cpp/2024-04-16/P_1226_模板_快速幂.md"},n=t(`<h1 id="p-1226-模板-快速幂" tabindex="-1" data-v-9b05edc4>P_1226_模板_快速幂 <a class="header-anchor" href="#p-1226-模板-快速幂" aria-label="Permalink to &quot;P_1226_模板_快速幂&quot;" data-v-9b05edc4>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-9b05edc4><button title="Copy Code" class="copy" data-v-9b05edc4></button><span class="lang" data-v-9b05edc4>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-9b05edc4><code data-v-9b05edc4><span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> ONLINE_JUDGE</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#else</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;iostream&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;assert.h&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;algorithm&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;cstring&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;queue&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &lt;vector&gt;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#endif</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> long</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>9</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> PII;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> ll</span></span>
<span class="line" data-v-9b05edc4></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> LOCAL_MACHINE</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(format, ##arg)</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#else</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>...);</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, ...)</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#endif</span></span>
<span class="line" data-v-9b05edc4></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>\\</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>)</span></span>
<span class="line" data-v-9b05edc4></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-9b05edc4>// </span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> n, m, mod;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> quickpow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-9b05edc4> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>){</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(n){</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>) res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> (res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> mod;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>        a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> (a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> a) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> mod;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>        n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&gt;&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>    }</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> res;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>}</span></span>
<span class="line" data-v-9b05edc4></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(){</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> mod;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &quot;^&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &quot; mod &quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> mod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-9b05edc4> &quot;=&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>; </span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> quickpow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(n, m) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> mod </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> endl;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>}</span></span>
<span class="line" data-v-9b05edc4></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(){</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4> ONLINE_JUDGE</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-9b05edc4>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    #endif</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>);</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-9b05edc4>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-9b05edc4>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>();}</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-9b05edc4>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-9b05edc4> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>;</span></span>
<span class="line" data-v-9b05edc4><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-9b05edc4>}</span></span></code></pre></div>`,2),h=[n];function k(e,l,p,c,E,b){return i(),s("div",null,h)}const g=a(d,[["render",k],["__scopeId","data-v-9b05edc4"]]);export{r as __pageData,g as default};
