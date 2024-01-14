import PaymentBlock from '@/components/parts/payment/paymentBlock/Payment';
import style from './style';
import ConsultantBlock from '@/components/parts/consultant/counsultantBlock/ConsultantBlock';

const AcademyMain = () => {
  return (
    <section css={style} className="main">
      <h3 className="main-title">아밍글학원</h3>

      {/* 학생 */}
      <AttendanceBlock />
      
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
    </section>
  );
};

export default AcademyMain;
