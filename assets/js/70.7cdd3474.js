(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{427:function(t,v,r){"use strict";r.r(v);var _=r(8),a=Object(_.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h3",{attrs:{id:"nwr协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#nwr协议"}},[t._v("#")]),t._v(" NWR协议")]),t._v(" "),v("h4",{attrs:{id:"什么是nwr协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是nwr协议"}},[t._v("#")]),t._v(" 什么是NWR协议")]),t._v(" "),v("p",[t._v("NWR是一种在分布式存储系统中用于控制一致性级别的一种策略。在亚马逊的存储系统中，应用了NWR协议来控制一致性。")]),t._v(" "),v("ul",[v("li",[t._v("N：在分布式系统中，有多少分备份数据")]),t._v(" "),v("li",[t._v("W：代表一次成功的更新操作要求至少有W份写入成功")]),t._v(" "),v("li",[t._v("R：代表一次成功的读取操作至少有R份读取成功")])]),t._v(" "),v("h4",{attrs:{id:"原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),v("p",[t._v("NWR值的不同组合会产生不同的一致性效果，当W+R>N 时，整个系统对客户端来讲能够保证强一致性。")]),t._v(" "),v("p",[v("strong",[t._v("以常见的N=3、W=2、R=2来举例")])]),t._v(" "),v("ul",[v("li",[t._v("N=3，表示，任何一个对象都必须有三个副本")]),t._v(" "),v("li",[t._v("W=2，表示，对数据的修改，只需要在三个副本中的两个上面完成就返回")]),t._v(" "),v("li",[t._v("R=2，表示，从三个对象中读取两个对象，才能返回")])]),t._v(" "),v("p",[t._v("在分布式系统中，数据的 单点是不允许存在的。也就是线上存在的备份数量N=1是非常危险的。因为一旦这个备份发生错误，就可能发生数据的永久性错误。假如我们把N设置为2，那么，只要有一个存储节点发生错误，就会有单点的存在。**所有N必须大于2。**N越大，系统的维护成本也越高。工业界通常把N设置为3。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220327233803133.png",alt:"image-20220327233803133"}})]),t._v(" "),v("p",[t._v("1、当W是2、R是2的时候，W+R>N ，这种情况对于客户端是强一致性的。")]),t._v(" "),v("p",[t._v("如果，W+R>N，那么读取和写入成功的数据一定存在交集。这样就能保证一定能够读取到最新的数据，数据的强一致性得到了保证。在满足数据一致性的前提下，R或者W的值设置的越大，则系统延迟越大，因为这取决于最慢的那份备份数据的响应时间。")]),t._v(" "),v("p",[t._v("2、当R+W<N时，无法保证强一致性。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220327234504504.png",alt:"image-20220327234504504"}})]),t._v(" "),v("p",[t._v("因为成功写和成功读集合可能不存在交集，这样读操作无法读取到最新更新的数据，也就无法保证数据的强一致性。")])])}),[],!1,null,null,null);v.default=a.exports}}]);