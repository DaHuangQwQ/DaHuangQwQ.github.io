import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const r=JSON.parse('{"title":"P_1955_NOI_2015_程序自动分析","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04-12/P_1955_NOI_2015_程序自动分析.md","filePath":"cpp/2024-04-12/P_1955_NOI_2015_程序自动分析.md"}'),n={name:"cpp/2024-04-12/P_1955_NOI_2015_程序自动分析.md"},h=t(`<h1 id="p-1955-noi-2015-程序自动分析" tabindex="-1" data-v-ce93bb6a>P_1955_NOI_2015_程序自动分析 <a class="header-anchor" href="#p-1955-noi-2015-程序自动分析" aria-label="Permalink to &quot;P_1955_NOI_2015_程序自动分析&quot;" data-v-ce93bb6a>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-ce93bb6a><button title="Copy Code" class="copy" data-v-ce93bb6a></button><span class="lang" data-v-ce93bb6a>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-ce93bb6a><code data-v-ce93bb6a><span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> ONLINE_JUDGE</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#else</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;iostream&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;assert.h&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;algorithm&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;cstring&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;queue&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &lt;vector&gt;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#endif</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> long</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>9</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> PII;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> ll</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> LOCAL_MACHINE</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(format, ##arg)</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#else</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>...);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, ...)</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#endif</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>\\</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>)</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>7</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ce93bb6a>// </span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> p[N];</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>{</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> u, v, q;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    bool</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> operator</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> node</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a> a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> {</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> q </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> a.q;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>} e[N];</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-ce93bb6a> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>!=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> p[u]) p[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(p[u]);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> p[u];</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>}</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> book[N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>], tot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(p, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, sizeof p);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(book, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, sizeof book);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    memset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(e, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, sizeof e);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    tot </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    </span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> u,v,q; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> q;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        e[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> (node){u,v,q};</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        book[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>tot] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> u;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        book[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>tot] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> v;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    </span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(book, book </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> tot);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> r </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> unique</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(book, book </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> tot) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> book;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        e[i].u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> lower_bound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(book, book</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>r, e[i].u) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> book;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        e[i].v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> lower_bound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(book, book</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>r, e[i].v) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> book;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> r;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>) p[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> i;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>, e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>n);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ce93bb6a>    // zassert(e[1].q == 1, &quot;err&quot;);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(e[i].u);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> find</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(e[i].v);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(e[i].q){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>            p[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> v;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>        else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> v){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>            cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &quot;NO&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> endl;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>            return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>        }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    }</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-ce93bb6a> &quot;YES&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a> &lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> endl;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>}</span></span>
<span class="line" data-v-ce93bb6a></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(){</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a> ONLINE_JUDGE</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-ce93bb6a>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    #endif</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>);</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a> n;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-ce93bb6a>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>();}</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-ce93bb6a>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-ce93bb6a> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>;</span></span>
<span class="line" data-v-ce93bb6a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-ce93bb6a>}</span></span></code></pre></div>`,2),k=[h];function e(l,p,b,d,E,c){return i(),s("div",null,k)}const g=a(n,[["render",e],["__scopeId","data-v-ce93bb6a"]]);export{r as __pageData,g as default};
