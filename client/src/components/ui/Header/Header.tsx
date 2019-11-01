import React, { useContext, FunctionComponent } from 'react';

import { ViewportContext } from 'components/context/ViewportContext/ViewportContext';

import { StyledContainer, StyledLogo } from './Header.style';

const Header: FunctionComponent = () => {
  const { isMdUp } = useContext(ViewportContext);

  return (
    <StyledContainer isMobile={!isMdUp}>
      <StyledLogo>???</StyledLogo>
    </StyledContainer>
  );
};

export { Header };
