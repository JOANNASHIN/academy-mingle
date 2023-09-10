'use client';

import Link from 'next/link';
import style from './Footer.style';

interface IFooterProps {}

const Footer = (props: IFooterProps) => {
  return (
    <footer css={style} className="footer">
      <nav className="footer__wrapper">
        <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/credit-card.svg" alt="프로필" />
          <span className="footer__menu__name">청구/납부</span>
        </Link>
        <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/megaphone-fill.svg" alt="프로필" />
          <span className="footer__menu__name">공지등록</span>
        </Link>
        <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/calendar-check.svg" alt="프로필" />
          <span className="footer__menu__name">상담일정</span>
        </Link>
        <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/checklist.svg" alt="프로필" />
          <span className="footer__menu__name">출결/숙제</span>
        </Link>
        <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/three-dots.svg" alt="프로필" />
          <span className="footer__menu__name">더보기</span>
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
