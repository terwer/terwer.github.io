(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{543:function(s,a,t){"use strict";t.r(a);var e=t(8),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"安装桌面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装桌面"}},[s._v("#")]),s._v(" 安装桌面")]),s._v(" "),a("p",[s._v("这里选择xfce4桌面，它的优点是轻量、美观、占用系统资源少。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" xfce4 dbus-x11 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("完成后，执行下面这段代码就可以看到桌面的图形界面了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" xfce4-session\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"修改默认语言环境为中文-可选"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改默认语言环境为中文-可选"}},[s._v("#")]),s._v(" 修改默认语言环境为中文（可选）")]),s._v(" "),a("p",[s._v("安装中文语言包")]),s._v(" "),a("p",[s._v("对于Centos8，可以使用")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" groupinstall Fonts\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于Debian用下面的，ubuntu可以不装")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sudo apt install fonts-noto-cjk -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("对于ubuntu还可以继续安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" language-pack-zh-hans language-pack-zh-hans-base "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("设置本地化环境变量")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" /etc/default/locale\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LANG=zh_CN.UTF-8")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LANG=en_US.UTF-8")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"中文输入法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#中文输入法"}},[s._v("#")]),s._v(" 中文输入法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fcitx fcitx-pinyin\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export XMODIFIERS=@im=fcitx'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("export GTK_IM_MODULE=fcitx"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("export QT_IM_MODULE=fcitx"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" .profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("软件包已装，在应用程序 - 设置 - 会话与启动 - 应用程序自启动，添加 "),a("code",[s._v("/usr/bin/fcitx")]),s._v("。")]),s._v(" "),a("p",[s._v("PS：安装其他输入法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fcitx dbus-x11 im-config fcitx-sunpinyin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("更完整的配置")]),s._v(" "),a("ul",[a("li",[s._v("编辑"),a("code",[s._v("/etc/locale.gen")]),s._v("文件")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 找到 # zh_CN.UTF-8 这一行，取消注释\nzh_CN.UTF-8\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("ul",[a("li",[s._v("编辑"),a("code",[s._v("~/.profile")]),s._v("文件")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("GTK_IM_MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_IM_MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("XMODIFIERS")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("@im"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DefaultIMModule")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\nfcitx-autostart "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&>")]),s._v("/dev/null\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("安装Google拼音")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fcitx-googlepinyin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("需要注意的时，fcitx 默认输入法切换快捷键是ctrl+space，会覆盖 IDEA 的提示快捷键，可以通过"),a("code",[s._v("fcitx-config-gtk3")]),s._v("修改，但是不能和 Windows 宿主机上的全局热键冲突，不然会无效。")]),s._v(" "),a("p",[s._v("设置输入法")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" xfce4-session\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("打开设置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload@main/img/image-20220517020011362.png",alt:"image-20220517020011362"}})]),s._v(" "),a("p",[s._v("设置好如下")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload@main/img/image-20220517020348005.png",alt:"image-20220517020348005"}})]),s._v(" "),a("p",[s._v("另外快捷键可设置为Shift方便操作")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload@main/img/image-20220517020301467.png",alt:"image-20220517020301467"}})]),s._v(" "),a("ul",[a("li",[a("code",[s._v("IDEA")]),s._v(" 输入法支持")])]),s._v(" "),a("p",[s._v("上面配好之后，IDEA 切不出输入法，需要特殊配置一下才行，编辑 IDEA 启动脚本"),a("code",[s._v("idea.sh")]),s._v("，在上面加入以下配置：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("XMODIFIERS")])]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("@im"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("QT_IM_MODULE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("fcitx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("然后重启"),a("code",[s._v("IDEA")]),s._v("就可以切出输入法了。")])])}),[],!1,null,null,null);a.default=n.exports}}]);