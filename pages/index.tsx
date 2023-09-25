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

      <div>
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
    </div>
  )
}
