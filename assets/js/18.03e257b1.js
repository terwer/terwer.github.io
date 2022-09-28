(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{375:function(v,t,_){"use strict";_.r(t);var a=_(8),l=Object(a.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h1",{attrs:{id:"java-se-第三讲-原生数据类型使用陷阱"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#java-se-第三讲-原生数据类型使用陷阱"}},[v._v("#")]),v._v(" Java SE 第三讲：原生数据类型使用陷阱")]),v._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[v._v("文章更新历史")]),v._v(" "),t("p",[v._v("2022/05/08 fix:修改备注。")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("Java 中的原生数据类型共有 8 种：")]),v._v(" "),t("p",[v._v("1） 整型：使用 int 表示。（32 位）")]),v._v(" "),t("p",[v._v("2） 字节型：使用 byte 表示。（表示-128～127 之间的 256 个整数， 8 位）。")]),v._v(" "),t("p",[v._v("3）短整型：使用 short 表示。（16 位）")]),v._v(" "),t("p",[v._v("4）长整型：使用 long 表示。（64 位）")]),v._v(" "),t("p",[v._v("5）单精度浮点型：使用 float 表示。所谓浮点型，指的就是小数，也叫做实数，比如 1.2。")]),v._v(" "),t("p",[v._v("6）双精度浮点型：使用 double 表示。双精度浮点型表示的数据范围要比单精度浮点型大。")]),v._v(" "),t("p",[v._v("7）字符型：使用 char 表示（char 是 character 的缩写）。所谓字符，就是单个的字符表示，\n比如字母 a，或者中文张，外面用单引号包围上。比如 char a = ‘B’; char b = ‘张’;")]),v._v(" "),t("p",[v._v("8）布尔类型，使用 boolean 表示。布尔类型只有两种可能值，分别是 true 与 false。")])]),v._v(" "),t("li",[t("p",[v._v("Java 中的所有浮点类型默认情况下都是 double。不能将 double 类型的值赋给 float 类型\n的变量，即便该 double 类型的值处于 float 类型的范围内也是不可以的。总之，能否成功赋值取决于等号右边的值类型与等号左边的变量类型是否一致。")])]),v._v(" "),t("li",[t("p",[v._v("如何将 double 类型的值赋给 float 类型的变量？答案就是")]),v._v(" "),t("p",[v._v("(1)强制类型转换，将 double 类型的值强制转换为 float 类型。")]),v._v(" "),t("p",[v._v("(2)使用 java 预言的支持。")]),v._v(" "),t("p",[v._v("强制转换的语法： 类型 变量名 = （类型）变量值;")])]),v._v(" "),t("li",[t("p",[v._v("变量在使用前必须要赋值；变量必须要声明其类型方可使用；变量在使用前必须要定义，\n并且只能定义一次。")])]),v._v(" "),t("li",[t("p",[v._v("如下代码无法通过编译：")]),v._v(" "),t("p",[v._v("int a = 1;")]),v._v(" "),t("p",[v._v("short b = a;")]),v._v(" "),t("p",[v._v("a 是 int 类型，b 是 short 类型，int 类型表示的数据范围要比 short 类型大，不能将表示\n范围大的值赋给表示范围小的变量。")])]),v._v(" "),t("li",[t("p",[v._v("如下代码可以通过编译：")]),v._v(" "),t("p",[v._v("short a = 1;")]),v._v(" "),t("p",[v._v("int b = a;")]),v._v(" "),t("p",[v._v("a 是 short 类型，b 是 int 类型，int 类型表示的数据范围要比 short 类型大，可以将表示\n范围小的值赋给表示范围大的变量。")])]),v._v(" "),t("li",[t("p",[v._v("总结：可以将表示范围小的值赋给表示范围大的变量；但不能直接将表示范围大的值赋\n给表示范围小的变量，只能通过强制类型转换实现。")])])])])}),[],!1,null,null,null);t.default=l.exports}}]);