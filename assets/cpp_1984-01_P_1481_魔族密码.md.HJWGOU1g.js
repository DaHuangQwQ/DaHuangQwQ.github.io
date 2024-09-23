import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_1481_魔族密码","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_1481_魔族密码.md","filePath":"cpp/1984-01/P_1481_魔族密码.md"}'),n={name:"cpp/1984-01/P_1481_魔族密码.md"},h=t(`<h1 id="p-1481-魔族密码" tabindex="-1" data-v-2c297871>P_1481_魔族密码 <a class="header-anchor" href="#p-1481-魔族密码" aria-label="Permalink to &quot;P_1481_魔族密码&quot;" data-v-2c297871>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-2c297871><button title="Copy Code" class="copy" data-v-2c297871></button><span class="lang" data-v-2c297871>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-2c297871><code data-v-2c297871><span class="line" data-v-2c297871><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-2c297871>// #include &lt;bits/stdc++.h&gt;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2c297871> &lt;iostream&gt;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-2c297871> &lt;cstring&gt;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;</span></span>
<span class="line" data-v-2c297871></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> n;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>char</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> ch[N][</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>];</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> dp[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>2010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>];</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> res;</span></span>
<span class="line" data-v-2c297871></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871> solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(){</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> n;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>){</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> ch[i];</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>        dp[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&gt;=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>)</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>			if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>strstr</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(ch[i],ch[j])</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>ch[i])</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>				dp[i]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(dp[j]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>,dp[i]);</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(res, dp[i]);</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>    }</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> endl;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>}</span></span>
<span class="line" data-v-2c297871></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(){</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>    ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>);</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>    cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>);</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-2c297871>    // cin &gt;&gt; n;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>    while</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>(n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>){</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-2c297871>        solve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>();</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>    }</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-2c297871>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-2c297871> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>;</span></span>
<span class="line" data-v-2c297871><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-2c297871>}</span></span></code></pre></div>`,2),k=[h];function p(l,d,c,e,E,v){return i(),s("div",null,k)}const y=a(n,[["render",p],["__scopeId","data-v-2c297871"]]);export{g as __pageData,y as default};
