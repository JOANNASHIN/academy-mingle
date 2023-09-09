import AcademyMain from './parts/academyMain';
import style from './style';

const MemberType = {
  Student: 'student',
  Parent: 'Parent',
  Teacher: 'Teacher',
  Academy: 'Academy',
};

const container = () => {
  const type = MemberType.Academy;

  return (
    <section css={style}>
      <h2 className="blind">메인페이지</h2>

      <AcademyMain />
    </section>
  );
};

export default container;
