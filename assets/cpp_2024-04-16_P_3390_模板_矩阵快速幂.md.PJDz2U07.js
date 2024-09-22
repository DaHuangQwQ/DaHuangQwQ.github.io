import{_ as a,c as s,o as i,V as e}from"./chunks/framework.jgiY9GFO.js";const r=JSON.parse('{"title":"P_3390_模板_矩阵快速幂","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04-16/P_3390_模板_矩阵快速幂.md","filePath":"cpp/2024-04-16/P_3390_模板_矩阵快速幂.md"}'),t={name:"cpp/2024-04-16/P_3390_模板_矩阵快速幂.md"},n=e(`<h1 id="p-3390-模板-矩阵快速幂" tabindex="-1" data-v-5e7aecbb>P_3390_模板_矩阵快速幂 <a class="header-anchor" href="#p-3390-模板-矩阵快速幂" aria-label="Permalink to &quot;P_3390_模板_矩阵快速幂&quot;" data-v-5e7aecbb>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-5e7aecbb><button title="Copy Code" class="copy" data-v-5e7aecbb></button><span class="lang" data-v-5e7aecbb>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-5e7aecbb><code data-v-5e7aecbb><span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> ONLINE_JUDGE</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#else</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;iostream&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;assert.h&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;algorithm&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;cstring&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;queue&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &lt;vector&gt;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#endif</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> long</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>9</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> PII;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> MOD </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1000000007</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> ll</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> LOCAL_MACHINE</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(format, ##arg)</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#else</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>...);</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, ...)</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#endif</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>\\</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>)</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-5e7aecbb>// </span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>ll n, k;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>{</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    ll c[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>101</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>];</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>    matrix</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(c, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, sizeof c);}</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>} a, res;</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>matrix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>matrix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>matrix</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb>y</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    matrix t;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>            for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>; k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;k</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>                t.c[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> (t.c[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> x.c[i][k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> y.c[k][j]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> MOD;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>            }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> t;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>}</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> quick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-5e7aecbb> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>) res.c[i][i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(p){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&amp;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>) res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> a;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> a;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&gt;&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>}</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> k;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>            cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> a.c[i][j];</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>    quick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(k);</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>            cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> res.c[i][j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-5e7aecbb> &quot; &quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> endl;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>    }</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>}</span></span>
<span class="line" data-v-5e7aecbb></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(){</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb> ONLINE_JUDGE</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-5e7aecbb>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    #endif</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>);</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-5e7aecbb>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-5e7aecbb>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>();}</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-5e7aecbb>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-5e7aecbb> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>;</span></span>
<span class="line" data-v-5e7aecbb><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-5e7aecbb>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,b,d,E,c){return i(),s("div",null,h)}const g=a(t,[["render",k],["__scopeId","data-v-5e7aecbb"]]);export{r as __pageData,g as default};
