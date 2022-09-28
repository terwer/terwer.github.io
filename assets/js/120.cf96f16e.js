(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{475:function(a,t,s){"use strict";s.r(t);var e=s(8),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("blockquote",[t("p",[a._v("2022/03/14 验证通过")]),a._v(" "),t("p",[a._v("文章更新历史")]),a._v(" "),t("p",[a._v("2022/03/03 初稿。")]),a._v(" "),t("p",[a._v("2022/04/21 兼容 IDEA2022.1。提供使用的新方法。")])]),a._v(" "),t("p",[a._v("在创建 Maven 的项目时我们发现了一个很不方便的问题，就是每次创建 Maven 的工程的时候，都需要选择一个骨架，但是每个骨架都需要删除一部分东西才行，这样的话实在是太不方便了。")]),a._v(" "),t("h2",{attrs:{id:"为什么要自定义-archetype"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#为什么要自定义-archetype"}},[a._v("#")]),a._v(" 为什么要自定义 archetype")]),a._v(" "),t("p",[a._v("在创建 Maven 的项目时我们发现了一个很不方便的问题，就是每次创建 Maven 的工程的时候，都需要选择一个骨架，但是每个骨架都需要删除一部分东西才行，在平时开发中，如果是分布式项目，有可能会频繁创建子项目，每次都要删除不要的文件然后拷贝我们要的文件，例如弹簧配置，web.xml 中配置等。这样做不仅会浪费大量时间，拷贝和删除文件也容易导致错误的发生，比如漏拷某文件。")]),a._v(" "),t("h2",{attrs:{id:"archetype-maven-项目的组成"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#archetype-maven-项目的组成"}},[a._v("#")]),a._v(" Archetype maven 项目的组成")]),a._v(" "),t("p",[a._v("一个典型的 Archetype Maven 项目主要包括如下几个部分：")]),a._v(" "),t("ul",[t("li",[a._v("pom.xml：Archetype 自身的 POM。")]),a._v(" "),t("li",[a._v("src/main/resources/archetype-resources/pom.xml：基于该 Archetype 生成项目的 POM 原型。")]),a._v(" "),t("li",[a._v("src/main/resources/META-INF/maven/archetype-metadata.xml：Archetype 的描述符文件。")]),a._v(" "),t("li",[a._v("src/main/resources/archetype-resources/**：其他需要包含在 Archetype 中的内容。")])]),a._v(" "),t("h2",{attrs:{id:"创建自己的骨架结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建自己的骨架结构"}},[a._v("#")]),a._v(" 创建自己的骨架结构")]),a._v(" "),t("p",[a._v("要创建 Maven 的模板，首先你要创建一个 Maven 的项目，然后再以这个项目作为模板。")]),a._v(" "),t("h3",{attrs:{id:"创建-maven-工程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-maven-工程"}},[a._v("#")]),a._v(" 创建 maven 工程")]),a._v(" "),t("p",[a._v("首先创建一个 Maven 的工程，名字叫 maven-template-java-simple")]),a._v(" "),t("p",[a._v("选择骨架")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105651.jpeg"}}),a._v(" "),t("h3",{attrs:{id:"骨架创建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#骨架创建"}},[a._v("#")]),a._v(" 骨架创建")]),a._v(" "),t("p",[a._v("在 maven-template-java-simple 根目录执行")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn archetype:create-from-project\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("报错解决")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn archetype:create-from-project报错The specified user settings file does not exist\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("a",{attrs:{href:"https://www.cnblogs.com/chmod/p/15489910.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://www.cnblogs.com/chmod/p/15489910.html"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("执行完毕之后，会出现一个编译之后新的 maven 工程（target 文件夹），如下图:")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105712.jpeg"}}),a._v(" "),t("h3",{attrs:{id:"骨架安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#骨架安装"}},[a._v("#")]),a._v(" 骨架安装")]),a._v(" "),t("p",[a._v("安装对应骨架项目")]),a._v(" "),t("p",[a._v("先进入骨架项目的 pom 文件目录：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd target/generated-sources/archetype\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("执行安装：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("mvn clean install\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("我们的骨架项目坐标如下：")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("com.terwergreen"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("maven-template-java-simple-archetype"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("1.0.0"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("version")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("packaging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("maven-archetype"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("packaging")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("至此，骨架项目安装成功。")]),a._v(" "),t("h2",{attrs:{id:"使用自己创建的自定义骨架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用自己创建的自定义骨架"}},[a._v("#")]),a._v(" 使用自己创建的自定义骨架")]),a._v(" "),t("p",[a._v("创建新的 Maven 工程，选择自定义骨架")]),a._v(" "),t("h3",{attrs:{id:"添加骨架"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加骨架"}},[a._v("#")]),a._v(" 添加骨架")]),a._v(" "),t("p",[a._v("创建新的 maven 工程，选择 Add Archetype,填写刚才添加的骨架工程坐标,点击 OK，这是会生成一个新的骨架选项。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("groupId com.terwergreen\nartifactId maven-template-java-simple-archetype\nversion 1.0.0\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105749.jpeg"}}),a._v(" "),t("p",[a._v("选中新创建的骨架，点击下一步创建新的 Maven 的项目如下，这是新建的测试项目：")]),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105803.jpeg"}}),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105811.jpeg"}}),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105835.jpeg"}}),a._v(" "),t("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/20220314105849.jpeg"}}),a._v(" "),t("p",[a._v("以后再创建类似的 Maven 的项目时，就可以快速新建的 Maven 项目而不用改来改去了。是不是很方便呢？")]),a._v(" "),t("p",[a._v("PS:删除自定义 archetype")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("cd /Users/terwer/Library/Caches/JetBrains/IntelliJIdea2021.3/Maven/Indices\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后编辑 "),t("code",[a._v("UserArchetypes.xml")]),a._v(" 文件即可。注意：修改文件之后需要重启 IDEA。")]),a._v(" "),t("p",[t("strong",[a._v("手动添加的方法：")])]),a._v(" "),t("h2",{attrs:{id:"解决添加失效问题-idea2022-1-以下版本有效-不包括-idea2022-1"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决添加失效问题-idea2022-1-以下版本有效-不包括-idea2022-1"}},[a._v("#")]),a._v(" 解决添加失效问题（IDEA2022.1 以下版本有效，不包括 IDEA2022.1）")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" ~/Library/Caches/JetBrains\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("找到对应版本目录，例如")]),a._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("cd")]),a._v(" /Users/terwer/Library/Caches/JetBrains/IntelliJIdea2021.3/Maven/Indices\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("然后新建一个 "),t("code",[a._v("UserArchetypes.xml")]),a._v(" 文件，内容如下：")]),a._v(" "),t("div",{staticClass:"language-xml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-xml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("archetypes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("<")]),a._v("archetype")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("groupId")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("com.terwergreen"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("artifactId")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("maven-template-java-simple-archetype"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token attr-name"}},[a._v("version")]),t("span",{pre:!0,attrs:{class:"token attr-value"}},[t("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')]),a._v("1.0.3"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v('"')])]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("/>")])]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token tag"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("archetypes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("重启 IDEA 就可以了。")]),a._v(" "),t("h2",{attrs:{id:"idea-2022-1-的变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#idea-2022-1-的变化"}},[a._v("#")]),a._v(" IDEA 2022.1 的变化")]),a._v(" "),t("p",[a._v("IDEA2022 在 "),t("code",[a._v("Add")]),a._v(" 完成之后，下次新建需要切换 Catalog 到 "),t("code",[a._v("Default Local")]),a._v("，然后才能在 "),t("code",[a._v("Archetype")]),a._v(" 中选择到。")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220421135052088.png",alt:"image-20220421135052088"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);