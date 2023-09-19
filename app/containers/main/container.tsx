import Layout from '@/components/layouts/layout/Layout';
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
    <Layout css={style}>
      <h2 className="blind">메인페이지</h2>

      <AcademyMain />
    </Layout>
  );
};

export default container;
