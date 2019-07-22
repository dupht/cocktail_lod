//https://www.kudamononavi.com/calendar/kudaindivi/cal=[材料ごとのID]　から果物の一覧(URL)を取得するコード
//第二段階
const puppeteer = require('puppeteer');
const fs = require("fs");

const zairyo = require("./zairyo.json");
//zairyo.jsonは"/calendar/kudaindivi/cal=914"のように/calendar以降のURLを持つ材料ごとのIDの配列を提供する

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  let listSelector = "div.table-responsive > table > tbody > tr > td > abbr ";

  for(i = 0; i< 114; i++){
    await page.goto('https://www.kudamononavi.com' + zairyo[i]);
    let datas = await page.evaluate( selector => {
      list = Array.from(document.querySelectorAll(selector));
      return list.map(data => data.getAttribute("title"));
    }, listSelector);
    fs.appendFile('./seasonal_ingredients.json', JSON.stringify(datas) + "," , function(err) {console.log(err)});
  }
  
  await browser.close();
})()
.catch(err => {
  console.log(err);
});