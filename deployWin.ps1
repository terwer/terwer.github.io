# git init
git config user.name "terwer"
git config user.email "youweics@163.com"

git pull --force

$today=Get-Date
$msg="Update blog at $today"
$githubUrl=git@github.com:terwer/terwer.github.io.git

git add -A
git commit -m "${msg}"
git push $githubUrl

Write-Output "publish finished. --form powershell"