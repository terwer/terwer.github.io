(window.webpackJsonp=window.webpackJsonp||[]).push([[137],{492:function(s,t,a){"use strict";a.r(t);var r=a(8),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"在-macos-上共存-virtualbox-和-vmware-fusion"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在-macos-上共存-virtualbox-和-vmware-fusion"}},[s._v("#")]),s._v(" 在 macOS 上共存 VirtualBox 和 VMWare Fusion")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("文章更新历史")]),s._v(" "),t("p",[s._v("2022/05/09 "),t("s",[s._v("feat:VirtualBox6.1.34已经可以兼容了。此文章失效。")])])]),s._v(" "),t("p",[s._v("VirtualBox 和 VMWare Fusion 都是简洁的虚拟化工具。我在大多数日常工作中都使用 Fusion，它为我服务了很长时间，而且我在其中有大量有用的机器。但有时我也需要使用 VirtualBox，通常用于与 Vagrant 一起工作。问题是他们两个相处得不太好……")]),s._v(" "),t("blockquote",[t("p",[t("strong",[s._v("PS：macOS Monterey安装VirtualBox出错解决方案：")])]),s._v(" "),t("p",[s._v("安装macFUSE")]),s._v(" "),t("p",[t("a",{attrs:{href:"https://github.com/osxfuse/osxfuse",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/osxfuse/osxfuse"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("当您安装 VirtualBox，然后尝试在 Fusion 中启动 VM 时，您会看到如下内容：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Could not open /dev/vmmon: No such file or directory.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("不兼容是在每个使用的内核扩展之间。我认为 Fusion 在这方面表现得更好——它在启动和停止时加载和卸载其内核扩展。这意味着当它不运行时，VirtualBox 可以运行。但是 VirtualBox 不这样做。它在安装时加载内核扩展（可能在之后的启动时）。你可以看到这些 "),t("code",[s._v("kextstat")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("jb@unu:~ $ kextstat "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" virtualbox\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("226")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" 0xffffff7f83d52000 0x61000    0x61000    org.virtualbox.kext.VBoxDrv "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v(".22"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("93316754")]),s._v("-E074-3CE2-9464-DDA4356FF02E "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("228")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 0xffffff7f83bd8000 0x8000     0x8000     org.virtualbox.kext.VBoxUSB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v(".22"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" D956DCFA-4E4F-320A-BEBC-E4823501B1FF "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("227")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("226")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("230")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 0xffffff7f83c22000 0x6000     0x6000     org.virtualbox.kext.VBoxNetAdp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v(".22"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 4A6C39E1-5D90-3E34-9673-57B0DD779CD7 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("226")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("231")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 0xffffff7f83c28000 0x5000     0x5000     org.virtualbox.kext.VBoxNetFlt "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.1")]),s._v(".22"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" 446923A0-E855-3E75-9173-66FA4CE2474A "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("226")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("我们可以使用几个脚本来解决这个问题，这样我们至少可以手动在两者之间切换。为了能够运行 Fusion，我们需要卸载 VirtualBox kexts：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" VBoxNetAdp VBoxNetFlt VBoxUSB VBoxDrv"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    kextunload "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"org.virtualbox.kext.'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$id")]),s._v('"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("将其另存为 "),t("code",[s._v("~/bin/unload-vbox")]),s._v(" 或其他内容并将其运行为 "),t("code",[s._v("sudo unload-vbox")]),s._v(". 当我们不运行 Fusion 时，我们可以加载 VirtualBox kexts，VirtualBox 可以正常工作：")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/sh")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("id")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" VBoxDrv VBoxUSB VBoxNetFlt VBoxNetAdp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    kextload "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Library/Application Support/VirtualBox"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n     "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/Library/Application Support/VirtualBox/'),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$id")]),s._v('.kext"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"备注"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#备注"}},[s._v("#")]),s._v(" 备注")]),s._v(" "),t("p",[t("s",[s._v("VirtualBox6.1.34已经可以兼容了。此文章失效。")])])])}),[],!1,null,null,null);t.default=e.exports}}]);