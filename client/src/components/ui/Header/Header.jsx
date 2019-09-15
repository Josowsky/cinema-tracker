import React, { useContext } from "react";

import { ViewportContext } from "../../context/ViewportContext/ViewportContext";

import { StyledContainer, StyledLogo } from "./Header.style";

const Header = () => {
  const { isMdUp } = useContext(ViewportContext);

  return (
    <StyledContainer isMobile={!isMdUp}>
      <StyledLogo>???</StyledLogo>
    </StyledContainer>
  );
};

export { Header };
