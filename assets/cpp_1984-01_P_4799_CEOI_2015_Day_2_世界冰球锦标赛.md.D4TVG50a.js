import{_ as s,c as i,a2 as t,o as n}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"P_4799_CEOI_2015_Day_2_世界冰球锦标赛","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_4799_CEOI_2015_Day_2_世界冰球锦标赛.md","filePath":"cpp/1984-01/P_4799_CEOI_2015_Day_2_世界冰球锦标赛.md"}'),k={name:"cpp/1984-01/P_4799_CEOI_2015_Day_2_世界冰球锦标赛.md"};function h(l,a,p,d,E,c){return n(),i("div",null,a[0]||(a[0]=[t(`<h1 id="p-4799-ceoi-2015-day-2-世界冰球锦标赛" tabindex="-1" data-v-c880a00f>P_4799_CEOI_2015_Day_2_世界冰球锦标赛 <a class="header-anchor" href="#p-4799-ceoi-2015-day-2-世界冰球锦标赛" aria-label="Permalink to &quot;P_4799_CEOI_2015_Day_2_世界冰球锦标赛&quot;" data-v-c880a00f>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-c880a00f><button title="Copy Code" class="copy" data-v-c880a00f></button><span class="lang" data-v-c880a00f>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-c880a00f><code data-v-c880a00f><span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c880a00f> &lt;algorithm&gt;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c880a00f> &lt;iostream&gt;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-c880a00f> &lt;vector&gt;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 10010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> a[N],n,ans;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f> long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> m;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>vector</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&lt;long&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> ka,kb;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c880a00f> l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c880a00f> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f> long</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c880a00f> sum</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>vector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>long</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-c880a00f>k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>){</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> m) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> r){</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>        k.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>push_back</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(sum);</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>    }</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, r, sum </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> a[l], k);</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, r, sum, k);</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>}</span></span>
<span class="line" data-v-c880a00f></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(){</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> m;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>){</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> a[i];</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>    }</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, mid, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, ka);</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(mid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, n, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>, kb);</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(ka.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(), ka.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>());</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> kb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>size</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(); i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>)</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>		ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>+=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f> upper_bound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(ka.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(), ka.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>(), m</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>kb[i]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> ka.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-c880a00f>begin</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>();</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-c880a00f>	//要注意upper_bound找的是严格大于M-kb[i]的第一个数，但是vector下标从0开始，所以刚刚好。 </span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>	cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> ans </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f> endl;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-c880a00f>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-c880a00f> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>;</span></span>
<span class="line" data-v-c880a00f><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-c880a00f>}</span></span></code></pre></div>`,2)]))}const v=s(k,[["render",h],["__scopeId","data-v-c880a00f"]]);export{f as __pageData,v as default};
