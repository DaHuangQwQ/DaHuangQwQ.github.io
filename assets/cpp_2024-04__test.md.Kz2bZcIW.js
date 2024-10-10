import{_ as a,c as s,o as i,V as t}from"./chunks/framework.WykxUCM3.js";const r=JSON.parse('{"title":"_test","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04/_test.md","filePath":"cpp/2024-04/_test.md"}'),d={name:"cpp/2024-04/_test.md"},n=t(`<h1 id="test" tabindex="-1" data-v-d8cb910b>_test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;_test&quot;" data-v-d8cb910b>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-d8cb910b><button title="Copy Code" class="copy" data-v-d8cb910b></button><span class="lang" data-v-d8cb910b>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-d8cb910b><code data-v-d8cb910b><span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d8cb910b> &lt;iostream&gt;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> root, n;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b> node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> {</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> to, next, w;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>}e[N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>], ne[N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>];</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> head[N];</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-d8cb910b> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-d8cb910b> v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-d8cb910b> w</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>    static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    e[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>idx] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> (node){v, head[u], w};</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    head[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> idx;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>}</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> cnt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-d8cb910b> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> head[u];i;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> e[i].next){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> e[i].to;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> e[i].w;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>       </span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>        ne[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>cnt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> (node){u, v, w};</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d8cb910b>        // cout &lt;&lt; u &lt;&lt; &quot; &quot; &lt;&lt; v &lt;&lt; &quot; &quot; &lt;&lt; w &lt;&lt; endl;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b>        dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(v);</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    }</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>}</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> n;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> u, v,w; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> v;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b>        add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(u, v, w);</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    }</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(root);</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> cnt;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b> j;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>, j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-d8cb910b>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>){</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d8cb910b>        // cout &lt;&lt; ne[j].to &lt;&lt; &quot; &quot; &lt;&lt; ne[j].w &lt;&lt; &quot; &quot; &lt;&lt; ne[j].next &lt;&lt; endl;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b>        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d8cb910b>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b>%05d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> %d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> %05d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d8cb910b>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>, ne[j].to, ne[j].w, ne[i].to);</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-d8cb910b>        // cout &lt;&lt; ne[i].to &lt;&lt; &quot; &quot; &lt;&lt; ne[i].w &lt;&lt; &quot; &quot; &lt;&lt; ne[i].next &lt;&lt; endl;</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-d8cb910b>        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d8cb910b>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b>%05d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> %d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-d8cb910b> %05d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-d8cb910b>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>, ne[i].to, ne[i].w, ne[j].to);</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>    }</span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>        </span></span>
<span class="line" data-v-d8cb910b><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-d8cb910b>}</span></span></code></pre></div>`,2),h=[n];function k(l,p,b,e,c,E){return i(),s("div",null,h)}const g=a(d,[["render",k],["__scopeId","data-v-d8cb910b"]]);export{r as __pageData,g as default};