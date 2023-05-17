import styles from './page.module.css'
import { getData } from './api/route';
const cheerio = require('cheerio');

const trimDay = (url, arr) => {
  let modifiedArr = arr[1]
    .split(/(?![^(]*\))\b(?=[A-Z])/)
    .map(item => item.trim()).filter(item => item !== '')

  if (url === process.env.FACTORY_URL) {
    // 9 ensimmäistä merkkiä pitää poistaa
    modifiedArr[0] = modifiedArr[0].substring(9)
  } else {
    modifiedArr = modifiedArr.slice(1);
  }

  return modifiedArr;
};

const getDayLunchlist = data => {
  const $ = cheerio.load(data.body);
  const textTrimmed = $.text().replace(/(\r\n|\n|\r)/gm, "");
  const patternMonday = /Maanantai(.*?)Tiistai/;
  /* const patternTuesday = /Tiistai(.*?)Keskiviikko/; */
  const result = textTrimmed.match(patternMonday);
  return trimDay(data.url, result)
}


export default async function Home() {
  const data = await getData(process.env.FACTORY_URL)
  const lunchArr = getDayLunchlist(data)
  console.log('lunchArr: ', lunchArr)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        hello world {lunchArr.map(i => i)}
      </div>
    </main>
  )
}