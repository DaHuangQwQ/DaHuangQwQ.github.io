import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"P_8218_深进_1_例_1_求区间和","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01-24/P_8218_深进_1_例_1_求区间和.md","filePath":"cpp/1984-01-24/P_8218_深进_1_例_1_求区间和.md"}'),n={name:"cpp/1984-01-24/P_8218_深进_1_例_1_求区间和.md"},h=t(`<h1 id="p-8218-深进-1-例-1-求区间和" tabindex="-1" data-v-699562ab>P_8218_深进_1_例_1_求区间和 <a class="header-anchor" href="#p-8218-深进-1-例-1-求区间和" aria-label="Permalink to &quot;P_8218_深进_1_例_1_求区间和&quot;" data-v-699562ab>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-699562ab><button title="Copy Code" class="copy" data-v-699562ab></button><span class="lang" data-v-699562ab>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-699562ab><code data-v-699562ab><span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-699562ab> &lt;iostream&gt;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-699562ab> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-699562ab> 100010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> a[N];</span></span>
<span class="line" data-v-699562ab></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-699562ab> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>(){</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> n; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> n;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-699562ab> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>){</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>        cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> a[i];</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>        a[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>+=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> a[i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-699562ab>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>];</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>    }</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> m; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> m;</span></span>
<span class="line" data-v-699562ab></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-699562ab> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>){</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> l,r; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> r;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>        cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> a[r] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> a[l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-699562ab> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-699562ab>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab> endl;</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>    }</span></span>
<span class="line" data-v-699562ab><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-699562ab>}</span></span></code></pre></div>`,2),k=[h];function p(l,d,e,E,r,v){return i(),s("div",null,k)}const _=a(n,[["render",p],["__scopeId","data-v-699562ab"]]);export{g as __pageData,_ as default};
