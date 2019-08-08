import styled from "styled-components";

import {
  accentColor2,
  accentColor5,
  grey
} from "../../../shared/constants/constants.style";
import { media } from "../../../shared/utils/styledComponents";

export const StyledContainer = styled.div`
  ${media.lgUp`
    margin: 16px;
  `}
`;

export const StyledElementContainer = styled.div`
  margin-top: 20px;
  display: flex;

  ${media.lgUp`
    width: 480px;
    margin: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(#000, 0.12), 0 1px 2px rgba(#000, 0.24);

    &:hover {
      box-shadow: 0 14px 28px rgba(#000, 0.25), 0 10px 10px rgba(#000, 0.22);
    }
  `}
`;

export const StyledPoster = styled.div`
  width: 9.2rem;
  height: 12.5rem;
  background-size: cover;
  background-position: 50%;
  background-image: ${({ posterUrl }) => `url(${posterUrl})`};

  ${media.lgUp`
    width: 15rem;
    height: 18rem;
  `};
`;

export const StyledDescription = styled.div`
  position: relative;
  width: calc(100vw - 33vw);
  padding: 0.6rem;
  background-color: ${accentColor5};

  ${media.lgUp`
    width: 18rem;
    padding: 1.2rem;
  `}
`;

export const StyledRating = styled.div`
  margin-right: 4px;
  font-size: 1rem;
`;

export const StyledShowingSection = styled.div`
  width: 9rem;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledGenre = styled.div`
  position: absolute;
  bottom: 0.6rem;
  left: 0.6rem;
  display: inline-block;
  overflow: hidden;
  width: 10rem;
  font-size: 1rem;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${media.lgUp`
    bottom: 1.2rem;
    left: 1.2rem;
    width: 12rem;
  `}
`;

export const StyledBottomContainer = styled.div`
  display: flex;
  position: absolute;
  right: 0.6rem;
  bottom: 0.6rem;

  ${media.lgUp`
    right: 1.2rem;
    bottom: 1.2rem;
  `}
`;

export const StyledShowingsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  float: left;
  width: 3.867rem;
  height: 1.667rem;
  margin-right: 0.6rem;
  margin-bottom: 0.6rem;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 0.6rem;
  color: ${accentColor5};
  background-color: ${accentColor2};
`;

export const StyledTitle = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 13rem;
  margin-top: 0.6rem;
  margin-bottom: 1.3rem;
  padding-right: 1.3rem;
  font-size: 1rem;
  font-weight: 700;
  text-decoration: none;
  color: ${grey};
`;
