import { color } from '@/styles/variants';
import { css } from '@emotion/react';

export const HeaderHeight = '6rem';

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .header {
    &__wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1280px;
      height: ${HeaderHeight};
      padding: 0 1.2rem;
      box-sizing: border-box;
    }

    &__logo {
      span {
        color: ${color.point};
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: 0.1rem;
      }
    }

    &__nav {
      &__menu {
        padding: 0.8rem;

        img {
          width: 2rem;
        }
      }
    }
  }
`;

export default style;
