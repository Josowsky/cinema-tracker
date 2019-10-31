import React, { FunctionComponent } from 'react';

import { Dimensionality } from 'shared/models';

import { StyledContainer, Styled2DIcon, Styled3DIcon } from './ShowingDimension.style';

interface ShowingDimensionProps {
  type: Dimensionality;
}

const ShowingDimension: FunctionComponent<ShowingDimensionProps> = ({ type }) => (
  <StyledContainer>
    {type === '2D' && (
      <>
        <Styled2DIcon />
        <p>2D</p>
      </>
    )}
    {type === '3D' && (
      <>
        <Styled3DIcon />
        <p>3D</p>
      </>
    )}
  </StyledContainer>
);

export { ShowingDimension };
