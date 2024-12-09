import{_ as s,c as i,a2 as d,o as t}from"./chunks/framework.BQmytedh.js";const f=JSON.parse('{"title":"P_3919_模板_可持久化线段树_1_可持久化数组","description":"","frontmatter":{},"headers":[],"relativePath":"cpp/1984-01/P_3919_模板_可持久化线段树_1_可持久化数组.md","filePath":"cpp/1984-01/P_3919_模板_可持久化线段树_1_可持久化数组.md"}'),n={name:"cpp/1984-01/P_3919_模板_可持久化线段树_1_可持久化数组.md"};function h(k,a,l,p,E,e){return t(),i("div",null,a[0]||(a[0]=[d(`<h1 id="p-3919-模板-可持久化线段树-1-可持久化数组" tabindex="-1" data-v-02df2d2a>P_3919_模板_可持久化线段树_1_可持久化数组 <a class="header-anchor" href="#p-3919-模板-可持久化线段树-1-可持久化数组" aria-label="Permalink to &quot;P_3919_模板_可持久化线段树_1_可持久化数组&quot;" data-v-02df2d2a>​</a></h1><div class="language-cpp vp-adaptive-theme" data-v-02df2d2a><button title="Copy Code" class="copy" data-v-02df2d2a></button><span class="lang" data-v-02df2d2a>cpp</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0" data-v-02df2d2a><code data-v-02df2d2a><span class="line" data-v-02df2d2a><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;" data-v-02df2d2a>// https://www.luogu.com.cn/problem/P3919</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>#include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;" data-v-02df2d2a> &lt;iostream&gt;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> long</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> long</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> IOS</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> ios</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>::</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>sync_with_stdio</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>);cin.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>);cout.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>tie</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>using</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> namespace</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> std</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> ll N </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1000010</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>ll n, m, a[N];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>ll root[N], tot;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>ll ls[N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>], rs[N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>], val[N</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>25</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>];</span></span>
<span class="line" data-v-02df2d2a></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>{</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ll l,r;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ll sum,add;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>} tree[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>4</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>N];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> lson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> rson</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> k </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>|</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span></span>
<span class="line" data-v-02df2d2a></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a>u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>tot;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r) {</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>        val[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> a[l];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    }</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ll mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> (l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(ls[u], l, mid);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(rs[u], mid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, r);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>}</span></span>
<span class="line" data-v-02df2d2a></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> &amp;</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a>u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> v</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> ++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>tot;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ls[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> ls[v];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    rs[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> rs[v];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    val[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> val[v];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>        val[u] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> x;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    }</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ll mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> (l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> mid) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(ls[u], ls[v], l, mid, p, x);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    else</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(rs[u], rs[v], mid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, r, p , x);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>}</span></span>
<span class="line" data-v-02df2d2a></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> u</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> l</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>,</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>ll</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;" data-v-02df2d2a> p</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>        return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> val[u];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    }</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    ll mid </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> (l </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> r) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(p </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> mid) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(ls[u],l,mid,p);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a> return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(rs[u],mid</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, r, p);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>}</span></span>
<span class="line" data-v-02df2d2a></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>int</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    IOS</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> n </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> m;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(ll i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> n;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>) cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> a[i];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>    build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(root[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, n);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(ll i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>;i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> m;i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>        ll ver,op,u,v; cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> ver </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> op;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(op </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>==</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>){</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>            cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> u </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> v;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a>            change</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(root[i], root[ver], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, n, u , v);</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>        }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>{</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>            cin </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&gt;&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> u;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>            root[i] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> root[ver];</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>            cout </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;" data-v-02df2d2a> query</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>(root[ver], </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;" data-v-02df2d2a>1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>, n, u) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;" data-v-02df2d2a>&lt;&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a> endl;</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>        }</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>    }</span></span>
<span class="line" data-v-02df2d2a><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;" data-v-02df2d2a>}</span></span></code></pre></div>`,2)]))}const r=s(n,[["render",h],["__scopeId","data-v-02df2d2a"]]);export{f as __pageData,r as default};
