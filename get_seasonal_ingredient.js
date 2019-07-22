//https://www.kudamononavi.com/calendar/から果物の一覧(URL)を取得するコード
//第一段階
const puppeteer = require('puppeteer');
const fs = require("fs");

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://www.kudamononavi.com/calendar/');
  let listSelector = "div.table-responsive > table > tbody > tr > td.tbl_name > a ";
  let datas = await page.evaluate( (selector) => {
    const list = Array.from(document.querySelectorAll(selector));
    return list.map(data => data.getAttribute("href"));
  }, listSelector);
  
  console.log(datas);
  fs.writeFile('./zairyo.json', JSON.stringify(datas) , function(err) {console.log(err)});
  
  await page.screenshot({path: 'example.png'});

  await browser.close();
})()
.catch(err => {
  console.log(err);
});