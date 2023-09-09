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
          <a href="#">전체보기 &gt;</a>
        </div>

        {/* 1안 */}
        {false && 
          <div className="box-calendar">
            {Array.from({length: 31}, (v, i) => i + 1).map(number => (
              <div key={number}>
                <span className={`box-calendar-date ${number % 4 == 0 ? 'has' : ''}`}>{number}</span>
              </div>
            ))}
          </div>
        }

        {/* 2안 */}
        <div className="box-week">
          {Array.from({length: 7}, (v, i) => i + 1).map((number, index) => (
            <div className="box-week-wrapper" key={number}>
              {/* {index === 0 && <span className='today'>today</span> } */}
              <span className={`box-calendar-date ${number % 3 == 0 ? 'has' : ''}`}>
                9/{number} 
                <br/>
                목
              </span>
            </div>
          ))}
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
          <a href="#">날짜별 일정 확인</a>
          <a href="#">선생님별 일정확인</a>
          <a href="#">상담이력 확인</a>
        </nav>
      </section>

      <section className="border-gray-box">
        <div className="box-top">
          <span className="box-title">청구/납부</span>
          <a href="#">전체보기 &gt;</a>
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
          <a href="#">청구서 발행</a>
        </nav>
      </section>

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
    </section>
  );
};

export default AcademyMain;
