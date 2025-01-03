# sidecar

sidecar 是一个云原生的概念，是指将核心功能（一般是指业务）和非核心功能（支撑业务的功能）分离的模式，并且一般来说 sidecar 本身也是一个独立部署的进程。

现在有很多场景都使用 sidecar 来解决。比如说常见的服务治理的 sidecar，也就是所谓 service mesh，本质上就是将服务治理这些关注点挪出去了独立部署。

sidecar 的优点有很多：

- **职责分离**：应用可以专注处理业务，而剩下的事情就交给 sidecar 去处理。最为关键的是，这样团队也可以分成两个，搞业务的专心搞业务，搞技术的专心搞技术；
- **提高可扩展性**：sidecar 是可以不断增加的，而不会对已有 sidecar 造成影响;
- **独立性**：sidecar 和业务互不干扰，不同的 sidecar 之间也互不干扰，这样它们都可以独立升级等；
