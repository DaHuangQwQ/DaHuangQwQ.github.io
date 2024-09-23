import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_1020_NOIP_1999_普及组_导弹拦截","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_1020_NOIP_1999_普及组_导弹拦截.md","filePath":"cpp/1984-01/P_1020_NOIP_1999_普及组_导弹拦截.md"}'),n={name:"cpp/1984-01/P_1020_NOIP_1999_普及组_导弹拦截.md"},h=t(`<h1 id="p-1020-noip-1999-普及组-导弹拦截" tabindex="-1" data-v-a805bb01>P_1020_NOIP_1999_普及组_导弹拦截 <a class="header-anchor" href="#p-1020-noip-1999-普及组-导弹拦截" aria-label="Permalink to &quot;P_1020_NOIP_1999_普及组_导弹拦截&quot;" data-v-a805bb01>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-a805bb01><button title="Copy Code" class="copy" data-v-a805bb01></button><span class="lang" data-v-a805bb01>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-a805bb01><code data-v-a805bb01><span class="line" data-v-a805bb01><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-a805bb01>// https://www.luogu.com.cn/problem/P1020</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a805bb01> &lt;algorithm&gt;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-a805bb01> &lt;iostream&gt;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a805bb01> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> dp1[N],dp2[N], cnt1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>, cnt2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> a[N], cnt, res, num;</span></span>
<span class="line" data-v-a805bb01></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a805bb01> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(){</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-a805bb01> // Dilworth 定理</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> x;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> x){</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>        a[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>cnt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> x;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>    }</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>    dp1[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>],dp2[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>a[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>];</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> cnt;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>){</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(a[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> dp1[cnt1]){</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>			dp1[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>cnt1] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> a[i];</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>		}</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>        else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>{</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> k1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a805bb01> upper_bound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(dp1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>,dp1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>cnt1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>,a[i],</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a805bb01>greater</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>&lt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>&gt;()) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> dp1;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>            dp1[k1] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> a[i];</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>        }</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(a[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>dp2[cnt2]){</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>            dp2[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>cnt2] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> a[i];</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>        }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>{</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>            int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> k2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-a805bb01> lower_bound</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>(dp2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>, dp2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>cnt2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>, a[i]) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> dp2;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>            dp2[k2] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> a[i];</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>        }</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>    }</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> cnt1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> endl </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> cnt2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01> endl;</span></span>
<span class="line" data-v-a805bb01></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-a805bb01>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-a805bb01> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>;</span></span>
<span class="line" data-v-a805bb01><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-a805bb01>}</span></span></code></pre></div>`,2),k=[h];function p(l,b,d,E,e,v){return i(),s("div",null,k)}const y=a(n,[["render",p],["__scopeId","data-v-a805bb01"]]);export{g as __pageData,y as default};
