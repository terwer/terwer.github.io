(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{382:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"java-se第十讲-面向对象之封装续"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-se第十讲-面向对象之封装续"}},[s._v("#")]),s._v(" Java SE第十讲：面向对象之封装续")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("文章更新历史")]),s._v(" "),a("p",[s._v("2022/05/08 feat:新增Kotlin语法支持。")]),s._v(" "),a("p",[s._v("2022/05/08 fix:修改备注。")])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("类中的属性又叫做成员变量（"),a("code",[s._v("member variable")]),s._v("），属性用英文表示为 "),a("code",[s._v("property")]),s._v(" 或者\n"),a("code",[s._v("attribute")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("对象（"),a("code",[s._v("Object")]),s._v("）又叫做实例（"),a("code",[s._v("Instance")]),s._v("）。生成一个对象的过程又叫做实例化。")])]),s._v(" "),a("li",[a("p",[s._v("命名约定")]),s._v(" "),a("p",[s._v("a) 类：首字母大写，如果一个类名由多个单词构成，那么每个单词的首字母都大写，\n中间不使用任何的连接符。比如 "),a("code",[s._v("Person")]),s._v(" 类，"),a("code",[s._v("MemberTest")]),s._v(" 类。")]),s._v(" "),a("p",[s._v("b) 方法：首字母小写。如果一个方法由多个单词构成，那么第一个单词的所有字母全\n都小写，从第二个单词开始，每个单词的首字母大写。比如 "),a("code",[s._v("add")]),s._v("，"),a("code",[s._v("addThreeInt")]),s._v("。")]),s._v(" "),a("p",[s._v("c) 属性：命名约定与方法相同。比如"),a("code",[s._v("age")]),s._v("，"),a("code",[s._v("ageOfPerson")]),s._v("。")])]),s._v(" "),a("li",[a("p",[s._v("属性需要定义在类中，又叫做成员变量；而定义在方法中的变量叫做局部变量。")])]),s._v(" "),a("li",[a("p",[s._v("如何定义属性？")]),s._v(" "),a("code-group",[a("code-block",{attrs:{title:"Kotlin",active:""}},[a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" 类的名字"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  修饰符 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" 属性名称\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])]),s._v(" "),a("code-block",{attrs:{title:"Java"}},[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  修饰符 类型 属性名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])],1),s._v(" "),a("p",[s._v("如何使用属性？与方法一样，使用.运算符。首先需要生成类的实例，然后使用实例+”.”\n的方式来使用属性。")]),s._v(" "),a("p",[s._v("比如：")]),s._v(" "),a("code-group",[a("code-block",{attrs:{title:"Kotlin",active:""}},[a("div",{staticClass:"language-kotlin line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-kotlin"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])]),s._v(" "),a("code-block",{attrs:{title:"Java"}},[a("div",{staticClass:"language-java line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),s._v(" person "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nperson"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("age\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])],1)],1),s._v(" "),a("li",[a("p",[s._v("局部变量使用前必须要声明并赋初值；成员变量使用前必须要声明，但可以不赋初值。")])]),s._v(" "),a("li",[a("p",[s._v("成员变量与局部变量的联系与区别：")]),s._v(" "),a("p",[s._v("a) 无论是成员变量还是局部变量，使用前都需要声明（定义）。")]),s._v(" "),a("p",[s._v("b) 对于局部变量来说，使用前必须要初始化；对于成员变量来说，使用前可以不初\n始化。如果没有初始化成员变量就开始使用，那么每个类型的成员变量都有一个\n默认的初始值")]),s._v(" "),a("p",[s._v("i.     "),a("code",[s._v("byte")]),s._v("、"),a("code",[s._v("short")]),s._v("、"),a("code",[s._v("int")]),s._v("、"),a("code",[s._v("long")]),s._v(" 类型的初始值为 "),a("code",[s._v("0")])]),s._v(" "),a("p",[s._v("ii.   "),a("code",[s._v("float")]),s._v("、"),a("code",[s._v("double")]),s._v(" 类型的初始值为 "),a("code",[s._v("0.0")])]),s._v(" "),a("p",[s._v("iii.   "),a("code",[s._v("char")]),s._v(" 类型的初始值"),a("code",[s._v("‘\\u0000’")])]),s._v(" "),a("p",[s._v("iv.  "),a("code",[s._v("boolean")]),s._v(" 类型的初始值为 "),a("code",[s._v("false")])])]),s._v(" "),a("li",[a("p",[s._v("引用类型（"),a("code",[s._v("reference type")]),s._v("）：引用类型是用在对象上的。一个对象可以被多个引用所指\n向，但同一时刻，每个引用只能指向唯一的一个对象。如果一个对象被多个引用所指向，\n那么无论哪个引用对对象的属性进行了修改，都会反映到其他的引用当中。")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);