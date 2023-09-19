import PaymentBlock from '@/components/parts/paymentBlock/Payment';
import style from './style';
import ConsultantBlock from '@/components/parts/counsultantBlock/ConsultantBlock';
import Link from 'next/link';

const mainType2 = () => {
  return (
    <section css={style} className="main">
      <h3 className="main-title">야놀자학원</h3>

      <form className="search">
        <fieldset>
          <div className="search__text">
            <em>아밍글이 처음이신가요?</em>
            <p>아밍글의 다양한 서비스를 검색해 보세요.</p>
          </div>

          <label className="search__form">
            <button>
              <img src="/assets/images/icon/search.svg" alt="검색이미지" />
            </button>
            <input type="text" placeholder="아밍글 메뉴 바로가기" />
          </label>
        </fieldset>
      </form>

      <nav className="nav__wrapper">
        <Link className="nav__menu" href="/">
          <figure>
            <img src="/assets/images/icon/credit-card.svg" alt="프로필" />
          </figure>
          <span className="nav__menu__name">청구/납부</span>
        </Link>
        <Link className="nav__menu" href="/">
          <figure>
            <img src="/assets/images/icon/megaphone-fill.svg" alt="프로필" />
          </figure>
          <span className="nav__menu__name">공지등록</span>
        </Link>
        <Link className="nav__menu" href="/">
          <figure>
            <img src="/assets/images/icon/calendar-check.svg" alt="프로필" />
          </figure>
          <span className="nav__menu__name">상담일정</span>
        </Link>
        <Link className="nav__menu" href="/">
          <figure>
            <img src="/assets/images/icon/checklist.svg" alt="프로필" />
          </figure>
          <span className="nav__menu__name">출결/숙제</span>
        </Link>
        <Link className="nav__menu" href="/">
          <figure>
            <img src="/assets/images/icon/three-dots.svg" alt="프로필" />
          </figure>
          <span className="nav__menu__name">더보기</span>
        </Link>
      </nav>

      <div className="main-wrapper">
        {/* 학생 */}
        <section className="border-gray-box">
          <div className="box-top">
            <span className="box-title">전체 출석현황</span>
          </div>

          <div className="box-cont">
            <dl className="box-desc">
              <dt>출석</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
            <dl className="box-desc">
              <dt>결석</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
            <dl className="box-desc">
              <dt>조퇴</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
          </div>

          <nav className="box-nav">
            <a href="#">클래스별 출석현황 전체 보기</a>
          </nav>
        </section>

        {/* 상담 */}
        <ConsultantBlock />

        {/* 청구/납부 */}
        <PaymentBlock />

        <section className="border-gray-box">
          <div className="box-top">
            <span className="box-title">공지사항</span>
            <a href="#">전체보기 &gt;</a>
          </div>
          <div className="box-cont">
            <dl className="box-desc">
              <dt>현재 알림 중</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
          </div>

          <nav className="box-nav">
            <a href="#">공지 등록하기</a>
            <a href="#">공지 확인하기</a>
          </nav>
        </section>

        <section className="border-gray-box">
          <div className="box-top">
            <span className="box-title">학원관리</span>
            <a href="#">정보관리 &gt;</a>
          </div>
          <div className="box-cont">
            <dl className="box-desc">
              <dt>학생</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
            <dl className="box-desc">
              <dt>선생님</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
            <dl className="box-desc">
              <dt>클래스</dt>
              <dd>
                <span>0</span>
              </dd>
            </dl>
          </div>

          <nav className="box-nav">
            <a href="#">학생 관리</a>
            <a href="#">선생님 관리</a>
            <a href="#">클래스 관리</a>
          </nav>
        </section>
      </div>
    </section>
  );
};

export default mainType2;
