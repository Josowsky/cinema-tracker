import styled from "styled-components";

import { accentColor1 } from "../../../../../../shared/constants/constants.style";

export const StyledTitle = styled.h3`
  margin-bottom: 24px;
  font-size: 16px;
  font-weight: 400;
`;

export const StyledShowingsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const StyledShowing = styled.div`
  margin: 0 24px 24px 0;
  width: 300px;
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.25);
  padding: 16px;
`;

export const StyledShowingRow = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledTime = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin-right: 16px;
`;

export const StyledCinemaName = styled.p`
  font-weight: 700;
`;

export const StyledDimensionContainer = styled.div`
  margin-right: 24px;
`;

export const StyledTicketLink = styled.a`
  margin-left: auto;
  color: ${accentColor1};
  text-decoration: underline;
`;
