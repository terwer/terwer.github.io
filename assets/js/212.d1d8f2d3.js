(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{567:function(a,t,n){"use strict";n.r(t);var s=n(8),e=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"zookeeper-的基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的基本使用"}},[a._v("#")]),a._v(" Zookeeper 的基本使用")]),a._v(" "),t("blockquote",[t("p",[a._v("文章更新历史")]),a._v(" "),t("p",[a._v("2022/06/03 feat:初稿。")])]),a._v(" "),t("h2",{attrs:{id:"zookeeper-系统模型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-系统模型"}},[a._v("#")]),a._v(" Zookeeper 系统模型")]),a._v(" "),t("h3",{attrs:{id:"zookeeper-的数据节点-znode"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的数据节点-znode"}},[a._v("#")]),a._v(" Zookeeper 的数据节点 ZNode")]),a._v(" "),t("p",[a._v("Zookeeper 中，保存数据信息的节点，成为 ZNode。")]),a._v(" "),t("p",[a._v("ZNode 是 Zookeeper 中的最小数据单位。ZNode 可以挂在子 ZNode，最终形成了 ZNode 树，成为 ZNode Tree。ZNode 采用了类似文件系统的层级树状结构进行管理。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ghproxy.com/https://raw.githubusercontent.com/terwer/upload/main/img/20220604223819.png",alt:"image-20220604223814769"}})]),a._v(" "),t("p",[a._v("Zookeeper 的节点路径类似与 Unix 的文件系统，由/开头，可以在节点写入数据，也可以创建子节点。")]),a._v(" "),t("h3",{attrs:{id:"znode-的类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#znode-的类型"}},[a._v("#")]),a._v(" ZNode 的类型")]),a._v(" "),t("p",[a._v("Zookeeper 的节点类型可分为三大类")]),a._v(" "),t("p",[a._v("持久性节点（Persistent）")]),a._v(" "),t("p",[a._v("临时性节点（Ephemeral）")]),a._v(" "),t("p",[a._v("顺序性节点（Sequiental）")]),a._v(" "),t("p",[a._v("在开发中，通常生成四种节点类型：持久性节点、持久顺序节点、临时节点、临时顺序节点。不同的节点会有不同的声明周期。")]),a._v(" "),t("p",[t("strong",[a._v("持久性节点")]),a._v("：是 Zookeeper 中最常见的节点类型，节点创建后会一直存在于服务器，直到删除操作主动删除。")]),a._v(" "),t("p",[t("strong",[a._v("持久顺序节点")]),a._v("：有顺序的持久节点，节点和持久节点一样，只是有顺序。顺序特性的实质是在创建节点的时候，会在节点后面加上一个数字后缀，代表节点的顺序。")]),a._v(" "),t("p",[t("strong",[a._v("临时节点")]),a._v("：会被自动清理掉的节点。生命周期和客户端会话绑定在一起，客户端会话结束，节点也会被删除。")]),a._v(" "),t("p",[a._v("与持久性节点不同，临时节点不能创建子节点。")]),a._v(" "),t("p",[t("strong",[a._v("临时顺序节点")]),a._v("：有顺序的临时节点，和持久顺序节点相同，在创建的时候会在名字后面加上数字后缀。")]),a._v(" "),t("h3",{attrs:{id:"事务-id"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#事务-id"}},[a._v("#")]),a._v(" 事务 ID")]),a._v(" "),t("p",[a._v("事务具有 ACID 的特性：即原子性（Atomic）、一致性（Consistency）、隔离性（Isolation）和持久性（Durability）。")]),a._v(" "),t("p",[a._v("在 Zookeeper 中，事务是指能够改变服务器状态的操作，也称之为事务操作或者更新操作。")]),a._v(" "),t("p",[a._v("对于每个事务操作，Zookeeper 都会分配一个全局唯一事务 ID，称为 "),t("strong",[a._v("ZXID")]),a._v("，通常是一个 64 位的数字。每一个 ZXID 对应一个事务操作，从 ZXID 可以间接识别 Zookeeper 处理更新操作请求的全局顺序。")]),a._v(" "),t("h3",{attrs:{id:"使用客户端连接-zookeeper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端连接-zookeeper"}},[a._v("#")]),a._v(" 使用客户端连接 Zookeeper")]),a._v(" "),t("p",[a._v("如果是 docker 版，先进入 shell")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://ghproxy.com/https://raw.githubusercontent.com/terwer/upload/main/img/20220702204843.png",alt:"image-20220702204837498"}}),a._v("。")]),a._v(" "),t("p",[a._v("连接 server")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("./zkCli.sh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-server")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("信息如下")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("root@zoo1:/apache-zookeeper-3.8.0-bin"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# cd bin")]),a._v("\nroot@zoo1:/apache-zookeeper-3.8.0-bin/bin"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ./zkCli.sh -server 127.0.0.1:2181")]),a._v("\nConnecting to "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,639 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:zookeeper.version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("3.8")]),a._v(".0-5a02a05eddb59aee6ac762f7ea82e92a68eb9c0f, built on "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-02-25 08:49 UTC\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,641 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:host.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("zoo1\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,641 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.0")]),a._v(".15\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,641 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.vendor"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Oracle Corporation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,641 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.home"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/local/openjdk-11\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,642 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.class.path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/zookeeper-server/target/classes:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/build/classes:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/zookeeper-server/target/lib/*.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/build/lib/*.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/zookeeper-prometheus-metrics-3.8.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/zookeeper-jute-3.8.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/zookeeper-3.8.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/snappy-java-1.1.7.7.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/slf4j-api-1.7.30.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/simpleclient_servlet-0.9.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/simpleclient_hotspot-0.9.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/simpleclient_common-0.9.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/simpleclient-0.9.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-transport-native-unix-common-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-transport-native-epoll-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-transport-classes-epoll-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-transport-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-tcnative-classes-2.0.48.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-tcnative-2.0.48.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-resolver-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-handler-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-common-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-codec-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/netty-buffer-4.1.73.Final.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/metrics-core-4.1.12.1.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/logback-core-1.2.10.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/logback-classic-1.2.10.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jline-2.14.6.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-util-ajax-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-util-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-servlet-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-server-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-security-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-io-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jetty-http-9.4.43.v20210629.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/javax.servlet-api-3.1.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jackson-databind-2.13.1.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jackson-core-2.13.1.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/jackson-annotations-2.13.1.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/commons-io-2.11.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/commons-cli-1.4.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/lib/audience-annotations-0.12.0.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/zookeeper-*.jar:/apache-zookeeper-3.8.0-bin/bin/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/zookeeper-server/src/main/resources/lib/*.jar:/conf:\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,642 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.library.path"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/usr/java/packages/lib:/usr/lib64:/lib64:/lib:/usr/lib\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,642 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.io.tmpdir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/tmp\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,642 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:java.compiler"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("NA"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,642 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("Linux\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.arch"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("amd64\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.version"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.10")]),a._v(".104-linuxkit\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:user.name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("root\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:user.home"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/root\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:user.dir"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/apache-zookeeper-3.8.0-bin/bin\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.memory.free"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("116MB\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,643 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.memory.max"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("256MB\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,644 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.Environment@98"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Client environment:os.memory.total"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("128MB\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,646 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.ZooKeeper@637"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Initiating client connection, "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("connectString")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181 "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sessionTimeout")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("watcher")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("org.apache.zookeeper.ZooKeeperMain"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$MyWatcher")]),a._v("@6ec8211c\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,651 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.c.X509Util@77"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Setting "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-D")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("jdk.tls.rejectClientInitiatedRenegotiation")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true to disable client-initiated TLS renegotiation\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,656 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.ClientCnxnSocket@239"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - jute.maxbuffer value is "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1048575")]),a._v(" Bytes\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,662 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main:o.a.z.ClientCnxn@1732"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - zookeeper.request.timeout value is "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(". feature "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false\nWelcome to ZooKeeper"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,675 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:127.0.0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main-SendThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":o.a.z.ClientCnxn"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SendThread")]),a._v("@1171"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Opening socket connection to server localhost/127.0.0.1:2181.\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,675 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:127.0.0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main-SendThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":o.a.z.ClientCnxn"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SendThread")]),a._v("@1173"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - SASL config status: Will not attempt to authenticate using SASL "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("unknown error"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,686 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:127.0.0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main-SendThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":o.a.z.ClientCnxn"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SendThread")]),a._v("@1005"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Socket connection established, initiating session, client: /127.0.0.1:49668, server: localhost/127.0.0.1:2181\nJLine support is enabled\n"),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v("-07-02 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v(":52:32,724 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("myid:127.0.0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - INFO  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("main-SendThread"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(":o.a.z.ClientCnxn"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$SendThread")]),a._v("@1444"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" - Session establishment complete on server localhost/127.0.0.1:2181, session "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("id")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" 0x100004a571a0000, negotiated "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("timeout")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30000")]),a._v("\n\nWATCHER::\n\nWatchedEvent state:SyncConnected type:None path:null\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("zk: "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("127.0")]),a._v(".0.1:2181"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("CONNECTED"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br"),t("span",{staticClass:"line-number"},[a._v("13")]),t("br"),t("span",{staticClass:"line-number"},[a._v("14")]),t("br"),t("span",{staticClass:"line-number"},[a._v("15")]),t("br"),t("span",{staticClass:"line-number"},[a._v("16")]),t("br"),t("span",{staticClass:"line-number"},[a._v("17")]),t("br"),t("span",{staticClass:"line-number"},[a._v("18")]),t("br"),t("span",{staticClass:"line-number"},[a._v("19")]),t("br"),t("span",{staticClass:"line-number"},[a._v("20")]),t("br"),t("span",{staticClass:"line-number"},[a._v("21")]),t("br"),t("span",{staticClass:"line-number"},[a._v("22")]),t("br"),t("span",{staticClass:"line-number"},[a._v("23")]),t("br"),t("span",{staticClass:"line-number"},[a._v("24")]),t("br"),t("span",{staticClass:"line-number"},[a._v("25")]),t("br"),t("span",{staticClass:"line-number"},[a._v("26")]),t("br"),t("span",{staticClass:"line-number"},[a._v("27")]),t("br"),t("span",{staticClass:"line-number"},[a._v("28")]),t("br"),t("span",{staticClass:"line-number"},[a._v("29")]),t("br"),t("span",{staticClass:"line-number"},[a._v("30")]),t("br"),t("span",{staticClass:"line-number"},[a._v("31")]),t("br"),t("span",{staticClass:"line-number"},[a._v("32")]),t("br"),t("span",{staticClass:"line-number"},[a._v("33")]),t("br"),t("span",{staticClass:"line-number"},[a._v("34")]),t("br"),t("span",{staticClass:"line-number"},[a._v("35")]),t("br"),t("span",{staticClass:"line-number"},[a._v("36")]),t("br")])]),t("p",[a._v("查看所有节点")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://ghproxy.com/https://raw.githubusercontent.com/terwer/upload/main/img/20220702205359.png",alt:"image-20220702205359400"}})]),a._v(" "),t("p",[a._v("查看某个节点")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" /zookeeper\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"znode-的状态信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#znode-的状态信息"}},[a._v("#")]),a._v(" ZNode 的状态信息")]),a._v(" "),t("p",[a._v("使用 "),t("code",[a._v("ls -s /zookeeper")]),a._v(" 代替 "),t("code",[a._v("ls2")])]),a._v(" "),t("p",[a._v("新版本已经没有 "),t("code",[a._v("ls2")]),a._v(" 了")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" /zookeeper\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://ghproxy.com/https://raw.githubusercontent.com/terwer/upload/main/img/20220702205638.png",alt:"image-20220702205637988"}})]),a._v(" "),t("p",[a._v("参考：")]),a._v(" "),t("p",[t("a",{attrs:{href:"https://blog.csdn.net/kuifanshu3027/article/details/106452692",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://blog.csdn.net/kuifanshu3027/article/details/106452692"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("整个 ZNode 节点包括两部分信息：节点数据内容和节点状态信息。")]),a._v(" "),t("p",[a._v("qoute 是数据内容，其他的属于状态信息。具体含义如下：")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("cZxid 指的是 Create ZXID ，表示节点被创建时的事务ID。\nctime 指的是 Create Time ，表示节点创建时间。\nmZxid 指的是 Modified ZXID ，表示事务最后一次被修改时的事务ID。\nmtime 指的是 Modified Time， 表示节点最后一次被修改的世间。\npZxid 表示该节点的子节点列表最后一次被修改时的事务ID。只有子节点列表更新才会更新 pZxid，子节点内容变更不会更新。\ncversion 表示子节点的版本号。\ndataVersion 表示内容的版本号。\naclVersion 表示acl的版本\nephemeralOwner 表示创建该临时节点时的会话 sessionID，如果是持久性节点，那么值为0。\ndataLength 表示数据长度。\nnumChildren 表示直系子节点数目\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("h3",{attrs:{id:"water-数据变更通知"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#water-数据变更通知"}},[a._v("#")]),a._v(" Water-数据变更通知")]),a._v(" "),t("h3",{attrs:{id:"acl-保障数据的安全"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acl-保障数据的安全"}},[a._v("#")]),a._v(" ACL-保障数据的安全")]),a._v(" "),t("h2",{attrs:{id:"zookeeper-命令行操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-命令行操作"}},[a._v("#")]),a._v(" Zookeeper 命令行操作")]),a._v(" "),t("h2",{attrs:{id:"zookeeper-的-api-实用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-的-api-实用"}},[a._v("#")]),a._v(" Zookeeper 的 api 实用")]),a._v(" "),t("h2",{attrs:{id:"zookeeper-开业客户端"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zookeeper-开业客户端"}},[a._v("#")]),a._v(" Zookeeper 开业客户端")])])}),[],!1,null,null,null);t.default=e.exports}}]);