import { css } from '@emotion/react';
import { HeaderHeight } from '@/components/layouts/header/Header.style';
import { color } from '@/styles/variants';

const style = css`
  position: relative;
  width: 100%;
  padding-top: ${HeaderHeight};
  background: ${color.bg};

  main {
    position: relative;
    width: 100%;
    height: 100%;
  }
`;

export default style;
