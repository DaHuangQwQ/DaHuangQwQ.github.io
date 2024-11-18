import{_ as l,c as i,o as e,V as o}from"./chunks/framework.WykxUCM3.js";const _=JSON.parse('{"title":"个人简介","description":"","frontmatter":{},"headers":[],"relativePath":"aboutme.md","filePath":"aboutme.md"}'),a={name:"aboutme.md"},t=o('<h1 id="个人简介" tabindex="-1">个人简介 <a class="header-anchor" href="#个人简介" aria-label="Permalink to &quot;个人简介&quot;">​</a></h1><p><strong>2016～2019</strong></p><ul><li>初中开始接触 c++ 编程，阅读 c++ primer plus 书籍</li></ul><p><strong>2019～2022</strong></p><ul><li>高中开始接触 nodejs 和 html css js 前端技术</li><li>高中接触过 UE4 开发</li></ul><p><strong>2022～2026</strong></p><ul><li>在一个大学学习「软件工程」专业</li><li>大一加入了一个工作室，叫 CEIT 工作室，度过了愉快的时光</li><li>2022年11月 被动学习算法知识</li><li>2023年1月 学习 vue 等前端框架技术 和 一些前端构建工具</li><li>2023年6月 尝试各种方向，对未来有些许的迷惘</li><li>2023年9月 开始主动学习算法知识</li><li>2024年1月 学习 南京大学 蒋炎岩老师的 「操作系统设计与实现」</li><li>2024年4月 学习「Mit6.824分布式系统」</li><li>2024年7月 学习 go 微服务研发，做了一个项目</li><li>2024年10月 学习 南京大学 魏恒峰老师的 「编译原理」（未完成）</li><li>2024年11月 手写 简易版 gin 和 gorm 框架</li><li>2024年12月 学习 云原生数据库代理 dbproxy 中间件 （未完成）</li></ul><p><strong>技术栈</strong></p><ul><li>Golang：熟练掌握 GO 语言编程，掌握 GO SOLID 设计理念，掌握 GO 运行时原理，掌握 GO 性能优化，熟练运用 GO 并发编程。了解 GMP 模型调度器、gc 垃圾回收、内存逃逸，熟练掌握 GO 的基本框架，如 GIN、GORM 等，能进行二次开发</li><li>多线程编程：熟悉互斥锁、读写锁、原子操作等高并发编程及性能优化</li><li>熟悉 IO 多路复用技术（select/poll/epoll）底层原理</li><li>熟悉 TCP/IP，UDP，HTTP/HTTPS，QUIC 等网络协议，熟悉 TCP 流量控制、拥塞控制</li><li>熟悉共识算法 Raft，了解分布式 CAP 理论以及分布式系统设计原理</li><li>MySQL：熟练掌握 MySQL，掌握 InnoDB 引擎，熟练掌握索引的使用。熟悉读写分离和分库分表架构，成功实施过数据迁移项目，确保数据一致性和系统稳定性</li><li>Redis：熟练掌握 Redis，掌握 Redis 高可用和高性能原理。能灵活运用 Redis 的数据结构，熟悉缓存模式，熟练解决缓存一致性、穿透、击穿和雪崩等问题，能熟练优化 Redis 性能</li><li>Kafka：熟练掌握 Kafka，掌握 Kafka 的底层原理。有 Kafka 的高并发使用经验，了解顺序消息、重复消费、消息积压、延时消息等问题的解决方案</li><li>Docker：熟练使用Docker进行容器化部署</li><li>Kubernetes：掌握K8S的基本概念，能够进行自动化部署、扩展和管理</li><li>设计和开发方法：熟悉领域驱动设计(DDD)、测试驱动开发(TDD)、事件驱动、和一些设计模式</li></ul><h2 id="webook" tabindex="-1">webook <a class="header-anchor" href="#webook" aria-label="Permalink to &quot;webook&quot;">​</a></h2><p><strong>框架技术</strong></p><p>Gin + Gorm + Kafka + Mysql + Redis + MongoDB + GRPC</p><p><strong>项目描述</strong></p><ul><li>用户社交博客论坛，采用Gin实现用户注册，登录和发帖功能，支持阅读、点赞和收藏</li><li>使用JWT实现长短 Token 和 OAuth2 原理实现了注册手机号密码和微信扫码注册登录，提升安全性和用户体验</li><li>使用Kafka消息队列改造了阅读计数功能，采用批量消费，提升性能和解藕，一定程度解决了消息积压的问题</li><li>通过Redis的ZSet实现生成热榜和点赞排行榜，使用基于mysql实现的分布式任务调度系统定期调度热榜数据，确保时效性，再使用缓存预加载到本地缓存来实现高性能</li><li>后期将单体应用拆分为微服务，使用gRPC进行高效通信，实现服务熔断、限流、降级，使用 etcd 实现服务注册，发现，配置中心和负载均衡机制，提升系统的可扩展性和可靠性</li><li>采用不停机数据迁移策略确保高可用性，实现了 canal 异步的方式来数据校验</li><li>采用了Prometheus，Zipkin，Grafana，ELK进行监控和报警，提高系统可观测性</li><li>实现了较高性能和高可用性打赏支付系统，实现了打赏-支付-记账三者对账机制和记账的幂等性</li><li>采用了ElasticSearch 实现高可用的搜索、标签服务</li><li>采用了推拉混合模型实现 feed 流，利用业务特征来优化写扩散和读扩散</li><li>采用了 openIM 系统，并使用 canal 监听 binlog 来同步用户信息</li></ul><h2 id="云原生数据库代理" tabindex="-1">云原生数据库代理 <a class="header-anchor" href="#云原生数据库代理" aria-label="Permalink to &quot;云原生数据库代理&quot;">​</a></h2><p><strong>项目特点</strong></p><ul><li>功能丰富：支持分库分表、读写分离。分库分表支持分布式事务、复杂查询，在读写分离中支持多种负载均衡策略，以及提供了容错功能；</li><li>多种形态：支持独立部署为数据库代理，也支持以 sidecar 形态部署，并且封装成了 Go driver 的 SDK 形态，可以在 Go 应用中直接使用；</li><li>无缝切换：实现了 MySQL 协议，伪装成了一个普通的 MySQL 数据库，所有的应用都可以无缝切换而不需要修改任何代码；</li><li>可插拔：具体的功能点都是通过插件机制接入的，用户也可以用同样插件机制接入自己自定义的功能；</li><li>全链路：支持在数据库查询中传递链路数据，进而支持全链路追踪，AB 测试等；</li></ul><p><strong>项目贡献</strong></p><ul><li>负责项目的整体架构设计和核心功能实现；</li><li>设计并实现了 MySQL 协议、ANTLR4 、AST 解析、数据分片算法、分布式事务管理、读写分离、Go driver 接口实现等核心模块；</li><li>负责性能问题排查和优化；</li><li>编写了详细的项目文档和用户指南，帮助用户快速上手；</li><li>编写了详尽的测试，覆盖率超过 85%；</li></ul><h2 id="mit-6-824" tabindex="-1">Mit 6.824 <a class="header-anchor" href="#mit-6-824" aria-label="Permalink to &quot;Mit 6.824&quot;">​</a></h2><ul><li>使用 golang 实现了 MapReduce 分布式计算系统</li><li><strong>Raft 协议</strong>：实现基于 Log 状态机，领导人选举，心跳机制，日志复制的一致性分布式共识算法。</li><li><strong>分布式 KV Server 集群</strong>：在 Raft 基础上实现强一致性的分布式 KV Server 集群，保证集群在网络不可靠环境，服务器崩溃重启等情况下仍然能提供一致性的数据读写服务</li><li><strong>日志快速回退</strong>：节点宕机重启时会产生大量 RPC 造成网络压力，因此使用日志快速回退优化，加快集群同步速度</li><li><strong>快照压缩</strong>：日志增大造成内存开销过大，减慢节点同步速度，因此加入快照用以进行日志压缩，减少内存开销，加快节点恢复速度</li><li>通过了该项目掌握了Zookeeper、CRAQ、Aurora的基本原理。并熟悉了线程间的同步与通信机制、多线程中对锁、RPC的使用</li></ul>',21),r=[t];function s(n,c,d,u,p,g){return e(),i("div",null,r)}const m=l(a,[["render",s]]);export{_ as __pageData,m as default};
