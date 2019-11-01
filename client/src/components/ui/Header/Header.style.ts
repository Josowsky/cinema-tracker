import styled from 'styled-components';

import { mobileHeaderHeight, desktopHeaderHeight, accentColor1, zIndexHeader } from 'shared/constants/constants.style';

interface StyledContainerProps {
  isMobile: boolean;
}

export const StyledContainer = styled.header<StyledContainerProps>`
  height: ${({ isMobile }) => (isMobile ? mobileHeaderHeight : desktopHeaderHeight)}px;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${accentColor1};
  z-index: ${zIndexHeader};
  box-shadow: 0 3px 5px rgba(100, 100, 100, 0.49);
`;

export const StyledLogo = styled.p`
  color: #fff;
`;
