import { css } from '@emotion/react';
import { HeaderHeight } from '@/components/header/Header.style';

const style = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: ${HeaderHeight};

  main {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export default style;
