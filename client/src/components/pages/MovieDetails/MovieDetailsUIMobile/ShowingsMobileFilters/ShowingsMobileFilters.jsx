import React from "react";
import { func, shape, oneOf } from "prop-types";
import { FaFileAlt, FaComments, FaSquare, FaClone } from "react-icons/fa";

import {
  StyledContainer,
  StyledSwitchContainer,
  StyledOption
} from "./ShowingsMobileFilters.style";

const ShowingsMobileFilters = ({
  filters: { dialoguesType, screenType } = {},
  onFilterChange
}) => (
  <StyledContainer>
    <StyledSwitchContainer>
      <StyledOption
        onClick={() => onFilterChange("dialoguesType", "subtitles")}
        isSelected={dialoguesType === "subtitles"}
      >
        <FaFileAlt /> Napisy
      </StyledOption>
      <StyledOption
        onClick={() => onFilterChange("dialoguesType", "dubbing")}
        isSelected={dialoguesType === "dubbing"}
      >
        <FaComments /> Dubbing
      </StyledOption>
      <StyledOption
        onClick={() => onFilterChange("screenType", "2D")}
        isSelected={screenType === "2D"}
      >
        <FaSquare /> 2D
      </StyledOption>
      <StyledOption
        onClick={() => onFilterChange("screenType", "3D")}
        isSelected={screenType === "3D"}
      >
        <FaClone /> 3D
      </StyledOption>
    </StyledSwitchContainer>
  </StyledContainer>
);

ShowingsMobileFilters.propTypes = {
  filters: shape({
    dialoguesType: oneOf(["subtitles", "dubbing"]),
    screenType: oneOf(["2D", "3D"])
  }),
  onFilterChange: func.isRequired
};

export { ShowingsMobileFilters };
