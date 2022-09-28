(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{450:function(e,v,_){"use strict";_.r(v);var o=_(8),r=Object(o.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("blockquote",[v("p",[v("strong",[e._v("文章更新历史")])]),e._v(" "),v("p",[e._v("2022/05/05 feat:初稿。")])]),e._v(" "),v("h1",{attrs:{id:"分布式系统定义及面临的问题以及zookeeper的基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统定义及面临的问题以及zookeeper的基本概念"}},[e._v("#")]),e._v(" 分布式系统定义及面临的问题以及Zookeeper的基本概念")]),e._v(" "),v("h2",{attrs:{id:"分布式系统面临的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统面临的问题"}},[e._v("#")]),e._v(" 分布式系统面临的问题")]),e._v(" "),v("p",[v("code",[e._v("Zookeeper")]),e._v(" 最主要的应用场景是，作为分布式系统的分布式协同服务。")]),e._v(" "),v("p",[e._v("分布式系统可以定义为：")]),e._v(" "),v("p",[e._v("分布式系统是同时跨越多个物理主机，独立运行的多个软件组成的系统。")]),e._v(" "),v("p",[e._v("每个服务器的算力是有限的，但是，通过分布式系统，由 n 个服务器组成的集群，算力是可以无限扩张的。")]),e._v(" "),v("p",[v("strong",[e._v("优点很明显，人多力量大，并且可以相互备份。")])]),e._v(" "),v("p",[e._v("缺点也很明显，以 5 个人作为项目组开发项目为例，会面临如下问题：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220505180348354.png",alt:"image-20220505180348354"}})]),e._v(" "),v("p",[e._v("在现实中，我们可以认为协调，出错了也可以人工补偿。在计算机世界，这样行不通，每一步都必须严谨。因此，分布式系统必须合理解决上述问题。")]),e._v(" "),v("p",[v("strong",[e._v("分布式协调的工作就是通过某种方式，让每个节点的信息进行同步和共享。")]),e._v(" 这依赖于服务器进程之间的通信，通信方式主要有两种：")]),e._v(" "),v("ul",[v("li",[v("p",[e._v("通过网络进行通信")]),e._v(" "),v("p",[e._v("类似于现实中任务通过邮件的传递。")])]),e._v(" "),v("li",[v("p",[e._v("通过共享存储")]),e._v(" "),v("p",[e._v("类似于 svn 共享任务分配表。更好的方法是，svn 有变化时，通过邮件通知。整个过程如下：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220505183542727.png",alt:"image-20220505183542727"}})])])]),e._v(" "),v("h2",{attrs:{id:"zookeeper-如何解决分布式系统面临的问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-如何解决分布式系统面临的问题"}},[e._v("#")]),e._v(" Zookeeper 如何解决分布式系统面临的问题")]),e._v(" "),v("p",[v("strong",[e._v("Zookeeper 对分布式系统的协调，使用的是第二种方式，共享存储。")]),e._v(" 分布式应用也需要和存储进行网络通信。")]),e._v(" "),v("p",[e._v("Zookeeper 实现分布式协同的原理，类似于项目组通过 svn 同步工作任务。")]),e._v(" "),v("ul",[v("li",[e._v("Zookeeper 类似 svn，存储了任务的分配、完成情况等共享信息。")]),e._v(" "),v("li",[e._v("每个分布式应用的节点类似于组员，订阅这些共享信息。")]),e._v(" "),v("li",[e._v("当主节点（组 leader），对某个从节点的工作信息发生改变时，相关订阅的从节点会受到 Zookeeper 通知，取得最新的任务分配。")]),e._v(" "),v("li",[e._v("从节点完成工作后，将完成情况存储到 Zookeeper。")]),e._v(" "),v("li",[e._v("主节点订阅了任务的完成情况信息，所以将得到 Zookeeper 的完工通知。")])]),e._v(" "),v("p",[e._v("如图，svn 和邮件系统合二为一，以 Zookeeper 代替。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220505184704848.png",alt:"image-20220505184704848"}})]),e._v(" "),v("p",[e._v("备注：Slave 节点想要获取 Zookeeper 的更新通知，需要事先在关心的节点上设置观察点。")]),e._v(" "),v("p",[e._v("分布式系统的问题主要来自于共享。")]),e._v(" "),v("p",[v("strong",[e._v("Zookeeper 解决协同问题的关键是，保证分布式系统信息的一致性。")])]),e._v(" "),v("h2",{attrs:{id:"zookeeper-的基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的基本概念"}},[e._v("#")]),e._v(" Zookeeper 的基本概念")]),e._v(" "),v("h3",{attrs:{id:"zookeeper概述"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper概述"}},[e._v("#")]),e._v(" Zookeeper概述")]),e._v(" "),v("p",[e._v("Zookeeper 是一个分布式的协调服务，他的设计目标是将复杂易出错的分布式服务封装起来，构成可操作的原语集，以简单的接口提供给用户 使用。")]),e._v(" "),v("p",[v("strong",[e._v("Zookeeper 是一个典型的分布式数据一致性解决方案")]),e._v("，分布式应用可以基于塔实现发布订/阅，负载均衡、命名服务、集群管理、分布式锁、分布式队列等功能。")]),e._v(" "),v("h3",{attrs:{id:"基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[e._v("#")]),e._v(" 基本概念")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("集群角色")]),e._v(" "),v("p",[e._v("分布式中最典型的集群是 "),v("code",[e._v("Master/Slave")]),e._v(" 模式，通常把能够处理写操作的机器叫 "),v("code",[e._v("Master")]),e._v(" 机器，把通过异步复制获取最新数据，并提供读服务的机器成为 Slave 机器。")]),e._v(" "),v("p",[e._v("Zookeeper 没有使用这一的模式，而是引入了 Leader 、Follower 和 Observer 三种角色。")]),e._v(" "),v("p",[e._v("Zookeeper 中的所有机器通过 leader 选举选举 leader 机器，leader 服务器对外提供读和写服务，其他机器都能提供读服务。")]),e._v(" "),v("p",[e._v("唯一的区别在与，Observer 不参与选举过程，不参与写操作的过半写成功策略，因此 Observer 可以在不影响写性能的情况下提升集群的性能。")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220525224350349.png",alt:"image-20220525224350349"}})])]),e._v(" "),v("li",[v("p",[e._v("会话（Session）")]),e._v(" "),v("p",[e._v("Session 指的是客户端会话，"),v("code",[e._v("一个客户端连接指的是客户端和服务端之间的一个 TCP 长连接")]),e._v("，Zookeeper对外的默认端口是 "),v("code",[e._v("2181")]),e._v(" 。")]),e._v(" "),v("p",[e._v("客户端启动时，首先会与服务器建立一个TCP连接，从第一次连接建立开始，客户端的生命周期就开始了，通过这个连接，客户端能够心跳检测与服务器保持有效会话，也能够向Zookeeper服务器发送请求并接收响应，同时还能够通过该连接来接收来自服务器的Watch事件通知。")])]),e._v(" "),v("li",[v("p",[e._v("数据节点（ZNode）")]),e._v(" "),v("p",[e._v("分布式中分“节点”通常指的是集群中的某一台机器。")]),e._v(" "),v("p",[e._v("但是，Zookeeper中的节点分为两类：")]),e._v(" "),v("ul",[v("li",[e._v("第一类是指构成集群的机器，我们称之为"),v("strong",[e._v("机器节点")]),e._v("。")]),e._v(" "),v("li",[e._v("第二类指数据模型中的"),v("strong",[e._v("数据单元")]),e._v("，称为数据节点，即ZNode。")])]),e._v(" "),v("p",[e._v("Zookeeper将所有数据存在内存中，数据模型是一棵树（ZNode Tree）。由斜杠（/）进行分割的路径，就是一个ZNode。例如/app/path1。")]),e._v(" "),v("p",[e._v("每个ZNode上都会保存自己的数据内容，同时还会保存一系列的属性信息。")])]),e._v(" "),v("li",[v("p",[e._v("版本")]),e._v(" "),v("p",[e._v("每个ZNode，Zookeeper都会为其维护一个叫Stat的数据结构，Stat记录了这个ZNode的三个版本，分别是version（当前ZNode的版本）、cversion（当前ZNode子节点的版本）、zversion（当前ZNode的ACL版本）。")])]),e._v(" "),v("li",[v("p",[e._v("Wacher（事件监听器）")]),e._v(" "),v("p",[e._v("Watcher是指事件监听器，是Zookeeper的一个重要特性。")]),e._v(" "),v("p",[e._v("Zookeeper允许用户在指定节点上注册一些Watcher，并且在特定事件触发的时候，Zookeeper服务端会将事件通知到感兴趣的客户端，该机制是Zookeeper实现分布式协调的重要特性。")])]),e._v(" "),v("li",[v("p",[e._v("ACL")]),e._v(" "),v("p",[e._v("Zookeeper使用ACL（Access Control Lists）进行权限控制，其定义了一下五种权限，")]),e._v(" "),v("p",[e._v("CREATE：创建子节点的权限。")]),e._v(" "),v("p",[e._v("READ：获取节点数据和节点列表的权限。")]),e._v(" "),v("p",[e._v("WRITE：更新节点数据的权限。")]),e._v(" "),v("p",[e._v("DELETE：删除子节点的权限。")]),e._v(" "),v("p",[e._v("ADMIN：设置节点ACL的权限。")]),e._v(" "),v("p",[e._v("其中，CREATE 和 DELETE 都是针对子节点的权限控制。")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);