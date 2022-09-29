---
title: NodeJS创建一个空文件
date: 2022-04-28 21:32:35
permalink: /post/nodejs-create-an-empty-file.html
categories:
  - 博文
  - 实用技巧
tags:
  - node
  - nodejs
  - file
author: 
  name: terwer
  link: https://github.com/terwer
---

# NodeJS创建一个空文件

创建一个空文件并返回：

```javascript
var fd = fs.openSync(filepath, 'w');
```

直接创建新文件不用返回值

```javascript
fs.closeSync(fs.openSync(filepath, 'w'));
```

