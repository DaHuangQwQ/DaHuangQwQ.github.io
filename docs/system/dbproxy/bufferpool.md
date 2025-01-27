# Buffer Pool

简单来说，就是如果线程需要一个 buffer 的时候，并不是只拿够当下使用的。而是拿一块比较大的 buffer，而后线程内部自己切割这个 buffer，每次使用的时候只使用其中一小块。等整个 buffer 全部用完的时候，再去 buffer pool 里面取一块新的。

反过来，如果整个 buffer 都没有再被使用了，就归还给 buffer pool。

我还借鉴这种根据对象大小来分类进行内存管理的思路设计过一个 buffer pool。

也就是整个 buffer pool 里面的 buffer 大小分成了不同的级别，而后每次根据的需要的 buffer 大小，从最接近需求大小的级别里面找一个 buffer 出去。

这样可以充分利用 buffer 的内存使用率，并且规避 buffer pool 经常带来的 buffer 扩容以至于在运行一段时间之后，整个 buffer pool 里面的全是巨无霸的 buffer。
