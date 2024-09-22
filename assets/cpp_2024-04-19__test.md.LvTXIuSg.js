import{_ as a,c as s,o as i,V as t}from"./chunks/framework.jgiY9GFO.js";const g=JSON.parse('{"title":"_test","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/2024-04-19/_test.md","filePath":"cpp/2024-04-19/_test.md"}'),n={name:"cpp/2024-04-19/_test.md"},h=t(`<h1 id="test" tabindex="-1" data-v-44c013c1>_test <a class="header-anchor" href="#test" aria-label="Permalink to &quot;_test&quot;" data-v-44c013c1>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-44c013c1><button title="Copy Code" class="copy" data-v-44c013c1></button><span class="lang" data-v-44c013c1>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" data-v-44c013c1><code data-v-44c013c1><span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-44c013c1> &lt;iostream&gt;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>const</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>e</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1>5</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1> +</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> root, n;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>struct</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1> node</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> {</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>    int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> to, next, w;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>}e[N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>], ne[N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>];</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> head[N];</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1> add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-44c013c1> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>,</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-44c013c1> v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-44c013c1> w</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>    static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1> int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> idx </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    e[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>idx] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> (node){v, head[u], w};</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    head[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> idx;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>}</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> cnt </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1> dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-44c013c1> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> head[u];i;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> e[i].next){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> e[i].to;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> e[i].w;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>       </span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>        ne[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>cnt] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> (node){u, v, w};</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-44c013c1>        // cout &lt;&lt; u &lt;&lt; &quot; &quot; &lt;&lt; v &lt;&lt; &quot; &quot; &lt;&lt; w &lt;&lt; endl;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(v </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>==</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>continue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1>        dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(v);</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    }</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>}</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> root </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> n;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>        int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> u, v,w; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> w </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> v;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1>        add</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(u, v, w);</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    }</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1>    dfs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(root);</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>, j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> cnt;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1> j;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>, j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-44c013c1>--</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>){</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-44c013c1>        // cout &lt;&lt; ne[j].to &lt;&lt; &quot; &quot; &lt;&lt; ne[j].w &lt;&lt; &quot; &quot; &lt;&lt; ne[j].next &lt;&lt; endl;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1>        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-44c013c1>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1>%05d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> %d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> %05d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-44c013c1>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>, ne[j].to, ne[j].w, ne[i].to);</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-44c013c1>        // cout &lt;&lt; ne[i].to &lt;&lt; &quot; &quot; &lt;&lt; ne[i].w &lt;&lt; &quot; &quot; &lt;&lt; ne[i].next &lt;&lt; endl;</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-44c013c1>        printf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-44c013c1>&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1>%05d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> %d</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-44c013c1> %05d\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-44c013c1>&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>, ne[i].to, ne[i].w, ne[j].to);</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>    }</span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>        </span></span>
<span class="line" data-v-44c013c1><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-44c013c1>}</span></span></code></pre></div>`,2),c=[h];function k(l,p,d,e,E,v){return i(),s("div",null,c)}const y=a(n,[["render",k],["__scopeId","data-v-44c013c1"]]);export{g as __pageData,y as default};