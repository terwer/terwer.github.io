# terwergreen.com

<!--
<a href="https://github.com/terwer/src.terwer.github.io/actions/workflows/ci.yml"><img src="https://github.com/terwer/src.terwer.github.io/workflows/CI/badge.svg" alt="ci status"></a>
-->

## 远方的灯塔
专注于服务端技术分享

# 推送更改（推荐）

如果仅仅同步到Gitee（注意：只是发布dist目录并出发jenkins自动部署，不是备份源码），因为有时候Github同步会很慢。

```
yarn pe
```

# 源码备份

会先提交代码到Github仓库，然后通过 `Github Actions` 自动触发Github pages的deploy部署。

```
yarn p
```

Gitee 备份

```bash
yarn pee
```

# 本地预览

```
yarn dev --port 9090
```

# 加密与解密

- 加密

```
yarn encryp
```

```
yarn e
```

- 解密

```
yarn decrypt
```

```
yarn d
```

## 目录说明

docs - 公共目录，发布到公网

secret - 私密记事，不发布

diary - 日记，不发布