/**
 * 提示：如您想使用JS版本的配置文件可参考：https://github.com/xugaoyi/vuepress-theme-vdoing/tree/a2f03e993dd2f2a3afdc57cf72adfc6f1b6b0c32/docs/.vuepress
 */
import { resolve } from "path";
import { defineConfig4CustomTheme, UserPlugins } from "vuepress/config";
import { VdoingThemeConfig } from "vuepress-theme-vdoing/types";
// @ts-ignore
import dayjs from "dayjs";
import baiduCode from "./config/baiduCode"; // 百度统计hm码
import htmlModules from "./config/htmlModules"; // 自定义插入的html块

const DOMAIN_NAME = "terwergreen.com"; // 域名 (不带https)
const WEB_SITE = `https://${DOMAIN_NAME}`; // 网址

export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: "vdoing", // 使用npm主题包

  locales: {
    "/": {
      lang: "zh-CN",
      title: "远方的灯塔 - 专注于服务端技术分享",
      description:
        "远方的灯塔是关注与分享互联网及服务端开发技术的个人博客，致力于Java后端开发及服务端技术、软件架构、微服务技术分享。同时也记录个人的一路点滴，所蕴含的包括前端、后端、数据库等知识，欢迎关注。",
    },
  },
  // base: '/', // 默认'/'。如果你想将你的网站部署到如 https://foo.github.io/bar/，那么 base 应该被设置成 "/bar/",（否则页面将失去样式等文件）

  // 主题配置
  themeConfig: {
    // 导航配置
    nav: [
      { text: "首页", link: "/" },
      {
        text: "后端开发",
        link: "/backend/", //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
        items: [
          { text: "Java SE", link: "/backend/#JavaSE" },
          { text: "Struts2", link: "/backend/#Struts2" },
          { text: "Hibernate", link: "/backend/#Hibernate" },
          { text: "MyBatis", link: "/backend/#MyBatis" },
          { text: "JAX-WS", link: "/backend/#Webservice" },
          {
            text: "并发",
            link: "/post/java-concurrent-knowledge-system-1txcn6.html",
          },
          { text: "分布式", link: "/backend/#分布式" },
        ],
      },
      {
        text: "其他技术栈",
        items: [
          {
            text: "Git",
            link: "/post/git-overview-and-environment-preparation.html",
          },
        ],
      },
      {
        text: "经典书籍",
        link: "#",
        items: [
          {
            text: "《C程序设计语言》",
            link: "/post/c-language-basic-structure-1my3ua.html",
          },
        ],
      },
      // {
      //   text: "求职面试",
      //   link: "/job/",
      // },
      {
        text: "心情随笔",
        link: "/ing/",
      },
      {
        text: "文章索引",
        link: "/archives/",
        items: [
          { text: "文章分类", link: "/categories/" },
          { text: "文章标签", link: "/tags/" },
          { text: "文章归档", link: "/archives/" },
        ],
      },
      {
        text: "友情链接",
        link: "/friends/",
      },
      { text: "关于我", link: "/about/" },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: "https://img1.terwer.space/vdoing-img/logo.png", // 导航栏logo
    repo: "terwer/terwer.github.io", // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: "上次更新", // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: "docs", // 编辑的文件夹
    docsBranch: "main", // 编辑的文件所在分支，默认master。 注意：如果你的分支是main则修改为main
    editLinks: true, // 启用编辑
    editLinkText: "编辑",

    //*** 以下是Vdoing主题相关配置，文档：https://doc.xugaoyi.com/pages/a20ce8/ ***//

    // category: false, // 是否打开分类功能，默认true
    // tag: false, // 是否打开标签功能，默认true
    // archive: false, // 是否打开归档功能，默认true
    // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

    pageStyle: "line", // 页面风格，可选值：'card'卡片 | 'line' 线（未设置bodyBgImg时才生效）， 默认'card'。 说明：card时背景显示灰色衬托出卡片样式，line时背景显示纯色，并且部分模块带线条边框

    bodyBgImg: ["https://img1.terwer.space/vdoing-img/bg.png", "https://img1.terwer.space/vdoing-img/bg2.png", "https://img1.terwer.space/vdoing-img/bg3.png"], // body背景大图，默认无。 单张图片 String | 多张图片 Array, 多张图片时隔bodyBgImgInterval切换一张。
    bodyBgImgOpacity: 0.1, // body背景图透明度，选值 0.1~1.0, 默认0.5
    bodyBgImgInterval: 5, // body多张背景图时的切换间隔, 默认15，单位s
    // titleBadge: false, // 文章标题前的图标是否显示，默认true
    // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
    //   '图标地址1',
    //   '图标地址2'
    // ],
    // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状

    // updateBar: { // 最近更新栏
    //   showToArticle: true, // 显示到文章页底部，默认true
    //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
    // },
    // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
    // sidebarOpen: false, // 初始状态是否打开左侧边栏，默认true
    // pageButton: false, // 是否显示快捷翻页按钮，默认true

    // 默认外观模式（用户未在页面手动修改过模式时才生效，否则以用户设置的模式为准），可选：'auto' | 'light' | 'dark' | 'read'，默认'auto'。
    // defaultMode: 'auto',

    // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | <自定义>    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页
    sidebar: "structuring",

    // 文章默认的作者信息，(可在md文件中单独配置此信息) string | {name: string, link?: string}
    author: {
      name: "terwer", // 必需
      link: "https://github.com/terwer", // 可选的
    },

    // 博主信息 (显示在首页侧边栏)
    blogger: {
      avatar: "https://img1.terwer.space/vdoing-img/photo.jpg",
      name: "Terwer Green",
      slogan: "一个后端老菜鸟",
    },

    // 社交图标 (显示于博主信息栏和页脚栏。内置图标：https://doc.xugaoyi.com/pages/a20ce8/#social)
    social: {
      // iconfontCssFile: '//at.alicdn.com/t/xxx.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自己添加。阿里图片库：https://www.iconfont.cn/
      icons: [
        {
          iconClass: "icon-youjian",
          title: "发邮件",
          link: "mailto:youweics@163.com",
        },
        {
          iconClass: "icon-github",
          title: "GitHub",
          link: "https://github.com/terwer",
        },
        {
          iconClass: "icon-erji",
          title: "听音乐",
          link: "https://music.163.com/#/playlist?id=6820033188",
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 2011, // 博客创建年份
      copyrightInfo: `Terwer Green | 
        <a href="https://github.com/terwer/terwer.github.io/blob/master/LICENSE" target="_blank">MIT License</a> |
        <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备2022020721号-1</a> | 
        <a href="https://tongji.baidu.com/web/10000454757/overview/index?siteId=17924431" target="_blank"><img src="https://tongji.baidu.com/sc-web/image/icon/13.gif" style="vertical-align: middle;height: 14px;margin-top: -1px;"/> 百度统计</a>`,
      // <a href="https://uweb.umeng.com/v1/login.php?siteid=4445524"><img src="https://web.umeng.com/static/img/main/icon.gif" /></a>` // 博客版权信息，支持a标签或换行标签</br>
    },

    // 扩展自动生成frontmatter。（当md文件的frontmatter不存在相应的字段时将自动添加。不会覆盖已有的数据。）
    extendFrontmatter: {
      author: {
        name: "terwer",
        link: "https://github.com/terwer",
      },
    },

    // 自定义hmtl(广告)模块
    // htmlModules
  },

  // 注入到页面<head>中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  head: [
    ["link", { rel: "icon", href: "https://img1.terwer.space/vdoing-img/favicon.ico" }], //favicons，资源放在public文件夹
    [
      "meta",
      {
        name: "keywords",
        content:
          "软件架构,服务端开发,Java,Spring,Dubbo,Zookeeper,微服务,vuejs,css3,html5,Node,git,github,markdown",
      },
    ],
    ["meta", { name: "baidu-site-verification", content: "code-UZwHLL02hz" }], // 百度统计的站长验证（你可以去掉）
    [
      "meta",
      {
        name: "google-site-verification",
        content: "Tq0dPCkigu48T8b7pBXwKAT7NTC3_4ZqTj9e2n5lG6E",
      },
    ], // Google的站长验证（你可以去掉）
    ["meta", { name: "theme-color", content: "#11a8cd" }], // 移动浏览器主题颜色
    // [
    //   'script',
    //   {
    //     'data-ad-client': 'ca-pub-7828333725993554',
    //     async: 'async',
    //     src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
    //   },
    // ], // 网站关联Google AdSense 与 html格式广告支持（你可以去掉）
    // 添加百度统计
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?ecf13ffee9f4083d9a74b337b541f90b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

  // 插件配置
  plugins: <UserPlugins>[
    [
      "sitemap", // 网站地图
      {
        hostname: WEB_SITE,
      },
    ],

    "vuepress-plugin-baidu-autopush", // 百度自动推送

    [
      "vuepress-plugin-baidu-tongji", // 百度统计
      {
        hm: baiduCode,
      },
    ],

    // 全文搜索。 ⚠️注意：此插件会在打开网站时多加载部分js文件用于搜索，导致初次访问网站变慢。如在意初次访问速度的话可以不使用此插件！（推荐：vuepress-plugin-thirdparty-search）
    // 'fulltext-search',

    // 可以添加第三方搜索链接的搜索框（继承原官方搜索框的配置参数）
    [
      "thirdparty-search",
      {
        thirdparty: [
          {
            title: "在Google中搜索",
            frontUrl: "https://www.google.com.hk/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          // {
          //   title: "在Runoob中搜索",
          //   frontUrl: "https://www.runoob.com/?s=",
          // },
          // {
          //   title: "在Vue API中搜索",
          //   frontUrl: "https://cn.vuejs.org/v2/api/#",
          // },
          {
            title: "在MDN中搜索",
            frontUrl: "https://developer.mozilla.org/zh-CN/search?q=", // 搜索链接的前面部分
            behindUrl: "", // 搜索链接的后面部分，可选，默认 ''
          },
          {
            title: "在Bing中搜索",
            frontUrl: "https://cn.bing.com/search?q=",
          },
          {
            title: "在百度中搜索",
            frontUrl: `https://www.baidu.com/s?wd=site%3A${DOMAIN_NAME}%20`,
          },
        ],
      },
    ],

    [
      "one-click-copy", // 代码块复制按钮
      {
        copySelector: [
          'div[class*="language-"] pre',
          'div[class*="aside-code"] aside',
        ], // String or Array
        copyMessage: "复制成功", // default is 'Copy successfully and then paste it for use.'
        duration: 1000, // prompt message display time.
        showInMobile: false, // whether to display on the mobile side, default: false.
      },
    ],

    [
      "demo-block", // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      {
        settings: {
          // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
          // cssLib: ['http://xxx'], // 在线示例中的css依赖
          // vue: 'https://fastly.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
          jsfiddle: false, // 是否显示 jsfiddle 链接
          codepen: true, // 是否显示 codepen 链接
          horizontal: false, // 是否展示为横向样式
        },
      },
    ],
    [
      "vuepress-plugin-zooming", // 放大图片
      {
        selector: ".theme-vdoing-content img:not(.no-zoom)", // 排除class是no-zoom的图片
        options: {
          bgColor: "rgba(0,0,0,0.6)",
        },
      },
    ],
    // [
    //   'vuepress-plugin-comment', // 评论
    //   {
    //     choosen: 'gitalk',
    //     options: {
    //       clientID: 'clientID',
    //       clientSecret: 'clientSecret',
    //       repo: 'blog-gitalk-comment', // GitHub 仓库
    //       owner: 'xugaoyi', // GitHub仓库所有者
    //       admin: ['xugaoyi'], // 对仓库有写权限的人
    //       // distractionFreeMode: true,
    //       pagerDirection: 'last', // 'first'正序 | 'last'倒序
    //       id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
    //       title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
    //       labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
    //       body:
    //         '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
    //     },
    //   },
    // ],
    [
      // 使用本地插件
      // resolve(__dirname, '../../../vuepress-plugin-vdoing-comment'), // 评论
      // 使用npm仓库
      "vuepress-plugin-vdoing-comment", // 评论
      {
        choosen: "artalk",
        options: {
          server: "https://talk.siyuan.wiki",
          site: "远方的灯塔",
          disableEmotion: false,
          disablePicture: true,
          disablePreview: false,
        },
      },
    ],
    [
      "@vuepress/last-updated", // "上次更新"时间格式
      {
        transformer: (timestamp, lang) => {
          return dayjs(timestamp).format("YYYY/MM/DD, HH:mm:ss");
        },
      },
    ],
  ],

  markdown: {
    lineNumbers: true,
    extractHeaders: ["h2", "h3", "h4", "h5", "h6"], // 提取标题到侧边栏的级别，默认['h2', 'h3']
  },

  // 监听文件变化并重新构建
  extraWatchFiles: [
    ".vuepress/config.ts",
    // '.vuepress/config/htmlModules.ts',
  ],
});
