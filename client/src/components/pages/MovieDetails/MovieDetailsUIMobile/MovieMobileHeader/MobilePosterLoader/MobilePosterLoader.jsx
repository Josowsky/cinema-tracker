import React from "react";
import ContentLoader from "react-content-loader";
import styled from "styled-components";

const StyledContainer = styled.div`
  min-width: 165px;
`;

const MobilePosterLoader = () => (
  <StyledContainer>
    <ContentLoader
      height={244}
      width={165}
      speed={2}
      primaryColor="#dedede"
      secondaryColor="#ccc"
    >
      <rect x="0" y="0" rx="3" ry="3" width="165" height="244" />
    </ContentLoader>
  </StyledContainer>
);

export { MobilePosterLoader };
