import { color } from '@/styles/variants';
import { css } from '@emotion/react';

const style = css`
  padding: 0 1rem;

  .border-gray-box {
    padding: 1rem;
    border: 1px solid ${color.borderGrey};
    border-radius: 1rem;

    .box {
      &-title {
        color: ${color.black};
        font-size: 1.6rem;
        font-weight: bold;
      }
    }
  }
`;
export default style;
