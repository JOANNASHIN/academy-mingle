import style from './style';

const AcademyMain = () => {
  return (
    <section css={style} className="main">
      <h3 className="main-title">야놀자학원</h3>

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
      <section className="border-gray-box">
        <div className="box-top">
          <span className="box-title">상담</span>
          <a href="#">전체보기</a>
        </div>
        <div className="box-cont">
          <dl className="box-desc">
            <dt>오늘 상담 예약 수</dt>
            <dd>
              <span>0</span>
            </dd>
          </dl>
          <dl className="box-desc">
            <dt>전체 상담 예약 수</dt>
            <dd>
              <span>0</span>
            </dd>
          </dl>
        </div>

        <nav className="box-nav">
          <a href="#">날짜별 상담일정 확인</a>
          <a href="#">선생님별 상담일정 확인</a>
          <a href="#">상담이력 확인</a>
        </nav>
      </section>

      <section className="border-gray-box">
        <div className="box-top">
          <span className="box-title">청구/납부</span>
          <a href="#">전체보기</a>
        </div>
        <div className="box-cont">
          <dl className="box-desc">
            <dt>미납</dt>
            <dd>
              <span>0</span>
            </dd>
          </dl>
          <dl className="box-desc">
            <dt>납부 완료</dt>
            <dd>
              <span>0</span>
            </dd>
          </dl>
        </div>
        <nav className="box-nav">
          <a href="#">전체 리마인드 알림</a>
          <a href="#">월별 보기</a>
        </nav>
      </section>

      <section className="border-gray-box">
        <div className="box-top">
          <span className="box-title">공지사항</span>
          <a href="#">전체보기</a>
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
          <a href="#">클래스별/개별로 확인하기</a>
          <a href="#">공지 등록하기</a>
        </nav>
      </section>

      <section className="main-menus">
        <h3>메뉴</h3>

        <nav className="main-menus-wrapper">
          <a href="#">
            <span>클래스별 관리</span>
          </a>
          <a href="#">
            <span>강사 관리</span>
          </a>
          <a href="#">
            <span>학원 정보 관리</span>
          </a>
        </nav>
      </section>
    </section>
  );
};

export default AcademyMain;
