(window.webpackJsonp=window.webpackJsonp||[]).push([[179],{528:function(s,a,t){"use strict";t.r(a);var e=t(7),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("文章更新历史")]),s._v(" "),a("p",[s._v("2022/05/25 feat:初稿。")])]),s._v(" "),a("h1",{attrs:{id:"parallels-desktop安装fedora34并切换xfce-desktop桌面环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#parallels-desktop安装fedora34并切换xfce-desktop桌面环境"}},[s._v("#")]),s._v(" Parallels Desktop安装Fedora34并切换Xfce Desktop桌面环境")]),s._v(" "),a("p",[s._v("在 Parallels Desktop 上默认下载安装了最新的 Fedora34 ，但是里面默认是 Fedora Workstation 环境。如果想要切换成xfce4，可以按照以下操作。")]),s._v(" "),a("h2",{attrs:{id:"启用国内源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用国内源"}},[s._v("#")]),s._v(" 启用国内源")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|^metalink=|#metalink=|g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s|^#baseurl=http://download.example/pub/fedora/linux|baseurl=https://mirrors.ustc.edu.cn/fedora|g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         -i.bak "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         /etc/yum.repos.d/fedora.repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         /etc/yum.repos.d/fedora-modular.repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         /etc/yum.repos.d/fedora-updates.repo "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n         /etc/yum.repos.d/fedora-updates-modular.repo\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"更新系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新系统"}},[s._v("#")]),s._v(" 更新系统")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装xfce-desktop桌面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装xfce-desktop桌面"}},[s._v("#")]),s._v(" 安装Xfce Desktop桌面")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf groupinstall "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Xfce Desktop"')]),s._v(" -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装桌面切换工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装桌面切换工具"}},[s._v("#")]),s._v(" 安装桌面切换工具")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" switchdesk switchdesk-gui -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("接下来，图形界面切换即可：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload/img/image-20220526000842407.png",alt:"image-20220526000842407"}})]),s._v(" "),a("h2",{attrs:{id:"安装zsh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装zsh"}},[s._v("#")]),s._v(" 安装zsh")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zsh")]),s._v(" -y\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"创建普通用户并设置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建普通用户并设置密码"}},[s._v("#")]),s._v(" 创建普通用户并设置密码")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改root密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("passwd")]),s._v(" root\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换root")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" --create-home --no-log-init --shell /bin/zsh -G root terwer\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'terwer:123456'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" chpasswd\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root:password'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" chpasswd\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"添加用户到sudo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加用户到sudo"}},[s._v("#")]),s._v(" 添加用户到sudo")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("su")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"terwer ALL=(ALL) NOPASSWD:ALL"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" -a /etc/sudoers\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"opt设置为当前用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#opt设置为当前用户"}},[s._v("#")]),s._v(" /opt设置为当前用户")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" -R terwer:terwer /opt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考"}},[s._v("#")]),s._v(" 参考")]),s._v(" "),a("p",[s._v("https://docs.fedoraproject.org/en-US/quick-docs/switching-desktop-environments/"),a("a",{attrs:{href:"https://docs.fedoraproject.org/en-US/quick-docs/switching-desktop-environments/",target:"_blank",rel:"noopener noreferrer"}},[a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);