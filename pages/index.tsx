import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
// import MentorSvg from '../public/images/mentor.svg'
import { useEffect } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { faqData } from '../data/faqData';
import FaqItem from '../components/FAQs/FaqItem';




export default function Home() {
  useEffect(() => {
    // تنظیمات از next.config.js
    const { serverRuntimeConfig } = require('../next.config');

    // چاپ پیام در کنسول هنگام اجرای سرور
    console.log(serverRuntimeConfig.consoleMessage);
  }, []);

  return (
    <>
    <Head>
      <title>برنامه نویسی با روش نوین| استارکوچ</title>
      <meta name="description" content="برنامه نویسی را بصورت پروژه محور ، گروهی و زیرنظر منتورها یاد بگیر" key="desc" />
        <meta property="og:title" content=" آموزش برنامه نویسی با روشی نوین در استارکوچ" />
        <meta
          property="og:description"
          content="برنامه نویسی را بصورت پروژه محور ، گروهی و زیرنظر منتورها یاد بگیر"
        />
        <meta
          property="og:image"
          content='https://starcoach-files.storage.iran.liara.space/main-image.png'
        />
    </Head>
    <div className={styles.Home}>
      <Navbar></Navbar>

      <div id={styles.part1}>
        <img id={styles.mainImage} src='https://starcoach-files.storage.iran.liara.space/main-image.png' alt='programing learning'/>
        <div>
          <h1 className={styles.mainH1} >
            برنامه نویسی رو با روشی نوین از استارکوچ یاد بگیر
          </h1>

          <h1 className={styles.mainH1Mobile}>
          برنامه نویسی رو با روشی نوین از استارکوچ یاد بگیر 
          </h1>

          {/* <h2 id={styles.mainH2}>
            یادگیری برنامه نویسی با روش جدید
          </h2> */}

          <p id={styles.mainP}>
          با استارکوچ ، برنامه نویسی رو در کنار دیگران و بصورت پروژه محور یاد بگیر و خودت رو برای ورود به بازار کار آماده کن

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
          <h2>
            در استارکوچ چطور برنامه نویسی یاد می گیریم؟
          </h2>

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
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/third-step.png' alt='chat and video call with mentors'/>

              <hr></hr>

              <h3 id={styles.textInCard}>
                در چت با منتور های استارکوچ ابهاماتتان را حل می کنید و هفته ای دو تماس تصویری با آنها دارید
              </h3>
            </div>
          </div>

          <div id={styles.cardAndNumber}>
            <div id={styles.number}>
              2
            </div>

            <div id={styles.card}>
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/second-step.png' alt='teamwork'/>

              <hr></hr>

              <h3 id={styles.textInCard}>
                با دیگر دانشجویان دوره به گروه های 5 نفره تقسیم می شوید و تسک ها را گروهی انجام می دهید
              </h3>
            </div>
          </div>

          <div id={styles.cardAndNumber}>
            <div id={styles.number}>
              1
            </div>

            <div id={styles.card}>
              <img id={styles.imgInCard} src='https://starcoach-files.storage.iran.liara.space/first-step.png' alt='business man coaches'/>

              <hr></hr>

              <h3 id={styles.textInCard}>
                از متخصصان و افراد موفق نقشه راه و پروژه برای شما گرفته می شود
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div id={styles.part3}>
        <div id={styles.headerP2}>
          <h2>
            استارکوچ یک سایت آموزش آنلاین عادی نیست چون
          </h2>

          <div id={styles.square}></div>
        </div>

        <div id={styles.imgAndIconsP3}>
          <div id={styles.iconsP3}>
            <div id={styles.iconsInRowP3}>
              <div id={styles.iconAndTextP3}>
                <img id={styles.IconP3} src='https://starcoach-files.storage.iran.liara.space/chat.png' alt='chat'/>

                <h3 id={styles.textP3}>
                  هر زمان که بخواهید می تونید با منتور ها چت کنید
                </h3>
              </div>

              <div id={styles.iconAndTextP3}>
                <img id={styles.IconP3} src='https://starcoach-files.storage.iran.liara.space/video%20call.png' alt='videocall'/>

                <h3 id={styles.textP3}>
                  هفته ای 2 تماس تصویری با منتور و همکلاسی ها دارید
                </h3>
              </div>
            </div>

            <div id={styles.iconsInRowP3}>
              <div id={styles.iconAndTextP3}>
                <img id={styles.IconP3} src='https://starcoach-files.storage.iran.liara.space/teamate.png' alt='teamwork'/>

                <h3 id={styles.textP3}>
                  با همکلاسی هاتون ارتباط دارید و گروهی کار می کنید
                </h3>
              </div>

              <div id={styles.iconAndTextP3}>
                <img id={styles.IconP3} src='https://starcoach-files.storage.iran.liara.space/project.png' alt='project based'/>

                <h3 id={styles.textP3}>
                  اینجا روی پروژه های واقعی کار می کنید
                </h3>
              </div>
            </div>
          </div>

          <img id={styles.imgP3} src='https://starcoach-files.storage.iran.liara.space/Objects.png' alt='Starcoah benfits'/>
        </div>

      </div>

      <div id={styles.part4}>
        <div id={styles.headerP2}>
          <h2>
            دانشجو های سابق استارکوچ چگونه ما را توصیف می کنند؟
          </h2>

          <div id={styles.square}></div>
        </div>

        <div dir='rtl' id={styles.commentCards}>
          <div id={styles.commentCard}>
            <img id={styles.commentsImg} src='https://starcoach-files.storage.iran.liara.space/comments-image.png' alt='طه حسین پور'/>

            <p id={styles.commentsWriter}>
              طه حسین پور
            </p>

            <p id={styles.writersJob}>
              دانشجوی مدیریت محصول
            </p>

            <p id={styles.comment}>
              واقعا فکر نمی کردم یک آموزش مجازی همچین کیفیتی داشته باشه. تجربه بی نظیری برای من بود و ممنون از تیم استارکوچ
            </p>
          </div>

          <div id={styles.commentCard}>
            <img id={styles.commentsImg} src='https://starcoach-files.storage.iran.liara.space/comments-image.png' />

            <p id={styles.commentsWriter}>
              طه حسین پور
            </p>

            <p id={styles.writersJob}>
              دانشجوی مدیریت محصول
            </p>

            <p id={styles.comment}>
              واقعا فکر نمی کردم یک آموزش مجازی همچین کیفیتی داشته باشه. تجربه بی نظیری برای من بود و ممنون از تیم استارکوچ
            </p>
          </div>

          <div id={styles.commentCard}>
            <img id={styles.commentsImg} src='https://starcoach-files.storage.iran.liara.space/comments-image.png' />

            <p id={styles.commentsWriter}>
              طه حسین پور
            </p>

            <p id={styles.writersJob}>
              دانشجوی مدیریت محصول
            </p>

            <p id={styles.comment}>
              واقعا فکر نمی کردم یک آموزش مجازی همچین کیفیتی داشته باشه. تجربه بی نظیری برای من بود و ممنون از تیم استارکوچ
            </p>
          </div>
        </div>
      </div>

      <div id={styles.part5}>
        <div id={styles.headerP2}>
          <h3>
            سوالات متداول
          </h3>

          <div id={styles.square}></div>
        </div>

        <div id={styles.questionBoxes}>
          <div className="faq-list">
            {faqData.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

        </div>
      </div>
    </div>
    </>
  )
}
