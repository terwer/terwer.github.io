---
layout: post
title: 掘金平台图片上传的探索过程
date: '2023-09-08 13:42:22'
permalink: >-
  /post/the-exploration-process-uploaded-by-the-nuggets-platform-picture-zv4zyr.html
published: true
---


1 getToken

```py
### 图片上传-getToken
GET https://api.juejin.cn/imagex/gen_token?client=web
cookie: {{cookie}}
Content-Type: application/json
```

```py
{
  "err_no": 0,
  "err_msg": "success",
  "data": {
    "token": {
      "AccessKeyId": "",
      "SecretAccessKey": "",
      "SessionToken": "",
      "ExpiredTime": "2023-09-08T15:44:36+08:00",
      "CurrentTime": "2023-09-08T13:44:36+08:00"
    }
  }
}
```

2 图片预上传

‍
