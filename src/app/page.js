import styles from './page.module.css'
import { getData } from './api/route';
const cheerio = require('cheerio');

const trimDay = arr => {
  const modifiedArr = arr[1]
    .split(/(?![^(]*\))\b(?=[A-Z])/)
    .map(item => item.trim()).filter(item => item !== '')

  return modifiedArr;
};

const getDayLunchlist = body => {


  const $ = cheerio.load(body);
  const textTrimmed = $.text().replace(/(\r\n|\n|\r)/gm, "");
  const patternMonday = /Maanantai(.*?)Tiistai/;
  /* const patternTuesday = /Tiistai(.*?)Keskiviikko/; */
  const result = textTrimmed.match(patternMonday);
  return trimDay(result)
}


export default async function Home() {
  const data = await getData(process.env.MAPLESTR_URL)
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