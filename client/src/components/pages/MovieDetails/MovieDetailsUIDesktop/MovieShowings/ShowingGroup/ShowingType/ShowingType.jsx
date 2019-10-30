import React from "react";
import { bool } from "prop-types";

import {
  StyledContainer,
  StyledSubtitlesIcon,
  StyledDubbingIcon
} from "./ShowingType.style";

const ShowingType = ({ isSubtitled }) => (
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

ShowingType.propTypes = {
  isSubtitled: bool.isRequired
};

export { ShowingType };
