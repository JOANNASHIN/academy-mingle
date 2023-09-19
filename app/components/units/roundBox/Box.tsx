interface Props {
  title: string;
  topButtonComponent: React.ReactNode;
  ContentComponent: React.ReactNode;
  navComponent: React.ReactNode;

}

const RoundBox = ({ title, topButtonComponent, ContentComponent, navComponent }: Props) => {
  return (
    <section className="border-gray-box">
      <div className="box-top">
        <span className="box-title">{title}</span>
        {topButtonComponent}
      </div>

      <div className="box-cont">
        {ContentComponent}
        {/* <dl className="box-desc">
          <dt>오늘 상담 예약 수</dt>
          <dd>
            <span>0</span>
          </dd>
        </dl> */}
      </div>

      <nav className="box-nav">
        {navComponent}
      </nav>
    </section>
  );
};

export default RoundBox;
