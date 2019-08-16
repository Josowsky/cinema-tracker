import React from "react";
import { func, shape, oneOf } from "prop-types";

import { Switch } from "../../../../../ui/Switch/Switch";

import {
  StyledContainer,
  StyledHeader,
  StyledFiltersContainer,
  StyledFilterContainer
} from "./ShowingsFilters.style";

const ShowingsFilters = ({ filters, onChange }) => (
  <StyledContainer role="group" aria-labelledby="filtersHeader">
    <StyledHeader id="filtersHeader">Rodzaj seansu</StyledHeader>
    <StyledFiltersContainer>
      <StyledFilterContainer>
        <Switch
          name="dialoguesType"
          value={filters.dialoguesType}
          options={[
            { value: "subtitles", label: "Napisy" },
            { value: "dubbing", label: "Dubbing" }
          ]}
          onChange={onChange}
        />
      </StyledFilterContainer>
      <StyledFilterContainer>
        <Switch
          name="screenType"
          value={filters.screenType}
          options={[{ value: "2D", label: "2D" }, { value: "3D", label: "3D" }]}
          onChange={onChange}
        />
      </StyledFilterContainer>
    </StyledFiltersContainer>
  </StyledContainer>
);

ShowingsFilters.propTypes = {
  filters: shape({
    dialoguesType: oneOf(["subtitles", "dubbing"]),
    screenType: oneOf(["2D", "3D"])
  }).isRequired,
  onChange: func.isRequired
};

export { ShowingsFilters };
