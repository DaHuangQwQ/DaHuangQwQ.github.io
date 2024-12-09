import{_ as s,c as i,a2 as t,o as d}from"./chunks/framework.BQmytedh.js";const v=JSON.parse('{"title":"P_3383_模板_线性筛素数","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04/P_3383_模板_线性筛素数.md","filePath":"cpp/2024-04/P_3383_模板_线性筛素数.md"}'),n={name:"cpp/2024-04/P_3383_模板_线性筛素数.md"};function h(k,a,c,l,p,e){return d(),i("div",null,a[0]||(a[0]=[t(`<h1 id="p-3383-模板-线性筛素数" tabindex="-1" data-v-c4b8d7c5>P_3383_模板_线性筛素数 <a class="header-anchor" href="#p-3383-模板-线性筛素数" aria-label="Permalink to &quot;P_3383_模板_线性筛素数&quot;" data-v-c4b8d7c5>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-c4b8d7c5><button title="Copy Code" class="copy" data-v-c4b8d7c5></button><span class="lang" data-v-c4b8d7c5>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-c4b8d7c5><code data-v-c4b8d7c5><span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> ONLINE_JUDGE</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#else</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;iostream&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;assert.h&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;algorithm&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;cstring&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;queue&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &lt;vector&gt;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#endif</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5> long</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>9</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> PII;</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> LOCAL_MACHINE</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(format, ##arg)</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#else</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>...);</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, ...)</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#endif</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>\\</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c4b8d7c5>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>)</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 100000010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> vis[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5>  //划掉合数</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> prim[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5> //记录质数</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> cnt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5> //质数个数</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> get_prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c4b8d7c5> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5> //线性筛法</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>){</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>vis[i]) prim[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>cnt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> i;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> prim[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> n; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>){</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>      vis[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> prim[j]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> prim[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>    }</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>  }</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>}</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(){</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> n, q, k;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> q;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>    get_prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(n);</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>){</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> k;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> prim[k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> endl;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>    }</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>}</span></span>
<span class="line" data-v-c4b8d7c5></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(){</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5> ONLINE_JUDGE</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    #endif</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>);</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c4b8d7c5>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c4b8d7c5>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>();}</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c4b8d7c5>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c4b8d7c5> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>;</span></span>
<span class="line" data-v-c4b8d7c5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c4b8d7c5>}</span></span></code></pre></div>`,2)]))}const b=s(n,[["render",h],["__scopeId","data-v-c4b8d7c5"]]);export{v as __pageData,b as default};
