import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div id={styles.navbar}>
      <button id={styles.signupBtn} className={styles.mainBtn}>
        ورود / ثبت نام
      </button>

      <div id={styles.menuAndLogo}>
        <button id={styles.menu}>
          دوره ها
        </button>

        <button id={styles.menu}>
          سامانه آموزشی
        </button>

        <img id={styles.logo} src='https://starcoach-files.storage.iran.liara.space/logo.png' alt='Starcoach' />
        </div>

        <button id={styles.menuIcon}>
          <img src='https://starcoach-files.storage.iran.liara.space/menu.png' alt='menu'/>
        </button>
    </div>
  );
};

export default Navbar;