(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{550:function(s,a,t){"use strict";t.r(a);var e=t(8),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在wsl2的oracle-linux8-5发行版中安装xfce4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在wsl2的oracle-linux8-5发行版中安装xfce4"}},[s._v("#")]),s._v(" 在WSL2的Oracle Linux8.5发行版中安装xfce4")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("此问题尚在研究中，暂时没有完美解决办法，仅供参考。")])]),s._v(" "),a("h2",{attrs:{id:"安装语言、字体、图形界面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装语言、字体、图形界面"}},[s._v("#")]),s._v(" 安装语言、字体、图形界面")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" glibc-common "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" wqy-*-fonts "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum groupinstall "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Xfce"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"安装输入法和浏览器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装输入法和浏览器"}},[s._v("#")]),s._v(" 安装输入法和浏览器")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ibus ibus-gtk2 ibus-gtk3 ibus-libpinyin im-chooser gtk2-immodule-xim gtk3-immodule-xim firefox "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"配置rdp远程支持"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置rdp远程支持"}},[s._v("#")]),s._v(" 配置RDP远程支持")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" tigervnc-server xrdp "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"修改字符集支持中文、配置远程的时候调用xfce"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改字符集支持中文、配置远程的时候调用xfce"}},[s._v("#")]),s._v(" 修改字符集支持中文、配置远程的时候调用xfce")]),s._v(" "),a("p",[a("s",[s._v("echo 'LANG=zh_CN.utf8' > /etc/locale.conf")])]),s._v(" "),a("p",[a("s",[s._v("source /etc/locale.conf")])]),s._v(" "),a("p",[a("s",[s._v("echo '#!/bin/bash' > ~/.Xclients")])]),s._v(" "),a("p",[a("s",[s._v("echo 'XFCE=\"$(which xfce4-session 2>/dev/null)\"'  >> ~/.Xclients")])]),s._v(" "),a("p",[a("s",[s._v("echo 'exec \"$XFCE\"' >> ~/.Xclients")])]),s._v(" "),a("h2",{attrs:{id:"启用如上配置并重启验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用如上配置并重启验证"}},[s._v("#")]),s._v(" 启用如上配置并重启验证")]),s._v(" "),a("p",[a("s",[s._v("chmod +x /root/.Xclients && chkconfig xrdp on && service xrdp restart")])]),s._v(" "),a("p",[a("s",[s._v("systemctl set-default graphical.target")])]),s._v(" "),a("p",[a("s",[s._v("reboot")])]),s._v(" "),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" startxfce4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" ulinux startxfce4\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=r.exports}}]);