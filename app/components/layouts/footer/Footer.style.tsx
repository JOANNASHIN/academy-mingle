import { color, zIndex } from '@/styles/variants';
import { css } from '@emotion/react';

export const HeaderHeight = '6rem';

const style = css`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: ${zIndex.floating};
  width: 100%;
  height: 5rem;
  background: ${color.bg};
  border-top: 1px solid ${color.greyeee};

  .footer {
    &__wrapper {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      width: 100%;
      padding: 0 1.2rem;
      box-sizing: border-box;

      //todo safe-area
    }

    &__menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0.8rem;

      img {
        height: 2rem;
      }

      &__name {
        margin-top: 0.6rem;
        font-size: 1rem;
        color: ${color.greyaaa};
      }
    }
  }
`;

export default style;
