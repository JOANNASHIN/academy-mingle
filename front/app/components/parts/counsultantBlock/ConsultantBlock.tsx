const ConsultantBlock = () => {
  return (
    <section className="border-gray-box">
      <div className="box-top">
        <span className="box-title">상담</span>
        <a href="#">전체보기 &gt;</a>
      </div>

      {/* 1안 */}
      {false && (
        <div className="box-calendar">
          {Array.from({ length: 31 }, (v, i) => i + 1).map(number => (
            <div key={number}>
              <span className={`box-calendar-date ${number % 4 == 0 ? 'has' : ''}`}>{number}</span>
            </div>
          ))}
        </div>
      )}

      {/* 2안 */}
      <div className="box-week">
        {Array.from({ length: 7 }, (v, i) => i + 1).map((number, index) => (
          <div className="box-week-wrapper" key={number}>
            {/* {index === 0 && <span className='today'>today</span> } */}
            <span className={`box-calendar-date ${number % 3 == 0 ? 'has' : ''}`}>
              9/{number}
              <br />목
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
  );
};

export default ConsultantBlock;
