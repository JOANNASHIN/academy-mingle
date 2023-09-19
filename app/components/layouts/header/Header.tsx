'use client';

import Link from 'next/link';
import style from './Header.style';

interface IHeaderProps {}

const Header = (props: IHeaderProps) => {
  return (
    <header css={style} className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">
          <Link href="/">
            <span>AMINGLE</span>
          </Link>
        </h1>

        {/* 퀵메뉴 */}
        <nav className="header__nav">
          <button className="header__nav__menu">
            <img src="/assets/images/icon/bell-white.svg" alt="알림버튼" />
          </button>
          {/* <button className="header__nav__menu">
            <img src="/assets/images/icon/setting.svg" alt="프로필" />
          </button> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
