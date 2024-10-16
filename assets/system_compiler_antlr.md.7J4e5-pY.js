import{_ as s,c as n,o as a,V as p}from"./chunks/framework.WykxUCM3.js";const m=JSON.parse('{"title":"antlr","description":"","frontmatter":{},"headers":[],"relativePath":"system/compiler/antlr.md","filePath":"system/compiler/antlr.md"}'),l={name:"system/compiler/antlr.md"},e=p(`<h1 id="antlr" tabindex="-1">antlr <a class="header-anchor" href="#antlr" aria-label="Permalink to &quot;antlr&quot;">​</a></h1><p>antlr 是ANother Tool for Language Recognition的缩写，它是一个强大的用于读取、处理、执行和翻译结构化文本或二进制文件的语法分析器生成器，广泛用于构建语言、工具和框架，通过语法描述规则，它能够生成一个可以遍历解析树的解析器</p><div class="language-antlr vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">antlr</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>grammar SimpleExpr;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@header {</span></span>
<span class="line"><span>package simpleexpr;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>prog : stat* EOF ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stat : expr &#39;;&#39;</span></span>
<span class="line"><span>     | ID &#39;=&#39; expr &#39;;&#39;</span></span>
<span class="line"><span>     | &#39;print&#39; expr &#39;;&#39;</span></span>
<span class="line"><span>     ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>expr : expr (&#39;*&#39; | &#39;/&#39;) expr</span></span>
<span class="line"><span>     | expr (&#39;+&#39; | &#39;-&#39;) expr</span></span>
<span class="line"><span>     | &#39;(&#39; expr &#39;)&#39;</span></span>
<span class="line"><span>     | ID</span></span>
<span class="line"><span>     | INT</span></span>
<span class="line"><span>     | FLOAT</span></span>
<span class="line"><span>     ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SEMI : &#39;;&#39; ;</span></span>
<span class="line"><span>ASSIGN : &#39;=&#39; ;</span></span>
<span class="line"><span>PRINT : &#39;print&#39; ;</span></span>
<span class="line"><span>MUL : &#39;*&#39; ;</span></span>
<span class="line"><span>DIV : &#39;/&#39; ;</span></span>
<span class="line"><span>ADD : &#39;+&#39; ;</span></span>
<span class="line"><span>SUB : &#39;-&#39; ;</span></span>
<span class="line"><span>LPAREN : &#39;(&#39; ;</span></span>
<span class="line"><span>RPAREN : &#39;)&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ID : (&#39;_&#39; | LETTER) WORD* ;</span></span>
<span class="line"><span>INT : &#39;0&#39; | (&#39;+&#39; | &#39;-&#39;)? [1-9]NUMBER* ;</span></span>
<span class="line"><span>FLOAT : INT &#39;.&#39; NUMBER*</span></span>
<span class="line"><span>      | &#39;.&#39; NUMBER+</span></span>
<span class="line"><span>      ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SL_COMMENT : &#39;//&#39; .*? &#39;\\n&#39; -&gt; skip ;</span></span>
<span class="line"><span>SL_COMMENT2 : &#39;//&#39; (~&#39;\\n&#39;)* &#39;\\n&#39; -&gt; skip ;</span></span>
<span class="line"><span>DOCS_COMMENT : &#39;/**&#39; .*? &#39;*/&#39; -&gt; skip ;</span></span>
<span class="line"><span>ML_COMMENT : &#39;/*&#39; .*? &#39;*/&#39; -&gt; skip ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>WS : [ \\t\\r\\n]+ -&gt; skip ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fragment LETTER : [a-zA-Z] ;</span></span>
<span class="line"><span>fragment NUMBER : [0-9] ;</span></span>
<span class="line"><span>fragment WORD : &#39;_&#39; | LETTER | NUMBER ;</span></span></code></pre></div><h2 id="生成分析器" tabindex="-1">生成分析器 <a class="header-anchor" href="#生成分析器" aria-label="Permalink to &quot;生成分析器&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">antlr4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dlanguage=Go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hello.g4</span></span></code></pre></div>`,5),i=[e];function t(c,r,o,h,d,g){return a(),n("div",null,i)}const k=s(l,[["render",t]]);export{m as __pageData,k as default};
