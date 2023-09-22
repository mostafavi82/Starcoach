import React from 'react';
import styles from './Navbar.module.scss';

const Navbar = () => {
  return (
    <div  id={styles.navbar}>
        <button className={styles.mainBtn}>
            ورود / ثبت نام
        </button>

        <div id={styles.menuAndLogo}>
        <button id={styles.menu}>
            دوره ها
        </button>

        <button id={styles.menu}>
            سامانه آموزشی
        </button>

        <img id={styles.logo} src='https://starcoach-files.storage.iran.liara.space/logo.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=342080d4-c2d1-45a3-a670-00ed1438736c%2F20230921%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230921T230900Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=1ebb13cd3f1546c3c1042f962aa0e58c3c57f652d9c8f4771c4abff53a539328'/>
        </div>
    </div>
  );
};

export default Navbar;