import { color, common } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  .search {
    position: relative;
    padding: 4rem 2rem 0;
    margin-bottom: 4rem;
    background: ${color.point};

    &__text {
      color: ${color.whiteGreen};

      em {
        font-weight: 400;
        font-size: 1.3rem;
      }

      p {
        margin-top: 1.2rem;
        font-size: 1.1rem;
        font-weight: 200;
        line-height: 1.4;
        letter-spacing: 0;
      }
    }

    &__form {
      display: flex;
      align-items: center;
      height: 5.5rem;
      width: 100%;
      padding: 0.4rem;
      border-radius: ${common.radius};
      background: ${color.white};
      box-shadow: ${color.boxShadow};
      transform: translate(0, 40%);
      // transform: translate(-0.8rem, 40%);

      button {
        padding: 1.2rem;
        img {
          // width: 2rem;
          height: 1.9rem;
        }
      }

      input {
        font-size: 1.3rem;

        &::placeholder {
          font-weight: 500;
          color: ${color.greyaaa};
        }
      }
    }
  }

  .nav {
    &__wrapper {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      padding: 2rem;

      &::webkit-scrollbar {
        display: none;
        height: 0;
        width: 0;
      }
    }

    &__menu {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 4rem;

      &:last-of-type {
        margin-right: 0;
      }

      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        background: ${color.lightGreen};

        img {
          width: 2rem;
        }
      }

      &__name {
        margin-top: 1rem;
        color: ${color.black};
        font-size: 1rem;
        font-weight: 600;
        white-space: nowrap;
      }
    }
  }

  .main {
    &-wrapper {
      padding: 2rem 1.6rem;
    }

    &-title {
      display: none;
      margin: 2rem 0;
      color: ${color.black};
      font-weight: bold;
      font-size: 1.6rem;
      text-align: center;
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
    margin-bottom: 4.8rem;
    background: ${color.white};
    border: 1px solid ${color.greyf8};
    box-shadow: 0.1rem 0.4rem 0.5rem 0.2rem rgb(0, 0, 0, 0.1);
    border-radius: 0.8rem;

    .box {
      &-top {
        display: flex;
        justify-content: space-between;
        padding: 1.6rem;
        border-bottom: 1px solid ${color.greyeee};

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
          color: ${color.grey666};
          font-size: 1.2rem;
        }

        dd {
          span {
            color: ${color.greyddd};
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

      &-calendar {
        display: flex;
        flex-wrap: wrap;
        padding: 1.2rem;
        border-bottom: 1px solid ${color.greyddd};

        div {
          flex: 0 0 20%;
          padding: 0.4rem;
          color: ${color.grey666};
          font-size: 0.6rem;
          box-sizing: border-box;
        }

        &-date {
          display: flex;
          width: 4rem;
          height: 4rem;
          align-items: center;
          justify-content: center;

          &.has {
            position: relative;
            color: ${color.point};

            &:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              border-radius: 50%;
              border: 0.4rem solid ${color.point};
              box-sizing: border-box;
            }
          }
        }
      }

      &-week {
        display: flex;
        justify-content: space-around;
        padding: 1.2rem;
        border-bottom: 1px solid ${color.greyeee};

        &-wrapper {
          position: relative;
          color: ${color.grey666};
          font-size: 1rem;
          text-align: center;
          box-sizing: border-box;
        }

        .today {
          position: absolute;
          top: -0.4rem;
          left: 0;
          width: 100%;
          color: ${color.point};
          font-weight: bold;
          font-size: 0.4rem;
          text-align: center;
        }
      }

      &-nav {
        display: flex;
        justify-content: center;
        background: ${color.point};
        border-top: 1px solid ${color.greyeee};

        a {
          width: 100%;
          padding: 1rem 0;
          border-right: 1px solid ${color.greyeee};
          color: ${color.white};
          font-weight: 500;
          font-size: 1.1rem;
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
