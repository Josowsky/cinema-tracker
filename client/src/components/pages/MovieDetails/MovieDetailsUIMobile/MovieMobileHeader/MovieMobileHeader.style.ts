import styled from 'styled-components';
import { FaRegClock, FaStar } from 'react-icons/fa';

import { grid, grey, accentColor3 } from 'shared/constants/constants.style';

export const StyledContainer = styled.section`
  color: ${grey};
  background: #fff;
  width: 100vw;
`;

export const StyledTopContainer = styled.div`
  display: flex;
  padding: ${grid * 2}px ${grid}px;
`;

export const StyledPoster = styled.img`
  width: 165px;
`;

export const StyledInfoContainer = styled.div`
  margin-left: ${grid}px;
`;

export const StyledTitle = styled.h1`
  margin: 0 0 ${grid / 2}px 0;
`;

export const StyledDuration = styled.p`
  display: flex;
  align-items: center;
  margin: 0 0 ${grid}px 0;
`;

export const StyledDurationIcon = styled(FaRegClock)`
  margin-right: ${grid / 2}px;
`;

export const StyledDescription = styled.p``;

export const StyledRatingContainer = styled.div`
  padding: 0 ${grid}px ${grid}px;
  font-size: 20px;
`;

export const StyledRating = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRatingIcon = styled(FaStar)`
  margin-right: ${grid / 2}px;
  color: ${accentColor3};
`;
