import styled from "styled-components";

import { media } from "../../../shared/utils/styledComponents";
import {
  appWidthSmall,
  accentColor5
} from "../../../shared/constants/constants.style";

export const StyledContainer = styled.div`
  padding: 1.6rem 1rem 1.7rem 1rem;
  background-color: ${accentColor5};

  ${media.mdUp`
    box-sizing: border-box;
    width: ${appWidthSmall}px;
    margin: auto;
    margin-top: 2.4rem;
  `}
`;
