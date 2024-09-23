import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const r=JSON.parse('{"title":"P_3383_模板_线性筛素数","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04/P_3383_模板_线性筛素数.md","filePath":"cpp/2024-04/P_3383_模板_线性筛素数.md"}'),n={name:"cpp/2024-04/P_3383_模板_线性筛素数.md"},h=t(`<h1 id="p-3383-模板-线性筛素数" tabindex="-1" data-v-c0ef6208>P_3383_模板_线性筛素数 <a class="header-anchor" href="#p-3383-模板-线性筛素数" aria-label="Permalink to &quot;P_3383_模板_线性筛素数&quot;" data-v-c0ef6208>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-c0ef6208><button title="Copy Code" class="copy" data-v-c0ef6208></button><span class="lang" data-v-c0ef6208>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-c0ef6208><code data-v-c0ef6208><span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> ONLINE_JUDGE</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#else</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;iostream&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;assert.h&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;algorithm&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;cstring&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;queue&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &lt;vector&gt;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#endif</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208> long</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>9</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> PII;</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> LOCAL_MACHINE</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(format, ##arg)</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#else</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>...);</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, ...)</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#endif</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>\\</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c0ef6208>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>)</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 100000010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> vis[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208>  //划掉合数</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> prim[N];</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208> //记录质数</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> cnt;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208> //质数个数</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> get_prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c0ef6208> n</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208> //线性筛法</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>  for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>){</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>vis[i]) prim[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>cnt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> i;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> prim[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> n; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>){</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>      vis[i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> prim[j]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>      if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>%</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> prim[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>break</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>    }</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>  }</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>}</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(){</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> n, q, k;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> q;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>    get_prim</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(n);</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(q</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>){</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> k;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> prim[k] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> endl;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>    }</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>}</span></span>
<span class="line" data-v-c0ef6208></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(){</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208> ONLINE_JUDGE</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    #endif</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>);</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c0ef6208>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c0ef6208>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>();}</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c0ef6208>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c0ef6208> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>;</span></span>
<span class="line" data-v-c0ef6208><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c0ef6208>}</span></span></code></pre></div>`,2),k=[h];function e(l,p,d,c,E,f){return i(),s("div",null,k)}const g=a(n,[["render",e],["__scopeId","data-v-c0ef6208"]]);export{r as __pageData,g as default};
