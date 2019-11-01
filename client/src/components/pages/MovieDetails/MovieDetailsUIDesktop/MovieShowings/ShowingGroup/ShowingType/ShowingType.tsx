import React, { FunctionComponent } from 'react';

import { StyledContainer, StyledSubtitlesIcon, StyledDubbingIcon } from './ShowingType.style';

interface ShowingTypeProps {
  isSubtitled: boolean;
}

const ShowingType: FunctionComponent<ShowingTypeProps> = ({ isSubtitled }) => (
  <StyledContainer>
    {isSubtitled && (
      <>
        <StyledSubtitlesIcon />
        <p>Napisy</p>
      </>
    )}
    {!isSubtitled && (
      <>
        <StyledDubbingIcon />
        <p>Dubbing</p>
      </>
    )}
  </StyledContainer>
);

export { ShowingType };
