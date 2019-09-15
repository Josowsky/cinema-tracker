import styled from "styled-components";
import { FaClock, FaStar } from "react-icons/fa";

import { accentColor3 } from "../../../../../shared/constants/constants.style";

export const StyledContainer = styled.section`
  color: white;
`;

export const StyledTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 24px 0;
`;

export const StyledTimeIcon = styled(FaClock)`
  margin-right: 8px;
`;

export const StyledTime = styled.p`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
`;

export const StyledRatingIcon = styled(FaStar)`
  margin-right: 8px;
  color: ${accentColor3};
`;

export const StyledRating = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const StyledGenre = styled.h2`
  font-size: 20px;
  margin: 0;
`;
