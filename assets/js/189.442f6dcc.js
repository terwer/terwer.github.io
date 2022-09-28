(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{544:function(s,a,e){"use strict";e.r(a);var t=e(8),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-2-34-1-访问服务器报permission-denied-publickey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-2-34-1-访问服务器报permission-denied-publickey"}},[s._v("#")]),s._v(" git 2.34.1 访问服务器报Permission denied (publickey)")]),s._v(" "),a("h2",{attrs:{id:"起因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起因"}},[s._v("#")]),s._v(" 起因")]),s._v(" "),a("p",[s._v("近期git 更新了最新的2.34.1版本，好多小伙伴突然发现无法访问服务器。")]),s._v(" "),a("p",[s._v("git pull的时候命令行会提示")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("git@git.xxxxx.com:  Permission denied "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("publickey,gssapi-keyex,gssapi-with-mic,password"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("莫名的提示，我还以为git版本有问题。")]),s._v(" "),a("h2",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),a("p",[a("strong",[s._v("GIT 2.33.1版本集成了最新的OpenSSH v8.8p1版本，此版本放弃了历史相当悠久的rsa-sha1的支持。")]),s._v("\n当我们习惯于用命令行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your_email@example.com"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("来创建密钥的时候，要小心了，以后不再支持。")]),s._v(" "),a("p",[s._v("SHA-1 哈希算法，此前被发现构造前缀碰撞攻击成本已降至低于 5 万美元（实际为 4.5 万美元），因此OpenSSH开发团队决定从8.2版本禁用 ssh-rsa 公钥签名算法。有一些更好的算法可以替代，包括 RFC8332 RSA SHA-2 签名算法 rsa-sha2-256/512、ssh-ed25519 签名算法与 RFC5656 ECDSA 算法。目前这些算法在 OpenSSH 中都已经支持。")]),s._v(" "),a("p",[s._v("值得注意的是，一般情况下，如果服务器OpenSSH版本大于等于7.2，那么已经支持ssh-rsa2-256/512，用户无需做额外的处理。但是如果服务器版本仍然比较低，就需要更换密钥。")]),s._v(" "),a("h2",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("h3",{attrs:{id:"方法1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法1"}},[s._v("#")]),s._v(" 方法1")]),s._v(" "),a("p",[s._v("如果你急需访问仓库，而暂时不想修改密钥，可以在密钥所在的.ssh目录下的config文件（没有的话自行创建）添加如下配置即可访问。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Host git.xxx.com\nHostkeyAlgorithms +ssh-rsa \nPubkeyAcceptedAlgorithms +ssh-rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("修改后的配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Host git.xxx.com\n  PreferredAuthentications publickey\n  IdentityFile ~/.ssh/id_rsa_landray_ubuntu\n  HostkeyAlgorithms +ssh-rsa\n  PubkeyAcceptedAlgorithms +ssh-rsa\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"方法2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法2"}},[s._v("#")]),s._v(" 方法2")]),s._v(" "),a("p",[s._v("重新生成更安全的密钥。\n在生成之前，要确定服务器是否支持相应的密钥加密算法。\n使用 ECDSA 或者 ED25519 算法替代RSA以一个不错的选择")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your@example.email"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("参考文章")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://confluence.atlassian.com/bitbucketserverkb/ssh-rsa-key-rejected-with-message-no-mutual-signature-algorithm-1026057701.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://confluence.atlassian.com/bitbucketserverkb/ssh-rsa-key-rejected-with-message-no-mutual-signature-algorithm-1026057701.html"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://git-scm.com/docs/gitfaq#_credentials",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://git-scm.com/docs/gitfaq#_credentials"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"方法3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法3"}},[s._v("#")]),s._v(" 方法3")]),s._v(" "),a("p",[s._v("回滚git到2.32版本。")])])}),[],!1,null,null,null);a.default=r.exports}}]);