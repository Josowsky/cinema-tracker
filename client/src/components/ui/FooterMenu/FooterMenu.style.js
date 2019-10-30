import styled from "styled-components";
import { Link } from "react-router-dom";

import { media } from "../../../shared/utils/styledComponents";
import {
  accentColor1,
  accentColor5,
  grey,
  zIndexFooter
} from "../../../shared/constants/constants.style";

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: ${zIndexFooter};
  width: 100vw;
  height: 3.7rem;
  background-color: ${accentColor5};

  ${media.mdUp`
    display: none;
  `}
`;

export const StyledMenuElement = styled(Link)`
  flex-basis: 33%;
  flex-grow: 1;
  padding-top: 0.5rem;
  padding-bottom: 3px;
  text-decoration: none;
  border-bottom: 5px solid
    ${({ isSelected }) => (isSelected ? accentColor1 : "#fff")};
`;

export const StyledIcon = styled.div`
  display: block;
  text-align: center;
  font-size: 1.4rem;
  color: ${({ isSelected }) => (isSelected ? accentColor1 : grey)};
`;

export const StyledTitle = styled.p`
  margin: 0;
  margin-top: 4px;
  font-size: 0.8rem;
  text-align: center;
  color: ${({ isSelected }) => (isSelected ? accentColor1 : grey)};
`;
