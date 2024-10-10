import{_ as a,c as s,o as i,V as t}from"./chunks/framework.WykxUCM3.js";const F=JSON.parse('{"title":"XOR_on_Segment","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-05/XOR_on_Segment.md","filePath":"cpp/2024-05/XOR_on_Segment.md"}'),d={name:"cpp/2024-05/XOR_on_Segment.md"},n=t(`<h1 id="xor-on-segment" tabindex="-1" data-v-c1d08514>XOR_on_Segment <a class="header-anchor" href="#xor-on-segment" aria-label="Permalink to &quot;XOR_on_Segment&quot;" data-v-c1d08514>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-c1d08514><button title="Copy Code" class="copy" data-v-c1d08514></button><span class="lang" data-v-c1d08514>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-c1d08514><code data-v-c1d08514><span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> ONLINE_JUDGE</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#else</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;iostream&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;stdio.h&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;assert.h&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;algorithm&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;cstring&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;queue&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &lt;vector&gt;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#endif</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514> long</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> endl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514> &quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> INF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>9</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>typedef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> pair</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>&lt;int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>int&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> PII;</span></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> LOCAL_MACHINE</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(format, ##arg)</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#else</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>...);</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, ...)</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#endif</span></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c1d08514>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>\\</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c1d08514>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>)</span></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c1d08514>// </span></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(){</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>    </span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>}</span></span>
<span class="line" data-v-c1d08514></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>signed</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(){</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>    #ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514> ONLINE_JUDGE</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c1d08514>    // freopen(&quot;&quot;, &quot;r&quot;, stdin);</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>    #endif</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>);</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c1d08514>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>){</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c1d08514>solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>();}</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c1d08514>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c1d08514> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>;</span></span>
<span class="line" data-v-c1d08514><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c1d08514>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,e,c,E,v){return i(),s("div",null,h)}const g=a(d,[["render",k],["__scopeId","data-v-c1d08514"]]);export{F as __pageData,g as default};