---
layout: post
date: 2023-03-19 14:52:30
categories: []
title: css-hover-focus状态改变其他元素样式
permalink: /post/csshoverfocus-state-changes-other-element-styles-z1ga4vm.html
tagline: >-
  a_hover{改变b的样式}这样效果就不需要用到javascript。这个就是css选择器的使用情况了假设悬浮元素是a样式改变元素是b俩个元素之间的关系就是b是a的子元素就可以使用a_hoverb{…}​。还有就是b刚好是a的同级元素并且是紧接着的就可以a_hoverb{…}​还有就是b这一类的元素都是a的同级元素并且是a元素之后的就可以a_hover~b{…}​还有就自己去看吧。stylus示例#meilisearchbox__vdeep(aisinstantsearch)searchboxaisse
tags:
  - 元素
  - 就是
  - 改变
  - 样式
  - 可以
published: true
---



A:hover { 改变 B 的样式 }， 这样效果就不需要用到 javascript。
这个就是 css 选择器的使用情况了，假设悬浮元素是 a，样式改变元素是 b,俩个元素之间的关系就是 b 是 a 的子元素就可以使用 `a:hover>b{…}`​ 。
还有就是 b 刚好是 a 的同级元素并且是紧接着的，就可以 `a:hover+b{…}`​ 还有就是 b 这一类的元素都是 a 的同级元素并且是 a 元素之后的就可以 `a:hover~b{…}`​ 还有就自己去看吧。

stylus 示例

```stylus
#meili-search-box
  ::v-deep(.ais-InstantSearch)
    .searchbox
      .ais-SearchBox-form
        input
          color var(--textColor)
          &:focus
            cursor auto
            border-color #11a8cd
        .ais-SearchBox-submit
          display none
      &:hover
        background red
        ~ .ais-Hits
          display:block
    .ais-Hits
      display none
```

hover 点不到以及闪烁问题

```stylus
&::after
  content: " ";
  width: 700px;
  height: calc(100vh - 6rem);
  position: absolute
```

```stylus
.ais-Hits
  pointer-events none
  display none
```

​​

​![描述啊啊](assets/image-20230320095111-gibttxe.png "测试1")​
