# git init
git config user.name "terwer"
git config user.email "youweics@163.com"

git pull --force

$today=Get-Date
$msg="Update blog at $today"

git add -A
git commit -m "${msg}"
git push

Write-Output "publish finished. --form powershell"