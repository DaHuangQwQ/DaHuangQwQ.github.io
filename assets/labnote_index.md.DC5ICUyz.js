import{_ as e,c as o,o as i,V as l}from"./chunks/framework.WykxUCM3.js";const f=JSON.parse('{"title":"转 go 语言的学习之路","description":"","frontmatter":{},"headers":[],"relativePath":"labnote/index.md","filePath":"labnote/index.md"}'),t={name:"labnote/index.md"},a=l('<h1 id="转-go-语言的学习之路" tabindex="-1">转 go 语言的学习之路 <a class="header-anchor" href="#转-go-语言的学习之路" aria-label="Permalink to &quot;转 go 语言的学习之路&quot;">​</a></h1><h2 id="与其他语言比较" tabindex="-1">与其他语言比较 <a class="header-anchor" href="#与其他语言比较" aria-label="Permalink to &quot;与其他语言比较&quot;">​</a></h2><ul><li>go 语言非常类似于 c 语言</li><li>for 循环的迭代变量都是共享地址的</li><li>go 的数组功能很弱</li><li>go 的切片是共享地址的</li><li>go 有类型推断，但是没有自动类型转换</li><li>go 的范型太弱</li><li>语法简单，摒弃了⼀些复杂的特性，强调代码的可读性，支持轻量级线程（goroutine）和通信（channel），通俗的讲就是尽量避免使用系统调用，减少切换上下文的开销</li><li>函数式编程，如责任链模式和其他语言不太常见的 option、builder 模式</li><li>错误处理，Go 中的错误是普通的值，是实现了 error 接⼝的类型。Go 的错误处理机制不会引⼊额外的控制流程（异常栈的构建和查找等）</li><li>Go没有类的概念，⽽是通过结构体（struct）组合和接⼝（interface）来实现⾯向对象的特性</li><li>go 缺乏 SPI（service provider interface）机制与动态生成新的类型的机制，导致很多特性依赖于代码生成技术，但是带来了代码易读</li><li>面试难点：内存分配 垃圾回收 GMP调度 并发编程 内置类型的实现原理</li></ul><h2 id="go语言并发模型" tabindex="-1"><strong>Go</strong>语⾔并发模型 <a class="header-anchor" href="#go语言并发模型" aria-label="Permalink to &quot;**Go**语⾔并发模型&quot;">​</a></h2><ul><li>Goroutines 是 Go 中的轻量级线程，由 Go runtime 管理。与传统线程相⽐，goroutines的创建和销毁开销很⼩，与传统的多线程编程相⽐，使⽤ goroutines 不需要开发者显式地进⾏线程的创建、销毁和同步。Go runtime 会⾃动处理这些事务</li><li>Goroutines 之间的通信通过 channel 实现，提供了⼀种安全、同步的⽅式</li><li>多路复⽤： select 语句允许在多个通道操作中选择⼀个执⾏。这种⽅式可以有效地处理多个通道的并发操作，避免了阻塞</li></ul>',5),r=[a];function n(s,c,d,_,u,h){return i(),o("div",null,r)}const m=e(t,[["render",n]]);export{f as __pageData,m as default};
