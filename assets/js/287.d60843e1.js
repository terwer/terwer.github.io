(window.webpackJsonp=window.webpackJsonp||[]).push([[287],{641:function(e,t,i){"use strict";i.r(t);var s=i(8),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("高版本的MySQL必须添加 "),t("strong",[e._v("useSSL=false")]),e._v(" ，否则就会直接拒绝链接，真的是大坑。")]),e._v(" "),t("p",[e._v("原因是MySQL在高版本需要指明是否进行SSL连接")]),e._v(" "),t("blockquote",[t("p",[e._v("Establishing SSL connection without server’s identity verification is not recommended. According to MySQL 5.5.45+, 5.6.26+ and 5.7.6+ requirements SSL connection must be established by default if explicit option isn’t set. For compliance with existing applications not using SSL the verifyServerCertificate property is set to ‘false’. You need either to explicitly disable SSL by setting useSSL=false, or set useSSL=true and provide truststore for server certificate verification.")]),e._v(" "),t("p",[e._v("不建议在没有服务器身份验证的情况下建立SSL连接。根据MySQL 5.5.45+、5.6.26+和5.7.6+的要求，如果不设置显式选项，则必须建立默认的SSL连接。需要通过设置useSSL=false来显式禁用SSL，或者设置useSSL=true并为服务器证书验证提供信任存储。")])])])}),[],!1,null,null,null);t.default=n.exports}}]);