import{_ as o,c as r,j as e,a as l,o as u}from"./chunks/framework.BQmytedh.js";const i=JSON.parse('{"title":"Buffer Pool","description":"","frontmatter":{},"headers":[],"relativePath":"system/dbproxy/bufferpool.md","filePath":"system/dbproxy/bufferpool.md"}'),a={name:"system/dbproxy/bufferpool.md"};function t(p,f,b,s,n,d){return u(),r("div",null,f[0]||(f[0]=[e("h1",{id:"buffer-pool",tabindex:"-1"},[l("Buffer Pool "),e("a",{class:"header-anchor",href:"#buffer-pool","aria-label":'Permalink to "Buffer Pool"'},"​")],-1),e("p",null,"简单来说，就是如果线程需要一个 buffer 的时候，并不是只拿够当下使用的。而是拿一块比较大的 buffer，而后线程内部自己切割这个 buffer，每次使用的时候只使用其中一小块。等整个 buffer 全部用完的时候，再去 buffer pool 里面取一块新的。",-1),e("p",null,"反过来，如果整个 buffer 都没有再被使用了，就归还给 buffer pool。",-1),e("p",null,"我还借鉴这种根据对象大小来分类进行内存管理的思路设计过一个 buffer pool。",-1),e("p",null,"也就是整个 buffer pool 里面的 buffer 大小分成了不同的级别，而后每次根据的需要的 buffer 大小，从最接近需求大小的级别里面找一个 buffer 出去。",-1),e("p",null,"这样可以充分利用 buffer 的内存使用率，并且规避 buffer pool 经常带来的 buffer 扩容以至于在运行一段时间之后，整个 buffer pool 里面的全是巨无霸的 buffer。",-1)]))}const m=o(a,[["render",t]]);export{i as __pageData,m as default};
