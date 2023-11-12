import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  .form {
    &__field {
      padding: 0 1.2rem;
    }
    &__bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 4rem;
    }

    &__submit {
      padding: 1.2rem 2rem;
      background: ${color.black};
      color: ${color.white};
      font-size: 1.4rem;
      line-height: 1;
    }
  }

  label {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 2.4rem;

    span {
      flex: 0 0 4rem;
      margin-right: 1rem;
      font-size: 1.4rem;
    }

    input {
      flex: 1 1 auto;
      height: 3.5rem;
      border: 1px solid ${color.greyddd};
      border-radius: 1rem;
    }

    textarea {
      flex: 0 0 100%;
      height: 20rem;
      margin-top: 1rem;
      border-radius: 1rem;
      border-color: ${color.greyddd};
    }
  }
`;
export default style;
