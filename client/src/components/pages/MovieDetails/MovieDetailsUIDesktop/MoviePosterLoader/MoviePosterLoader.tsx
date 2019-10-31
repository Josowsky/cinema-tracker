import React from 'react';
import ContentLoader from 'react-content-loader';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 250px;
  position: absolute;
  top: -24px;
`;

const MoviePosterLoader = () => (
  <StyledContainer>
    <ContentLoader height={370} width={250} speed={2} primaryColor="#dedede" secondaryColor="#ccc">
      <rect x="0" y="0" rx="3" ry="3" width="250" height="370" />
    </ContentLoader>
  </StyledContainer>
);

export { MoviePosterLoader };
