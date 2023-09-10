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
      padding: 0 2rem;
      box-sizing: border-box;
    }

    &__logo {
      span {
        color: ${color.point};
        font-weight: bold;
        font-size: 2.2rem;
        letter-spacing: 0.1rem;
        text-shadow: 0.1rem 0.4rem 0.5rem rgb(0, 0, 0, 0.1);
      }
    }

    &__nav {
      margin: -1rem;

      &__menu {
        padding: 1rem;

        img {
          height: 2rem;
        }
      }
    }
  }
`;

export default style;
