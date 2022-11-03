/**
 * 生成Google站点地图
 */
const fs = require('fs');
const path = require('path');
const chalk = require('chalk')
const matter = require('gray-matter'); // FrontMatter解析器 https://github.com/jonschlinkert/gray-matter
const readFileList = require('./modules/readFileList');
const urlsRoot = path.join(__dirname, '..', 'sitemap.xml'); // Google站点地图
const DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数
const dayjs = require('dayjs')

if (!DOMAIN) {
    console.log(chalk.red('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/googleSitemap.js https://terwergreen.com'))
    return
}

main();

/**
 * 主体函数
 */
function main() {
    // xml定义
    // fs.writeFileSync(urlsRoot, DOMAIN)
    fs.writeFileSync(urlsRoot, '<?xml version="1.0" encoding="UTF-8"?>');
    const files = readFileList(); // 读取所有md文件数据

    // 首页
    var idx = `\r\n		<loc>${DOMAIN}</loc>`;
    fs.appendFileSync(urlsRoot, '\r\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    fs.appendFileSync(urlsRoot, "\r\n	<url>");
    fs.appendFileSync(urlsRoot, idx);
    var nowdt = new Date().toISOString();// formatDayjsDate(dayjs(new Date()));
    var nowdtstr = `\r\n		<lastmod>${nowdt}</lastmod>`;
    fs.appendFileSync(urlsRoot, nowdtstr);
    fs.appendFileSync(urlsRoot, "\r\n		<changefreq>daily</changefreq>");
    fs.appendFileSync(urlsRoot, "\r\n		<priority>0.9</priority>");
    fs.appendFileSync(urlsRoot, "\r\n	</url>");

    // 站点地图不超过10000
    const MAX_LINK_COUNT = 30000;
    var linkCount = 0;

    files.forEach( file => {
        if (linkCount < MAX_LINK_COUNT){
            linkCount++;

            const { data } = matter(fs.readFileSync(file.filePath, 'utf8'));

            // var isInRange = false;
            // if(data.date){
            //   // 只获取7天之内发布的文章
            //   var day = dayjs().subtract(7, 'day').format();
            //   var pdate = dayjs(data.date);

            //   isInRange = pdate.isAfter(day);
            //   // console.log(pdate.isAfter(day));
            //   // console.log(pdate.format());
            // }

            // 文章静态链接
            if (data.permalink) {
                const link = `${DOMAIN}${data.permalink}`;
                const linkstr = `\r\n		<loc>${link}</loc>`;
                if(link.indexOf("html") > -1){
                    // console.log(link)
                    fs.appendFileSync(urlsRoot, "\r\n	<url>");

                    fs.appendFileSync(urlsRoot, linkstr);

                    var pubdate = (new Date()).toISOString();
                    if (data && data.date) {
                        pubdate = dayjs(data.date).toISOString(); // formatDayjsDate(dayjs(data.date));
                    }
                    console.log(pubdate +  "=>" + link)
                    var pubstr = `\r\n		<lastmod>${pubdate}</lastmod>`;
                    fs.appendFileSync(urlsRoot, pubstr);
                    fs.appendFileSync(urlsRoot, "\r\n		<changefreq>daily</changefreq>");
                    fs.appendFileSync(urlsRoot, "\r\n		<priority>0.8</priority>");

                    fs.appendFileSync(urlsRoot, "\r\n	</url>");
                }else{
                    // console.log("not html,ignore...")
                }
            }
        }
    })

    // 文章尾部
    fs.appendFileSync(urlsRoot, '\r\n</urlset>');
    console.log("共处理链接数目：" + linkCount)
}

function formatDayjsDate(dt){
    var m = dt.month() > 9 ? (dt.month() + 1) : ("0" + (dt.month() + 1));
    var d = dt.date() > 9 ? dt.date() : ("0" + dt.date());
    var result = dt.get("y") + "-" + m + "-" + d;
    return result;
}