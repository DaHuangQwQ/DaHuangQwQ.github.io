import{_ as n,c as a,a2 as p,o as l}from"./chunks/framework.BQmytedh.js";const d=JSON.parse('{"title":"antlr","description":"","frontmatter":{},"headers":[],"relativePath":"system/compiler/antlr.md","filePath":"system/compiler/antlr.md"}'),e={name:"system/compiler/antlr.md"};function i(c,s,t,r,o,h){return l(),a("div",null,s[0]||(s[0]=[p(`<h1 id="antlr" tabindex="-1">antlr <a class="header-anchor" href="#antlr" aria-label="Permalink to &quot;antlr&quot;">​</a></h1><p>antlr 是ANother Tool for Language Recognition的缩写，它是一个强大的用于读取、处理、执行和翻译结构化文本或二进制文件的语法分析器生成器，广泛用于构建语言、工具和框架，通过语法描述规则，它能够生成一个可以遍历解析树的解析器</p><h2 id="词法" tabindex="-1">词法 <a class="header-anchor" href="#词法" aria-label="Permalink to &quot;词法&quot;">​</a></h2><div class="language-antlr vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">antlr</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>grammar SimpleExpr;</span></span>
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
<span class="line"><span>fragment WORD : &#39;_&#39; | LETTER | NUMBER ;</span></span></code></pre></div><h2 id="语法" tabindex="-1">语法 <a class="header-anchor" href="#语法" aria-label="Permalink to &quot;语法&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/**</span></span>
<span class="line"><span> * Simple statically-typed programming language with functions and variables</span></span>
<span class="line"><span> * taken from the &quot;Language Implementation Patterns&quot; book.</span></span>
<span class="line"><span> *</span></span>
<span class="line"><span> * @see http://media.pragprog.com/titles/tpantlr2/code/examples/Cymbol.g4</span></span>
<span class="line"><span> */</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span>
<span class="line"><span>grammar Cymbol;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@header {</span></span>
<span class="line"><span>package cymbol;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span>
<span class="line"><span>prog : (varDecl | functionDecl)* EOF ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>varDecl : type ID (&#39;=&#39; expr)? &#39;;&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>type : &#39;int&#39; | &#39;double&#39; | &#39;void&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>functionDecl : type ID &#39;(&#39; formalParameters? &#39;)&#39; block ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// fp: int x</span></span>
<span class="line"><span>// fp(, fp)(, fp)(, fp), fp, fp</span></span>
<span class="line"><span>// fps : fps &#39;,&#39; fp</span></span>
<span class="line"><span>//     | fp</span></span>
<span class="line"><span>//     ;</span></span>
<span class="line"><span>formalParameters : formalParameter (&#39;,&#39; formalParameter)* ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>formalParameter : type ID ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>block : &#39;{&#39; stat* &#39;}&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>stat : block    # BlockStat</span></span>
<span class="line"><span>     | varDecl  # VarDeclStat</span></span>
<span class="line"><span>     | &#39;if&#39; expr &#39;then&#39; stat (&#39;else&#39; stat)? # IfStat</span></span>
<span class="line"><span>     | &#39;return&#39; expr? &#39;;&#39;   # ReturnStat</span></span>
<span class="line"><span>     | expr &#39;=&#39; expr &#39;;&#39;    # AssignStat</span></span>
<span class="line"><span>     | expr &#39;;&#39; # ExprStat</span></span>
<span class="line"><span>     ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>expr: ID &#39;(&#39; exprList? &#39;)&#39;    # Call // function call</span></span>
<span class="line"><span>    | expr &#39;[&#39; expr &#39;]&#39;       # Index // array subscripts</span></span>
<span class="line"><span>    | op = &#39;-&#39; expr                # Negate // right association</span></span>
<span class="line"><span>    | op = &#39;!&#39; expr                # Not // right association</span></span>
<span class="line"><span>    | &lt;assoc = right&gt; expr &#39;^&#39; expr # Power</span></span>
<span class="line"><span>    | lhs = expr (op = &#39;*&#39; | op = &#39;/&#39;) rhs = expr     # MultDiv</span></span>
<span class="line"><span>    | lhs = expr (op = &#39;+&#39; | op = &#39;-&#39;) rhs = expr     # AddSub</span></span>
<span class="line"><span>    | lhs = expr (op = &#39;==&#39; | op = &#39;!=&#39;) rhs = expr  # EQNE</span></span>
<span class="line"><span>    | &#39;(&#39; expr &#39;)&#39;            # Parens</span></span>
<span class="line"><span>    | ID                      # Id</span></span>
<span class="line"><span>    | INT                     # Int</span></span>
<span class="line"><span>    ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//stat : block</span></span>
<span class="line"><span>//     | varDecl</span></span>
<span class="line"><span>//     | &#39;if&#39; expr &#39;then&#39; stat (&#39;else&#39; stat)?</span></span>
<span class="line"><span>//     | &#39;return&#39; expr? &#39;;&#39;</span></span>
<span class="line"><span>//     | expr &#39;=&#39; expr &#39;;&#39;</span></span>
<span class="line"><span>//     | expr &#39;;&#39;</span></span>
<span class="line"><span>//     ;</span></span>
<span class="line"><span>//</span></span>
<span class="line"><span>//expr: ID &#39;(&#39; exprList? &#39;)&#39;  // function call</span></span>
<span class="line"><span>//    | expr &#39;[&#39; expr &#39;]&#39;     // subscript a[i]; a[i][j]</span></span>
<span class="line"><span>//    | &#39;-&#39; expr</span></span>
<span class="line"><span>//    | &#39;!&#39; expr</span></span>
<span class="line"><span>//    | &lt;assoc = right&gt; expr &#39;^&#39; expr</span></span>
<span class="line"><span>//    | expr (&#39;*&#39; | &#39;/&#39;) expr</span></span>
<span class="line"><span>//    | expr (&#39;+&#39; | &#39;-&#39;) expr</span></span>
<span class="line"><span>//    | expr (&#39;==&#39; | &#39;!=&#39;) expr</span></span>
<span class="line"><span>//    | &#39;(&#39; expr &#39;)&#39;</span></span>
<span class="line"><span>//    | ID</span></span>
<span class="line"><span>//    | INT</span></span>
<span class="line"><span>//    ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>exprList : expr (&#39;,&#39; expr)* ;</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span>
<span class="line"><span>// You can use &quot;Alt + Insert&quot; to automatically generate</span></span>
<span class="line"><span>// the following lexer rules for literals in the grammar above.</span></span>
<span class="line"><span>// Remember to check and modify them if necessary.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>SEMI : &#39;;&#39; ;</span></span>
<span class="line"><span>COMMA : &#39;,&#39; ;</span></span>
<span class="line"><span>LPAREN : &#39;(&#39; ;</span></span>
<span class="line"><span>RPAREN : &#39;)&#39; ;</span></span>
<span class="line"><span>LBRACK : &#39;[&#39; ;</span></span>
<span class="line"><span>RBRACK : &#39;]&#39; ;</span></span>
<span class="line"><span>LBRACE : &#39;{&#39; ;</span></span>
<span class="line"><span>RBRACE : &#39;}&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>IF : &#39;if&#39; ;</span></span>
<span class="line"><span>THEN : &#39;then&#39; ;</span></span>
<span class="line"><span>ELSE : &#39;else&#39; ;</span></span>
<span class="line"><span>RETURN : &#39;return&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>INTTYPE : &#39;int&#39; ;</span></span>
<span class="line"><span>DOUBLETYPE : &#39;double&#39; ;</span></span>
<span class="line"><span>VOIDTYPE : &#39;void&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ADD : &#39;+&#39; ;</span></span>
<span class="line"><span>SUB : &#39;-&#39; ;</span></span>
<span class="line"><span>MUL : &#39;*&#39; ;</span></span>
<span class="line"><span>DIV : &#39;/&#39; ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>EQ : &#39;=&#39; ;</span></span>
<span class="line"><span>NE : &#39;!=&#39; ;</span></span>
<span class="line"><span>EE : &#39;==&#39; ;</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span>
<span class="line"><span>WS  : [ \\t\\n\\r]+ -&gt; skip ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ID : LETTER (LETTER | DIGIT)* ;</span></span>
<span class="line"><span>INT : DIGIT+ ;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>fragment LETTER : [a-zA-Z] ;</span></span>
<span class="line"><span>fragment DIGIT : [0-9] ;</span></span>
<span class="line"><span>////////////////////////////////////////////</span></span></code></pre></div><h2 id="生成分析器" tabindex="-1">生成分析器 <a class="header-anchor" href="#生成分析器" aria-label="Permalink to &quot;生成分析器&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">antlr4</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -Dlanguage=Go</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Hello.g4</span></span></code></pre></div>`,8)]))}const g=n(e,[["render",i]]);export{d as __pageData,g as default};
