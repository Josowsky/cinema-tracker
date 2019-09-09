import React from "react";
import styled from "styled-components";
import ContentLoader from "react-content-loader";

import { grid } from "../../../../../../shared/constants/constants.style";

const StyledContainer = styled.div`
  width: 150px;
  height: 240px;
  margin-left: ${grid}px;
`;

const MobileInfoLoader = () => (
  <StyledContainer>
    <ContentLoader
      height={240}
      width={150}
      speed={2}
      primaryColor="#dedede"
      secondaryColor="#ccc"
    >
      <rect x="0" y="0" rx="3" ry="3" width="140" height="12" />
      <rect x="0" y="24" rx="3" ry="3" width="90" height="8" />
      <rect x="0" y="60" rx="3" ry="3" width="150" height="6" />
      <rect x="0" y="75" rx="3" ry="3" width="120" height="6" />
      <rect x="0" y="90" rx="3" ry="3" width="145" height="6" />
      <rect x="0" y="105" rx="3" ry="3" width="140" height="6" />
      <rect x="0" y="120" rx="3" ry="3" width="80" height="6" />
    </ContentLoader>
  </StyledContainer>
);

export { MobileInfoLoader };
