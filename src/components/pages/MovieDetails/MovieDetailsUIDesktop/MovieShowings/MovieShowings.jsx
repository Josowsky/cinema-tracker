import React from "react";
import { arrayOf, bool, string, shape, oneOf } from "prop-types";

import { ShowingGroup } from "./ShowingGroup/ShowingGroup";

import {
  StyledContainer,
  StyledTitle,
  StyledShowingsGroup
} from "./MovieShowings.style";

const MovieShowings = ({ filters, groups }) => (
  <StyledContainer>
    <StyledTitle>Sense</StyledTitle>
    {groups &&
      groups.map(group => (
        <StyledShowingsGroup>
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
          dateTime: shape({
            date: string
          }),
          cinema: shape({
            name: string
          }),
          subtitles: bool,
          dimensionality: oneOf("2D", "3D"),
          dubbing: bool,
          url: string
        })
      )
    })
  )
};

export { MovieShowings };
