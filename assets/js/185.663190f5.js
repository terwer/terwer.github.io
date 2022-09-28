(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{540:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("文章更新历史")]),s._v(" "),a("p",[s._v("2022/05/15 "),a("s",[s._v("Windows11 22000可以直接运行，无需配置，只需要解决中文乱码问题，此文章失效。")])]),s._v(" "),a("p",[s._v("2022/05/11 feat:初稿。")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("Windows11 22000可以直接运行，无需任何配置。唯一需要注意的是乱码问题。")]),s._v(" "),a("h2",{attrs:{id:"解决中文乱码问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决中文乱码问题"}},[s._v("#")]),s._v(" 解决中文乱码问题")]),s._v(" "),a("p",[s._v("运行下述代码，成功解决。现在可以正常显示中文了。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" fonts-noto-cjk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"解决默认目录问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决默认目录问题"}},[s._v("#")]),s._v(" 解决默认目录问题")]),s._v(" "),a("p",[s._v("设置里面把ubuntu.exe改成wsl.exe。")]),s._v(" "),a("p",[s._v("然后修改jenv")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /home/ubuntu/.jenv/libexec/jenv-version-file-write\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("添加下面脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Write the version out to disk.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /mnt/c/Users/* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you are in windows user forder, you can dou your work"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENV_VERSION")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENV_VERSION_FILE")]),s._v('"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PWD")]),s._v("/ "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /mnt/c/* "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"you are in windows c drive, for security nothing to do, you can type '~' back to wsl home "),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('or"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\n==========================================================\\necho $UBUNTU_ROOT_PWD | sudo -S sleep 1 && sudo su - root'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("cd /root/Desktop"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("=========================================================="),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("to root app forder"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('or"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("printf")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\\necho $UBUNTU_ROOT_PWD | sudo -S sleep 1 && sudo xfce4-session\\n'")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"to start a GUI desktop"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"you are in wsl env"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENV_VERSION")]),s._v('"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$JENV_VERSION_FILE")]),s._v('"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("~/.bash_profile修改")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ubuntu_ROOT_PWD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[a("s",[s._v("Windows11 22000以上版本，此文章失效。如果是低版本可以继续往下看。")])])]),s._v(" "),a("h2",{attrs:{id:"检查-windows-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检查-windows-版本"}},[s._v("#")]),s._v(" 检查 Windows 版本")]),s._v(" "),a("p",[s._v("确保 Windows 的版本在 Windows 10 Version 1607 之后。我本地的版本是 "),a("code",[s._v("Windows 11 22000")]),s._v(" 。使用 Win+R 然后输入 Cmd 即可查看：")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload@main/img/image-20220514212340110.png",alt:"image-20220514212340110"}})]),s._v(" "),a("h2",{attrs:{id:"安装-wsl2-并安装-linux-发行版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-wsl2-并安装-linux-发行版"}},[s._v("#")]),s._v(" 安装 WSL2 并安装 Linux 发行版")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://docs.microsoft.com/en-us/windows/wsl/install-win10"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("我这里安装的是 "),a("code",[s._v("Oracle Linux 8.5")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("➜  Terwer wslfetch\n      "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("-/+++++++++++++++++/-."),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("       Windows Subsystem "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Linux "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("WSL2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/syyyyyyyyyyyyyyyyyyyyyyys/.    terwer@TERWERWIN11\n   :yyyyo/-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".-/oyyyy/   Build: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22000")]),s._v("\n  /yyys-                     .oyyy+  Branch: co_release\n .yyyy"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("syyy- Release: Oracle Linux Server "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.5")]),s._v("\n :yyyo                         /yyy/ Kernel: Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.10")]),s._v(".16.3-microsoft-standard-WSL2\n .yyyy"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("                       "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("syyy- Uptime: 0d 7h 28m\n  /yyys.                     .oyyyo\n   /yyyyo:-"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".-:oyyyy/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/syyyyyyyyyyyyyyyyyyyyyyys+.\n      "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v(".:/+ooooooooooooooo+/:.`\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/terwer/upload@main/img/image-20220514213016975.png",alt:"image-20220514213016975"}})]),s._v(" "),a("h2",{attrs:{id:"在-windows-安装-x-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在-windows-安装-x-server"}},[s._v("#")]),s._v(" 在 Windows 安装 X Server")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://sourceforge.net/projects/vcxsrv/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://sourceforge.net/projects/vcxsrv/"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("直接下载安装即可。")]),s._v(" "),a("h2",{attrs:{id:"创建一个-xserver的快捷启动方式如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个-xserver的快捷启动方式如下"}},[s._v("#")]),s._v(" 创建一个 XServer的快捷启动方式如下")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"C:\\Program Files\\VcXsrv'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\v"}},[s._v("\\v")]),s._v('cxsrv.exe"')]),s._v(" :0 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ac")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-terminate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lesspointer")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-multiwindow")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-clipboard")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-wgl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-dpi")]),s._v(" auto\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("启动VcXsrv\n开始菜单里现在出现了一个文件夹VcXsrv，选择里面的XLaunch，一路选择下一步即可。然后这个软件就后台运行了。之后如果有需要使用Linux的图形界面的，都需要提前打开XLaunch。\n提一下打开Xlaunch后第一页的四个选项设置，我个人是喜欢选择全屏的，最接近原生系统的体验。假如你不需要打开完整的桌面环境而只需要图形化某些软件，那么就用默认的Multiple windows也不错。")]),s._v(" "),a("h2",{attrs:{id:"配置display"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置display"}},[s._v("#")]),s._v(" 配置DISPLAY")]),s._v(" "),a("p",[s._v("为了方便，打开Ubuntu bash，运行如下代码：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export DISPLAY=:0.0"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("这样，每次打开图形界面程序就不需要额外指定"),a("code",[s._v("DISPLAY")]),s._v("了。")])])}),[],!1,null,null,null);a.default=e.exports}}]);