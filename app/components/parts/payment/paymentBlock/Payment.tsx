const PaymentBlock = () => {
  const handleRemind = () => {
    const want = confirm('전체 수강생 부모님에게 리마인드 알림을 보내시겠습니까?');

    if (want) alert('알림이 전송되었습니다.');
  };
  return (
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
        <a href="#" onClick={handleRemind}>
          전체 리마인드 알림
        </a>
        <a href="#">청구서 발행</a>
      </nav>
    </section>
  );
};

export default PaymentBlock;
