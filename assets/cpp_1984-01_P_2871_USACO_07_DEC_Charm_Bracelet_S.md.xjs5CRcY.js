import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_2871_USACO_07_DEC_Charm_Bracelet_S","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_2871_USACO_07_DEC_Charm_Bracelet_S.md","filePath":"cpp/1984-01/P_2871_USACO_07_DEC_Charm_Bracelet_S.md"}'),n={name:"cpp/1984-01/P_2871_USACO_07_DEC_Charm_Bracelet_S.md"},e=t(`<h1 id="p-2871-usaco-07-dec-charm-bracelet-s" tabindex="-1" data-v-0014eff5>P_2871_USACO_07_DEC_Charm_Bracelet_S <a class="header-anchor" href="#p-2871-usaco-07-dec-charm-bracelet-s" aria-label="Permalink to &quot;P_2871_USACO_07_DEC_Charm_Bracelet_S&quot;" data-v-0014eff5>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-0014eff5><button title="Copy Code" class="copy" data-v-0014eff5></button><span class="lang" data-v-0014eff5>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-0014eff5><code data-v-0014eff5><span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0014eff5> &lt;iostream&gt;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-0014eff5> &lt;algorithm&gt;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0014eff5> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-0014eff5> 13000</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> n,m; </span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> w[N], v[N];</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> f[N];</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0014eff5> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>(){</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> m;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-0014eff5> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>){</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> w[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> v[i];</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>    }</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-0014eff5> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>){</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>        for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> m;j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> w[i];j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>){</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>            f[j] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-0014eff5> max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>(f[j], f[j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> w[i]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> v[i]);</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>        }</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>    }</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>    cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> f[m] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5> endl;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-0014eff5>    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-0014eff5> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>;</span></span>
<span class="line" data-v-0014eff5><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-0014eff5>}</span></span></code></pre></div>`,2),h=[e];function k(l,p,f,d,E,r){return i(),s("div",null,h)}const y=a(n,[["render",k],["__scopeId","data-v-0014eff5"]]);export{g as __pageData,y as default};
