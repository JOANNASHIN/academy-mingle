import { useRouter } from 'next/router';
import style from './style';

const container = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div css={style}>
      <h1>main</h1>
    </div>
  );
};

export default container;
