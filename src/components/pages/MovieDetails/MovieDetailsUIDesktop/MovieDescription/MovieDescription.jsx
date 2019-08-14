import React from "react";
import { string } from "prop-types";

import { StyledContainer, StyledTitle } from "./MovieDescription.style";

const MovieDescription = ({ description }) => (
  <StyledContainer>
    <StyledTitle>Opis</StyledTitle>
    <p>{description}</p>
  </StyledContainer>
);

MovieDescription.propTypes = {
  description: string.isRequired
};

export { MovieDescription };
