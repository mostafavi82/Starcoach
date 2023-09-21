import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import MentorSvg from '../public/images/mentor.svg'
import { useEffect } from 'react';




export default function Home() {
  useEffect(() => {
    // تنظیمات از next.config.js
    const { serverRuntimeConfig } = require('../next.config');

    // چاپ پیام در کنسول هنگام اجرای سرور
    console.log(serverRuntimeConfig.consoleMessage);
  }, []);

  return (
    <div className={styles.Home}>
    </div>
  )
}
