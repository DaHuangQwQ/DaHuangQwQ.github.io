# 主动队列管理

路由器通过一种通常叫做_主动队列管理_ (Active Queue Management，AQM)的方法参与拥塞控制。AQM 本质是一种拥塞规避方法，即使与 Control-Based 的算法例如 TCP Reno 一起工作，也是如此。

虽然更改路由器行为从来不是互联网引入新功能的首选方式，但是对于拥塞控制来说，人们普遍同意路由器处于检测拥塞发生的理想位置——因为正是路由器的队列被填满导致了拥塞。但对于什么是最佳算法人们并没有达成一致意见，本章描述了两种经典机制，并总结了一下业界的现状。

## DECbit

## Random Early Detection

## Controlled Delay

## Explicit Congestion Notification

## Ingress/Egress Queue

