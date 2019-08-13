import styled from "styled-components";

import { accentColor2 } from "../../../shared/constants/constants.style";

export const StyledContainer = styled.div`
  display: flex;
  margin: 32px 0;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;

  /* margin-bottom: 5rem; this should go on larger than mobile */
`;

export const StyledLoadingContainer = styled.div`
  height: calc(100vh - 3.1rem - 3.7rem);
  font-size: 2rem;
  color: ${accentColor2};
`;
