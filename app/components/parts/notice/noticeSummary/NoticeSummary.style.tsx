import { css } from '@emotion/react';

const style = css`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  .noti {
    &__icon {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 0 0 10%;

      img {
        width: 40%;
      }
    }

    &__cont {
    }

    &__title {
      flex: 1 1 auto;
      text-align: left;
      font-weight: bold;
      font-size: 1.2rem;
    }

    &__check {
      flex: 0 0 20%;
    }
  }
`;
export default style;
