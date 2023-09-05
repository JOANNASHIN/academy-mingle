import style from './style';

const AcademyMain = () => {
  return (
    <section css={style}>
      <h3 className="blind">학원관리자메인</h3>

      {/* 학생 */}
      <section className="border-gray-box">
        <h4 className="box-title">학생</h4>
        <div className="box-wrapper">
          <dl className="box-desc">
            <dt>현재 재원생</dt>
            <dd>
              <em>1</em>명
            </dd>
          </dl>

          <div>
            <dl>
              <dt>전일 대비</dt>
              <dd>0</dd>
            </dl>
            <dl>
              <dt>전월대비</dt>
              <dd>0</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 수업 */}
      <section>
        <h4>클래스</h4>
        <div>
          <dl>
            <dt></dt>
            <dd>
              <em>1</em>명
            </dd>
          </dl>

          <div>
            <dl>
              <dt>전일 대비</dt>
              <dd>0</dd>
            </dl>
            <dl>
              <dt>전월대비</dt>
              <dd>0</dd>
            </dl>
          </div>
        </div>
      </section>

      <section>
        <h4>청구/납부</h4>
        <div>
          <dl>
            <dt></dt>
            <dd>
              <em>1</em>명
            </dd>
          </dl>

          <div>
            <dl>
              <dt>전일 대비</dt>
              <dd>0</dd>
            </dl>
            <dl>
              <dt>전월대비</dt>
              <dd>0</dd>
            </dl>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AcademyMain;
