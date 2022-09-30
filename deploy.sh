#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# git init
# git config user.name "terwer"
# git config user.email "youweics@163.com"

git pull --force

now=`date +"%Y-%m-%d %T"`
if [ -z "$GITHUB_TOKEN" ]; then
  msg="update blog at ${now}"
  githubUrl=git@github.com:terwer/terwer.github.io.git
else
  msg="来自github actions的自动部署=>${now}"
  githubUrl=https://terwer:${GITHUB_TOKEN}@github.com/terwer/terwer.github.io.git
fi

git add -A
git commit -m "${msg}"
git push

echo "publish finished."