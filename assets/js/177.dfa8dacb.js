(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{531:function(s,a,t){"use strict";t.r(a);var n=t(8),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"docker-的-http-部署配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-的-http-部署配置"}},[s._v("#")]),s._v(" docker 的 http 部署配置")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("集成 MySQL 的版本")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("db")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("5.7.38\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/mysql\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"3307:3306"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_DATABASE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("MYSQL_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress\n\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("depends_on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" db\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6.0.2\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8000:80"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"db:3306"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"wordpress"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DEBUG")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/html\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./uploads.ini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/php/conf.d/uploads.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br")])])]),s._v(" "),a("li",[a("p",[s._v("使用 rds 版本的 mysql")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6.0.2\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_HOST}:${MYSQL_PORT}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_DB_NAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_USERNAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_PASSWORD}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WORDPRESS_DEBUG: 1")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/html\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./uploads.ini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/php/conf.d/uploads.ini\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br")])])])]),s._v(" "),a("h2",{attrs:{id:"启用-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启用-https"}},[s._v("#")]),s._v(" 启用 https")]),s._v(" "),a("p",[s._v("先增加端口和 ssl 证书映射")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6.0.2\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443:443"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_HOST}:${MYSQL_PORT}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_DB_NAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_USERNAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_PASSWORD}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WORDPRESS_DEBUG: 1")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/html\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./uploads.ini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/php/conf.d/uploads.ini\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/ssl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("进入 wordpress 容器，加载 apache 的 ssl 模块。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it wordpress bash")]),s._v("\nroot@0f05292f2238:/var/www/html"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a2enmod ssl")]),s._v("\nConsidering dependency setenvif "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ssl:\nModule setenvif already enabled\nConsidering dependency mime "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ssl:\nModule mime already enabled\nConsidering dependency socache_shmcb "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" ssl:\nEnabling module socache_shmcb.\nEnabling module ssl.\nSee /usr/share/doc/apache2/README.Debian.gz on how to configure SSL and create self-signed certificates.\nTo activate the new configuration, you need to run:\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" apache2 restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h2",{attrs:{id:"编辑容器中的-ssl-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑容器中的-ssl-文件"}},[s._v("#")]),s._v(" 编辑容器中的 ssl 文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@0f05292f2238:/var/www/html"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# vim /etc/apache2/sites-available/default-ssl.conf")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("容器中没有 vim，我们先把文件拷贝出来，然后在映射进去")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root@0f05292f2238:/var/www/html"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cp /etc/apache2/sites-available/default-ssl.conf /ssl/default-ssl.conf")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("ssl 证书和私钥")]),s._v(" "),a("p",[s._v("找到 "),a("strong",[s._v("SSLCertificateFile 和 SSLCertificateKeyFile")]),s._v(" 这两个配置项，改成把私钥和证书")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   A self-signed (snakeoil) certificate can be created by installing")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   the ssl-cert package. See")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   /usr/share/doc/apache2/README.Debian.gz for more info.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   If both key and certificate are stored in the same file, only the")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#   SSLCertificateFile directive is needed.")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSLCertificateFile\t/etc/ssl/certs/ssl-cert-snakeoil.pem")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# SSLCertificateKeyFile /etc/ssl/private/ssl-cert-snakeoil.key")]),s._v("\nSSLCertificateFile\t/ssl/certs/blog.terwergreen.com.pem\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("SSLCertificateKeyFile")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/ssl/certs/blog.terwergreen.com.key")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"强制-http-请求转到-https"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制-http-请求转到-https"}},[s._v("#")]),s._v(" 强制 http 请求转到 https")]),s._v(" "),a("p",[s._v("编辑  "),a("strong",[s._v("/etc/apache2/sites-available/000-default.conf")]),s._v(" ，找到 <VirtualHost *:80> 标签中增加下面的配置：")]),s._v(" "),a("div",{staticClass:"language-properties line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-properties"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("<Directory")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v('"/var/www/html"> ')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("    RewriteEngine")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("  on")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("    RewriteBase")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("    # FORCE HTTPS")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("    RewriteCond")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("%{HTTPS} !=on")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[s._v("    RewriteRule")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[s._v("^/?(.*) https://%{SERVER_NAME}/$1 [R,L]")]),s._v("\n</Directory>\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("这里要注意修改文件的位置")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img1.terwer.space/api/public/20220916183108.png",alt:""}}),s._v("​")]),s._v(" "),a("h2",{attrs:{id:"踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#踩坑"}},[s._v("#")]),s._v(" 踩坑")]),s._v(" "),a("p",[a("strong",[s._v("如果发现没有生效看这里")])]),s._v(" "),a("p",[s._v("1、重建容器需要重新启用 ssl")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("a2enmod ssl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、从 apache 的配置文件 "),a("code",[s._v("apache2.conf")]),s._v(" 可以看到，apache 只会读取 "),a("code",[s._v("/etc/apache2/sites-enabled")]),s._v(" 目录的配置文件，所以需要把 "),a("code",[s._v("/etc/apache2/sites-available")]),s._v(" 下的 "),a("code",[s._v("default-ssl.conf")]),s._v(" 文件链接到 "),a("code",[s._v("/etc/apache2/sites-enabled")]),s._v(" 目录下。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /etc/apache2/sites-available/default-ssl.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n/etc/apache2/sites-enabled/default-ssl.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"最终完整版的配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最终完整版的配置"}},[s._v("#")]),s._v(" 最终完整版的配置")]),s._v(" "),a("div",{staticClass:"language-yaml line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3.3'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("wordpress")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("6.0.2\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"80:80"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443:443"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("restart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no"')]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_HOST")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_HOST}:${MYSQL_PORT}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_NAME")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_DB_NAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_USER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_USERNAME}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("WORDPRESS_DB_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"${MYSQL_PASSWORD}"')]),s._v("\n       "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# WORDPRESS_DEBUG: 1")]),s._v("\n     "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./wordpress"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/www/html\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./uploads.ini"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/usr/local/etc/php/conf.d/uploads.ini\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/ssl\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("conf/default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ssl.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/apache2/sites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("available/default"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ssl.conf\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./ssl"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("conf/000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("default.conf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/apache2/sites"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("available/000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("default.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);