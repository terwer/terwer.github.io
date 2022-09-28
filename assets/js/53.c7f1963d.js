(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{410:function(e,o,r){"use strict";r.r(o);var t=r(8),l=Object(t.a)({},(function(){var e=this,o=e._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h4",{attrs:{id:"netty线程模型"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#netty线程模型"}},[e._v("#")]),e._v(" Netty线程模型")]),e._v(" "),o("p",[e._v("Netty的设计主要基于主从Reactor的多线程模式，并做了一定的改进。")]),e._v(" "),o("ol",[o("li",[o("p",[e._v("简单版Netty模型")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220419225802316.png",alt:"image-20220419225802316"}})]),e._v(" "),o("ul",[o("li",[e._v("BossGroup线程维护Selector，ServerSocketChannel注册到Selector上，只关注连接请求处理事件（主Reactor）")]),e._v(" "),o("li",[e._v("当接收到来自客户端的连接请求事件时，通过ServerSocketChannel的accept方法获得对应的SocketChannel，并封装成NIOSocketChannel注册到WorkerGroup中的Selector，每个Selector运行在一个线程中（从Selector）")]),e._v(" "),o("li",[e._v("当WorkerGroup中的Selector监听到对应的IO事件后，就调用对应的handler进行处理")])])]),e._v(" "),o("li",[o("p",[e._v("进阶版Netty模型")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220419231353965.png",alt:"image-20220419231353965"}})]),e._v(" "),o("ul",[o("li",[e._v("有两组线程池：BossGroup和WorkerGroup，BossGroup中的线程专门负责和客户端建立连接，WorkerGroup中的线程专门负责连接上的读写")]),e._v(" "),o("li",[e._v("BossGroup和WorkerGroup含有多个不断循环的执行事件处理的线程，每个线程包含一个Selector，用于监听注册在它上面的Channel")]),e._v(" "),o("li",[e._v("每个BossGroup中的线程循环执行以下三个步骤\n"),o("ul",[o("li",[e._v("轮询注册在其上的ServerSocketChannel的accept事件，OP_ACCEPT事件")]),e._v(" "),o("li",[e._v("处理accept事件，与客户端建立连接，生成一个NIOSocketChannel，并将其注册到WorkerGroup中某个线程的Selector上")]),e._v(" "),o("li",[e._v("以此循环处理任务队列中的下一个事件")])])]),e._v(" "),o("li",[e._v("每个WorkerGroup中的线程循环执行以下三个步骤：\n"),o("ul",[o("li",[e._v("轮询注册在其上的NIOSocketChannel的read/write事件，OP_READ/OP_WRITE事件")]),e._v(" "),o("li",[e._v("在对应的NIOSocketChannel上处理read/write事件")]),e._v(" "),o("li",[e._v("以此循环处理任务队列中的下一个事件")])])])])]),e._v(" "),o("li",[o("p",[e._v("详细版Netty模型")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220419233502608.png",alt:"image-20220419233502608"}})]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Netty抽象出两组线程池：BossGroup和WorkerGroup，也可以叫BossNioEventLoopGroup和WorkerNioEventLoopGroup。")]),e._v(" "),o("p",[e._v("每个线程池都有NioEventLoop线程。")]),e._v(" "),o("p",[e._v("BossGroup中的线程专门负责和客户端建立连接，WorkerGroup中的线程专门负责处理连接上的读写。")]),e._v(" "),o("p",[e._v("BossGroup和WorkerGroup的类型都是NioEventLoopGroup。")])]),e._v(" "),o("li",[o("p",[e._v("NioEventLoopGroup相当于一个事件循环组，这个组中含有多个事件循环，每个事件循环就是一个NioEventLoop。")])]),e._v(" "),o("li",[o("p",[e._v("NioEventLoop表示一个不断循环的执行事件处理的线程，每个NioEventLoop都包含一个Selector，用于监听注册在其上的socket连接（Channel）。")])]),e._v(" "),o("li",[o("p",[e._v("NioEventLoopGroup可以包含多个线程，即含有多个NioEventLoop。")])]),e._v(" "),o("li",[o("p",[e._v("每个BossNioEventLoop循环执行以下三个步骤")]),e._v(" "),o("ul",[o("li",[e._v("select：轮询注册在其上的ServerSocketChannel的accept事件，OP_ACCEPT事件")]),e._v(" "),o("li",[e._v("processSelectedKeys：处理accept事件，与客户端建立连接，生成一个NIOSocketChannel，并将其注册到WorkerNioEventLoop的Selector上")]),e._v(" "),o("li",[e._v("runAllTasks：以此循环处理任务队列中的其他任务")])])]),e._v(" "),o("li",[o("p",[e._v("每个WorkerNioEventLoop循环执行以下三个步骤")]),e._v(" "),o("ul",[o("li",[e._v("select：轮询注册在其上的NIOSocketChannel的read/write事件，OP_READ/OP_WRITE事件")]),e._v(" "),o("li",[e._v("processSelectedKeys：在对应的NIOSocketChannel上处理read/write事件")]),e._v(" "),o("li",[e._v("runAllTasks：以此循环处理任务队列中的其他任务")])])]),e._v(" "),o("li",[o("p",[e._v("在以上两个processSelectedKeys步骤中，会使用Pipline（管道），Pipline中引用了Channel。")]),e._v(" "),o("p",[e._v("通过Pipline可以获取对应的Channel，Pipline中维护了很多处理器（拦截处理器、过滤处理器、自定义处理器等）。")])])])])])])}),[],!1,null,null,null);o.default=l.exports}}]);