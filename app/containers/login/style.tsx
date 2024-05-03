import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  .login {
    &__form {
      width: 100%;
      padding: 60px 68px 150px;
      border-radius: 4px;
      box-sizing: border-box;

      legend {
        margin-bottom: 28px;
        color: ${color.black};
        font-size: 32px;
        font-weight: 500;
      }

      &__input {
        display: block;
        margin-bottom: 16px;
        /* 
        input {
          width: 100%;
          height: 50px;
          padding: 0 20px 0;
          background: ${color.bg};
          border: 0;
          border-radius: 4px;
          color: ${color.black};
          line-height: 50px;
          box-sizing: border-box;
        } */
      }

      &__show-pw {
        width: 20px;
        height: 20px;
        font-size: 0;
        color: ${color.greyaaa};
        cursor: pointer;
      }

      &__error {
        display: block;
        margin-top: 4px;
        color: ${color.red};
      }

      &__submit {
        width: 100%;
        padding: 10px 0;
        background: ${color.red};
        border-radius: 4px;
        border: 0;
        color: ${color.black};
        font-size: 16px;
        font-weight: 500;
      }
    }

    &__footer {
      &__division {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
      }

      &__save-id {
        input {
          display: none;

          &:checked + span {
            &:before {
              background: ${color.bg};
            }
          }
        }

        span {
          display: flex;
          align-items: center;
          color: ${color.grey666};
          font-size: 13px;

          &:before {
            content: '';
            display: inline-block;
            width: 16px;
            height: 16px;
            margin-right: 10px;
            background: ${color.black};
            border: 0;
            border-radius: 2px;
          }
        }
      }

      &__help {
        color: ${color.grey666};
        font-size: 13px;
        text-decoration: none;
      }

      &__text {
        color: ${color.grey666};
        font-size: 16px;
        font-weight: 400;
      }

      &__join {
        color: ${color.black};
        text-decoration: none;
      }
    }
  }
`;

export default style;
