import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  padding: 0 1rem;

  .main {
    &-title {
      margin: 2rem 0;
      color: ${color.black};
      font-size: 2rem;
      font-weight: bold;
    }

    &-menus {
      &-wrapper {
        a {
          display: block;
        }
      }
    }
  }

  .border-gray-box {
    overflow: hidden;
    // border: 1px solid ${color.borderLightGrey};
    border-radius: 1rem;
    margin-bottom: 4.8rem;
    background: ${color.bgGrey};

    .box {
      &-top {
        display: flex;
        justify-content: space-between;
        padding: 1.6rem;
        border-bottom: 1px solid ${color.borderLightGrey};

        a {
          color: ${color.black};
          font-size: 1.2rem;
        }
      }

      &-title {
        color: ${color.black};
        font-size: 1.3rem;
        font-weight: bold;
      }

      &-cont {
        display: flex;
        justify-content: space-around;
        padding: 3rem 1rem;
      }

      &-desc {
        display: flex;
        align-items: center;

        dt {
          margin-right: 1rem;
          color: ${color.textGrey};
          font-size: 1.2rem;
        }

        dd {
          span {
            color: ${color.borderGrey};
            font-weight: bold;
            font-size: 2rem;
          }

          &.active {
            color: ${color.black};
          }

          &.red {
            color: ${color.red};
          }
        }
      }

      &-nav {
        display: flex;
        justify-content: center;
        background: ${color.point};

        a {
          width: 100%;
          padding: 1rem 0;
          border-right: 1px solid ${color.borderLightGrey};
          color: ${color.black};
          font-size: 1rem;
          text-align: center;
          line-height: 1.3;

          &:last-of-type {
            border-right: none;
          }
        }
      }
    }
  }
`;
export default style;
