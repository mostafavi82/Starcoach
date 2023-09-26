import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import MentorSvg from '../public/images/mentor.svg'
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';




export default function Home() {
  useEffect(() => {
    // تنظیمات از next.config.js
    const { serverRuntimeConfig } = require('../next.config');

    // چاپ پیام در کنسول هنگام اجرای سرور
    console.log(serverRuntimeConfig.consoleMessage);
  }, []);

  return (
    <div className={styles.Home}>
      <Navbar></Navbar>

      <div id={styles.part1}>
        <img id={styles.mainImage} src='https://starcoach-files.storage.iran.liara.space/main-image.png' />
        <div>
          <h1 id={styles.mainH1}>
            برنامه نویسی رو با استارکوچ یاد بگیر
          </h1>

          <h1 id={styles.mainH1Mobile}>
          برنامه نویسی رو پروژه محور و با بیشترین بهره وری یاد بگیر
          </h1>

          <h2 id={styles.mainH2}>
            یادگیری برنامه نویسی با روش جدید
          </h2>

          <p id={styles.mainP}>
         با استارکوچ ، برنامه نویسی رو در کنار دیگران و بصورت پروژه محور یاد بگیر و خودت رو برای ورود به بازار کار آماده کن
          </p>

          <div id={styles.mainButtons}>
            <button id={styles.coursesBtn} className={styles.secondBtn}>
              دوره ها
            </button>
            
            <button className={styles.mainBtn}>
            از اینجا شروع کن
            </button>
          </div>
        </div>
      </div>

      <div id={styles.part2}>
        <div id={styles.headerP2}>
          <h3>
          در استارکوچ چطور برنامه نویسی یاد می گیریم؟
          </h3>

          <div id={styles.square}></div>
        </div>

        <p id={styles.textP2}>
        یادگیری در استارکوچ با خیلی از سایت های دیگه فرق داره! ما در استارکوچ تلاش کردیم آموزش ها پروژه محور باشه ، دانشجو ها با همکلاسی ها و منتور ها ارتباط داشته باشند که کیفیت به بیشترین حد از خودش برسه.
        </p>

        <div id={styles.cards}>
        <div id={styles.cardAndNumber}>
            <div id={styles.number}>
              3
            </div>

            <div id={styles.card}>
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/third-step.png'/>

              <hr></hr>

              <p id={styles.textInCard}>
              در چت با منتور های استارکوچ ابهاماتتان را حل می کنید و هفته ای دو تماس تصویری با آنها دارید
              </p>
            </div>
          </div>

          <div id={styles.cardAndNumber}>
            <div id={styles.number}>
              2
            </div>

            <div id={styles.card}>
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/second-step.png'/>

              <hr></hr>

              <p id={styles.textInCard}>
              با دیگر دانشجویان دوره به گروه های 5 نفره تقسیم می شوید و تسک ها را گروهی انجام می دهید
              </p>
            </div>
          </div>

          <div id={styles.cardAndNumber}>
            <div id={styles.number}>
              1
            </div>

            <div id={styles.card}>
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/first-step.png'/>

              <hr></hr>

              <p id={styles.textInCard}>
              از متخصصان و افراد موفق نقشه راه و پروژه برای شما گرفته می شود
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
