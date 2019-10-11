import React from "react";
import { arrayOf, bool, string, shape, oneOf } from "prop-types";

import { ShowingType } from "./ShowingType/ShowingType";
import { ShowingDimension } from "./ShowingDimension/ShowingDimension";

import {
  StyledTitle,
  StyledShowingsContainer,
  StyledShowing,
  StyledShowingRow,
  StyledTime,
  StyledCinemaName,
  StyledDimensionContainer,
  StyledTicketLink
} from "./ShowingGroup.style";

const ShowingGroup = ({ group: { date, seances = [] } } = {}) => {
  if (seances.length === 0) return null;

  return (
    <section>
      <StyledTitle>{date}</StyledTitle>
      <StyledShowingsContainer>
        {seances.map(
          ({ time, cinema, subtitles, dimensionality, url }, index) => (
            <StyledShowing key={`${time}_${index}`}>
              <StyledShowingRow>
                <StyledTime>{time}</StyledTime>
                <StyledCinemaName>{cinema}</StyledCinemaName>
              </StyledShowingRow>
              <StyledShowingRow>
                <StyledDimensionContainer>
                  <ShowingDimension type={dimensionality} />
                </StyledDimensionContainer>
                <ShowingType isSubtitled={subtitles} />
                <StyledTicketLink target="_blank" href={url}>
                  Kup bilet
                </StyledTicketLink>
              </StyledShowingRow>
            </StyledShowing>
          )
        )}
      </StyledShowingsContainer>
    </section>
  );
};

ShowingGroup.propTypes = {
  group: shape({
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
};

export { ShowingGroup };
