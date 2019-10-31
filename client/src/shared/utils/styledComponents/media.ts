import { css } from 'styled-components';

import { MD_MIN_WIDTH, LG_MIN_WIDTH, XL_MIN_WIDTH } from '../../constants/constants.viewport';

const screenWidthAboveCss = (min: number) => (first: any, ...interpolations: any) => {
  return css`
    @media only screen and (min-width: ${min}px) {
      ${css(first, ...interpolations)};
    }
  `;
};

export const media = {
  mdUp: screenWidthAboveCss(MD_MIN_WIDTH),
  lgUp: screenWidthAboveCss(LG_MIN_WIDTH),
  xlUp: screenWidthAboveCss(XL_MIN_WIDTH),
};
