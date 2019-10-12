import React from "react";
import { arrayOf, func, bool, string, shape, oneOf } from "prop-types";

import { ShowingGroup } from "./ShowingGroup/ShowingGroup";
import { ShowingsFilters } from "./ShowingsFilters/ShowingsFilters";

import {
  StyledContainer,
  StyledTitle,
  StyledShowingsGroup
} from "./MovieShowings.style";

const MovieShowings = ({
  filters = {},
  onFiltersChange = () => null,
  groups
}) => (
  <StyledContainer>
    <StyledTitle>Sense</StyledTitle>
    <ShowingsFilters filters={filters} onChange={onFiltersChange} />
    {groups &&
      groups.map(group => (
        <StyledShowingsGroup key={group.date}>
          <ShowingGroup group={group} />
        </StyledShowingsGroup>
      ))}
  </StyledContainer>
);

MovieShowings.propTypes = {
  groups: arrayOf(
    shape({
      date: string,
      seances: arrayOf(
        shape({
          time: string,
          cinema: string,
          subtitles: bool,
          dimensionality: oneOf(["2D", "3D"]),
          dubbing: bool,
          url: string
        })
      )
    })
  ),
  filters: shape({
    dialoguesType: oneOf(["subtitles", "dubbing"]),
    screenType: oneOf(["2D", "3D"])
  }),
  onFiltersChange: func
};

export { MovieShowings };
