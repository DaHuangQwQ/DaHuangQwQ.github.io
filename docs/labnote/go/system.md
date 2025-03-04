# 系统设计

## 短链系统

- 生成过程
    - 分布式 ID 生成（分库分表）： 
        - 集中式发号器：
            - 批量取
            - 预先取
        - 服务本身作为雪花算法 ID
            - 唯一的难点就是要给服务节点分配机器 ID 号：最简单就是配置文件
            - 走 Redis 就是很多公司用的
    - 一个长链：
        - 有多个短链：用在没必要去重的情况下
        - 只有一个短链
            - Redis 反向映射关系（长链到短链），保证在一段时间内不会重复生成就可以。（Redis 使用独立集群）
    - 具有有效期的短链，归档减少数据量
      - 特定业务，我会监听事件，然后删除短链
      - 每天归档，根据有效期挪走，设置一个标记位
    - 分库分表设计
      - 相当于按照日期分了: 
        - 64 位数字 <=> 62 进制的编码
        - 64 位中的 41 比特是时间戳 => 它的创建时间
      - 按照 ID 哈希分：
    - 生成限流，几千
- 访问过程
   - 本地缓存 + Redis 缓存
     - 前缀树 手搓 本地缓存，提高内存使用率
     - 结合哈希类负载均衡算法 + 本地缓存
     - 提前加载到本地缓存，永不过期
       - 只加载热点 => 从访问日志捞过来
       - 大博主的短链
   - 存在性检测：
     - 短链 => 分布式 ID，你就可以做初步检测了。这一步就能挡住绝大多数的错误短链
       - 时间范围
       - 机器 ID 不对的话的也不对
     - 布隆过滤器：
       - 分 key 布隆过滤器，每个月一个布隆过滤器 => 每个月的数据，我是不是只需要这个月的表扫一遍；
- 多域名的短链系统
    - 通过域名来分发到多个不同的集群，实现超高并发的最外层的流量分发
- 服务治理
    - 隔离：读服务、写服务分离（客户端负载均衡 + 注册中心）
    - 降级：
      - 如果要是资源不足，可以直接拒绝写请求
      - Redis 缓存或者 MySQL 崩溃，都可以尝试继续服务
      - 快速失败的降级策略：最多读到 Redis。
      - singleflight
- 冷热分离（可以考虑）：读写集群分离，高性价比
    - 近期生成的就是热的（本地缓存 + Redis + MySQL），应该确保至少在 Redis 里面就能找到，使用独立的集群
    - 不远不近的就是温的（Redis），尽量放 Redis 里面，可使用独立的集群
    - 生成很久的就是冷的，直接走 MySQL，做好限流
- OpenRestry（正在调研要不要转到 OpenRestry上）