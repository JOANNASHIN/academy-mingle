import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
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
          color: ${color.pointDark};

          &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            border: 0.4rem solid ${color.pointDark};
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
`;
export default style;
