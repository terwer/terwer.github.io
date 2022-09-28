(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{421:function(t,a,v){"use strict";v.r(a);var r=v(8),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("本文分析了分布式架构应用广泛的理论。")]),t._v(" "),a("h1",{attrs:{id:"分布式架构理论"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式架构理论"}},[t._v("#")]),t._v(" 分布式架构理论")]),t._v(" "),a("blockquote",[a("p",[t._v("2022/04/6 校对完成")]),t._v(" "),a("p",[t._v("文章更新历史")]),t._v(" "),a("p",[t._v("2022/04/02 初稿。")])]),t._v(" "),a("h2",{attrs:{id:"分布式架构介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式架构介绍"}},[t._v("#")]),t._v(" 分布式架构介绍")]),t._v(" "),a("h3",{attrs:{id:"什么是分布式系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是分布式系统"}},[t._v("#")]),t._v(" 什么是分布式系统")]),t._v(" "),a("p",[t._v("分布式系统是一个硬件或者软件分布在不同的网络计算机上，彼此之间仅仅通过消息传递通信和协调的系统。")]),t._v(" "),a("p",[t._v("通俗的理解，分布式系统是，一个业务分拆成多个子业务，分布在不同的服务器节点，共同构成的服务器系统成为分布式系统。")]),t._v(" "),a("p",[t._v("同一个分布式系统中的服务器节点在空间部署上是可以随意分布的，服务器可能放在不同分机柜中，也可能放在不同不同的机房中，深圳分布在不同的城市。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314224421105.png",alt:"image-20220314224421105"}})]),t._v(" "),a("h3",{attrs:{id:"分布式与集群的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式与集群的区别"}},[t._v("#")]),t._v(" 分布式与集群的区别")]),t._v(" "),a("p",[t._v("集群：多个服务器做同一件事情")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314224722066.png",alt:"image-20220314224722066"}})]),t._v(" "),a("p",[t._v("分布式：多个服务器做不同的事情")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314225045381.png",alt:"image-20220314225045381"}})]),t._v(" "),a("h3",{attrs:{id:"分布式系统的特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统的特性"}},[t._v("#")]),t._v(" 分布式系统的特性")]),t._v(" "),a("p",[t._v("1、分布性")]),t._v(" "),a("p",[t._v("空间中可以随机分布。这些计算机可以分布在不同机房，不同城市，甚至是不同国家。")]),t._v(" "),a("p",[t._v("2、对等性")]),t._v(" "),a("p",[t._v("分布式系统中的计算机没有主/从之分，组成分布式的所有节点都是对等的。")]),t._v(" "),a("p",[t._v("3、并发性")]),t._v(" "),a("p",[t._v("同一个分布式系统中的多个节点，可能会并发的操作一些共享的资源，例如数据库或者分布式存储。")]),t._v(" "),a("p",[t._v("4、缺乏全局时钟")]),t._v(" "),a("p",[t._v("由于各个计算机依赖交换信息进行通信，很难定义两件事件的先后顺序，缺乏全局时钟控制序列。")]),t._v(" "),a("p",[t._v("5、故障总会发生")]),t._v(" "),a("p",[t._v("组成分布式系统分计算机，都有可能在某一时间崩掉。分的计算机越多，崩的几率越大。如果考虑设计程序时的故障，则故障的概率会大大的增加。")]),t._v(" "),a("p",[t._v("6、处理单点故障")]),t._v(" "),a("p",[t._v("单点SPoF（Single Point of Failure）：某个角色或者功能只有某一台计算机在支撑，在这台计算机出现的故障叫做单点故障。")]),t._v(" "),a("h3",{attrs:{id:"分布式系统面临的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分布式系统面临的问题"}},[t._v("#")]),t._v(" 分布式系统面临的问题")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("通信异常")]),t._v(" "),a("p",[t._v("网络本身不可靠，因此每次通信都会面临网络不可用的风险（光纤、路由器、DNS等硬件系统的不可用），都会导致分布上系统无法顺利进行一次网络通信。即使分布式各个节点直接的网络能够进行通信，延迟也会大于单机操作，存在巨大的时延，这样会影响消息的收发，消息丢失和消息延迟变的很普遍。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314231834864.png",alt:"image-20220314231834864"}})]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("p",[t._v("网络分区")]),t._v(" "),a("p",[t._v("网络中出现了网络不连接，但是各个系统之间的子网链接正常，从而导致网络环境被切割成若干个孤立的区域，分布式系统会出现局部小集群。极端情况下，小集群会完成原本需要整个分布式系统才能完成的任务。包括事务的处理，这对分布式的一致性带来了很大的挑战。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314231952023.png",alt:"image-20220314231952023"}})]),t._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[t._v("节点故障\n指的是分布式系统中节点出现宕机，每个节点又有可能出现故障或者僵死，并且经常发生。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314232419799.png",alt:"image-20220314232419799"}})]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("三态")]),t._v(" "),a("p",[t._v("分布式系统中每一次请求都存在三态，即：成功、失败和超时。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314232625668.png",alt:"image-20220314232625668"}})]),t._v(" "),a("ol",{attrs:{start:"5"}},[a("li",[a("p",[t._v("重发")]),t._v(" "),a("p",[t._v("分布式系统在调用是可能会发生 "),a("code",[t._v("失败")]),t._v(" 和 "),a("code",[t._v("超时")]),t._v(" ，这时需要重新发起调用。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314232852790.png",alt:"image-20220314232852790"}})]),t._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[a("p",[t._v("幂等")]),t._v(" "),a("p",[t._v("一次或者多次请求同一个资源本身应该有相同的结果（网络超时等问题除外）。即任意多次执行对资源本身产生的影响均与第一次执行的影响相同。")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314233421353.png",alt:"image-20220314233421353"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314233522102.png",alt:"image-20220314233522102"}}),t._v(" "),a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220314233559509.png",alt:"image-20220314233559509"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);