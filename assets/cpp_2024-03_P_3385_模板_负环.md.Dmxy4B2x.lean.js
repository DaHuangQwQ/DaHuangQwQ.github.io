import{_ as s,c as i,a2 as d,o as t}from"./chunks/framework.BQmytedh.js";const b=JSON.parse('{"title":"P_3385_模板_负环","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-03/P_3385_模板_负环.md","filePath":"cpp/2024-03/P_3385_模板_负环.md"}'),n={name:"cpp/2024-03/P_3385_模板_负环.md"};function h(k,a,l,p,c,e){return t(),i("div",null,a[0]||(a[0]=[d(`<h1 id="p-3385-模板-负环" tabindex="-1" data-v-62dc0dab>P_3385_模板_负环 <a class="header-anchor" href="#p-3385-模板-负环" aria-label="Permalink to &quot;P_3385_模板_负环&quot;" data-v-62dc0dab>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-62dc0dab><button title="Copy Code" class="copy" data-v-62dc0dab></button><span class="lang" data-v-62dc0dab>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-62dc0dab><code data-v-62dc0dab><span class="line" data-v-62dc0dab><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-62dc0dab>// #include&lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab> &lt;iostream&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab> &lt;algorithm&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab> &lt;cstring&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab> &lt;queue&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab> &lt;vector&gt;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>;</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#ifdef</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> LOCAL_MACHINE</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(format, ##arg)</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, ...) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>[1m</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>[45;33m Info:[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>%s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>%d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>)]: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>\\033</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>[0m&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> format </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>__FILE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>__FUNCTION__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>__LINE__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, ##__VA_ARGS__);</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#else</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> debug</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>...);</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>	#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> debug_info</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>format</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, ...)</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#endif</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> zassert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-62dc0dab>s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>) </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>\\</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>	do</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> ((x) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>) { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>%s\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-62dc0dab>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>, s); </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>assert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>((x)); } } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>)</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>;</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(){</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>}</span></span>
<span class="line" data-v-62dc0dab></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(){</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>);</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>    cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>);</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-62dc0dab>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>){</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-62dc0dab>        solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>();</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>    }</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-62dc0dab>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-62dc0dab> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>;</span></span>
<span class="line" data-v-62dc0dab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-62dc0dab>}</span></span></code></pre></div>`,2)]))}const v=s(n,[["render",h],["__scopeId","data-v-62dc0dab"]]);export{b as __pageData,v as default};
