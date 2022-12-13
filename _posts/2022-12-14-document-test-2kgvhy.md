---
layout: post
date: 2022-08-31 13:16:37
categories: []
title: 文档测试
permalink: /2022/08/31/document-test-2kgvhy.html
tags:
  - 测试
  - 文档
  - 下面
  - 看看
  - 无需
published: true
---





## 下面是测试的，无需理会。

代码块测试

[什么是内容块](siyuan://blocks/20200813004931-q4cu8na)

[常见问题](siyuan://blocks/20200813093015-u6bopdt)

[在浏览器上使用](siyuan://blocks/20201004184819-nj8ibyg)

[探测规则](siyuan://blocks/20211010211708-0qn8cpl)

再来看看^上标的显示^

我来看看~下标怎么样~

测试数学公式^（这是备注）^

$E=mc^2$

图表**测试**

类图

```plantuml
@startuml

skinparam backgroundcolor transparent

!include https://unpkg.com/plantuml-style-c4@latest/core.puml

left to right direction

class orders {
   ordertime: varchar(255)
   total: double
   uid: int(11)
   id: int(11)
}
class user {
   username: varchar(50)
   password: varchar(50)
   birthday: varchar(50)
   id: int(11)
}

orders  -[#595959,plain]-^  user   : "uid:id"
@enduml
```

脑图

```plantuml
@startmindmap

skinparam backgroundcolor transparent

!include https://static-rs-terwer.oss-cn-beijing.aliyuncs.com/lib/uml/starter-skin.puml

* 这是脑图
	* 子目录
	* 子目录2

@endmindmap
```

时序图

```plantuml
@startuml

!include https://unpkg.com/plantuml-style-c4@latest/core.puml

Bob ->x Alice
Bob -> Alice
Bob ->> Alice
Bob -\ Alice
Bob \\- Alice
Bob //-- Alice

Bob ->o Alice
Bob o\\-- Alice

Bob <-> Alice
Bob <->o Alice
@enduml
```

流程图

```plantuml
@startuml
!pragma useVerticalIf on

!include https://unpkg.com/plantuml-style-c4@latest/core.puml

start

:开始;

:流程1;

:结束;

stop

@enduml
```



> [测试](siyuan://blocks/20221204180309-s3ognix)

很好
