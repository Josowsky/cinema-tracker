import React from "react";
import { FaFrown } from "react-icons/fa";

import { StyledContainer } from "./NoResults.style";

const NoResults = () => (
  <StyledContainer className="no-results">
    Brak wyników <FaFrown />
  </StyledContainer>
);

export { NoResults };
