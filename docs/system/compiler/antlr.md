# antlr

antlr 是ANother Tool for Language Recognition的缩写，它是一个强大的用于读取、处理、执行和翻译结构化文本或二进制文件的语法分析器生成器，广泛用于构建语言、工具和框架，通过语法描述规则，它能够生成一个可以遍历解析树的解析器

```antlr
grammar SimpleExpr;

@header {
package simpleexpr;
}

prog : stat* EOF ;

stat : expr ';'
     | ID '=' expr ';'
     | 'print' expr ';'
     ;

expr : expr ('*' | '/') expr
     | expr ('+' | '-') expr
     | '(' expr ')'
     | ID
     | INT
     | FLOAT
     ;

SEMI : ';' ;
ASSIGN : '=' ;
PRINT : 'print' ;
MUL : '*' ;
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;
LPAREN : '(' ;
RPAREN : ')' ;

ID : ('_' | LETTER) WORD* ;
INT : '0' | ('+' | '-')? [1-9]NUMBER* ;
FLOAT : INT '.' NUMBER*
      | '.' NUMBER+
      ;

SL_COMMENT : '//' .*? '\n' -> skip ;
SL_COMMENT2 : '//' (~'\n')* '\n' -> skip ;
DOCS_COMMENT : '/**' .*? '*/' -> skip ;
ML_COMMENT : '/*' .*? '*/' -> skip ;

WS : [ \t\r\n]+ -> skip ;

fragment LETTER : [a-zA-Z] ;
fragment NUMBER : [0-9] ;
fragment WORD : '_' | LETTER | NUMBER ;
```

## 生成分析器

```shell
antlr4 -Dlanguage=Go Hello.g4
```

