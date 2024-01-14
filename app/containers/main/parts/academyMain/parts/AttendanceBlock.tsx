const AttendanceBlock = () => {
  return (
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
  );
};
