'use client';

import Link from 'next/link';
import style from './Footer.style';
import NoticeFormModal from '@/components/parts/notice/noticeFormModal/NoticeFormModal';
import { useRef } from 'react';
import { useModal } from '@/hooks/useModal';

interface IFooterProps {}

const Footer = (props: IFooterProps) => {
  const { openModal } = useModal();
  const refNoticeFormModal = useRef(null);

  const activeKey = 'home';

  return (
    <>
      <footer css={style} className="footer">
        <nav className="footer__wrapper">
          <Link className={`footer__menu ${activeKey === 'home' ? '' : ''}`} href="/">
            <img src={`/assets/images/icon/house.svg`} alt="홈" />
            <span className="footer__menu__name">홈</span>
          </Link>
          <Link className="footer__menu" href="/">
            <img src="/assets/images/icon/credit-card.svg" alt="프로필" />
            <span className="footer__menu__name">청구/납부</span>
          </Link>
          <button className="footer__menu notice" onClick={() => openModal(refNoticeFormModal)}>
            {/* <img src="/assets/images/icon/megaphone.svg" alt="프로필" /> */}
            <img src="/assets/images/icon/plus-circle-point.svg" alt="프로필" />
            <span className="footer__menu__name">공지등록</span>
          </button>
          {/* <Link className="footer__menu" href="/">
          <img src="/assets/images/icon/calendar-check.svg" alt="프로필" />
          <span className="footer__menu__name">상담일정</span>
        </Link> */}
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

      <NoticeFormModal ref={refNoticeFormModal} />
    </>
  );
};

export default Footer;
