import styled from 'styled-components';

import { grid, grey, accentColor1 } from 'shared/constants/constants.style';

export const StyledTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: ${grid / 2}px;
`;

export const StyledTitleLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: ${grey};
  opacity: 0.2;
`;

export const StyledTitleText = styled.h2`
  margin: 0 ${grid / 2}px;
  font-size: 1rem;
  font-weight: 400;
`;

export const StyledShowing = styled.div`
  color: ${grey};
  width: 100%;
  background: #fff;
  padding: ${grid}px;
  margin-bottom: ${grid}px;
`;

export const StyledRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: ${grid}px;
  }
`;

export const StyledTicketLink = styled.a`
  margin-right: auto;
  padding: ${grid / 2}px ${grid}px;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  background-color: ${accentColor1};
`;

export const StyledType = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    margin-right: ${grid / 2}px;
  }
`;

export const StyledCinema = styled.div`
  margin-right: auto;
`;

export const StyledTime = styled.div`
  display: flex;
  align-items: center;

  svg {
    margin-right: ${grid / 2}px;
  }
`;
