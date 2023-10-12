import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div id={styles.footer}>
            <div id={styles.description_logo_links_aboutUs}>
                <div dir='rtl' id={styles.descriptionAndLogo}>
                    <img id={styles.logoWithoutName} src='https://starcoach-files.storage.iran.liara.space/logo-without-name.png' />

                    <p id={styles.description}>
                        در استارکوچ هیچ ویدئویی تولید نمی شه چون تیم استارکوچ معتقد هست که ویدیوی آموزشی در سایت های مختلف در دسترس هست  و دانشجو ها می تونند از سایت های دیگه ویدیو های با کیفیت رو دنبال کنند اما ما در سایت استارکوچ تمرکز مان را بر این گذاشته ایم
                    </p>
                </div>

                <div dir='rtl' id={styles.linksAndAboutUs}>
                    <h3 className={styles.footerH3}>
                    لینک های مفید
                    </h3>

                    <div  id={styles.footerLinks}>
                        <a href='#' className={styles.footerLink}>دوره ها</a>
                        <a href='#' className={styles.footerLink}>سامانه آموزشی</a>
                        <a href='#' className={styles.footerLink}>درباره ما</a>
                    </div>

                    <h3 className={styles.footerH3}>
                    ارتباط با ما
                    </h3>

                    <div id={styles.aboutUs}>
                        <div dir='ltr' id={styles.phoneNumberAndIcon}>
                            <img id={styles.phoneIcon} src='https://starcoach-files.storage.iran.liara.space/phone.png'/>

                            <p id={styles.phoneNumber}>۰۹۳۷۸۳۲۸۳۵۱</p>
                        </div>

                        <div dir='ltr' id={styles.emailAndIcon}>
                            <img id={styles.emailIcon} src='https://starcoach-files.storage.iran.liara.space/email.png'/>

                            <p id={styles.email}>kambyzshayan@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <div dir='rtl' id={styles.socialNetworks}>
            <hr id={styles.line1}></hr>

            <img className={styles.appLogo} src='https://starcoach-files.storage.iran.liara.space/Instagram%20logo.png'/>
            <a href='https://www.linkedin.com/company/starcoach-ir/'><img className={styles.appLogo} src='https://starcoach-files.storage.iran.liara.space/Linkedin%20logo.png'/></a>
            <img className={styles.appLogo} src='https://starcoach-files.storage.iran.liara.space/X%20logo.png'/>
            <img className={styles.appLogo} src='https://starcoach-files.storage.iran.liara.space/eitaa%20logo.png'/>
            <img className={styles.appLogo} src='https://starcoach-files.storage.iran.liara.space/Telegram%20logo.png'/>

            <hr id={styles.line2}></hr>
            </div>

            <p id={styles.rules}>
            تمامی حقوق این سایت متعلق به گروه استارکوچ می باشد و نقل مطالب به هر شیوه و با هر عنوان، تخلف محسوب شده و متخلفین بر اساس قوانین جاری کشور مورد پیگرد قانونی قرار می گیرند
            </p>
        </div>
    );
};

export default Footer;