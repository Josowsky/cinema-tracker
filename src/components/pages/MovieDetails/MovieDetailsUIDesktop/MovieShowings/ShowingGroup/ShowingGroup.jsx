import React from "react";
import { arrayOf, bool, string, shape, oneOf } from "prop-types";

import { ShowingType } from "./ShowingType/ShowingType";
import { ShowingDimension } from "./ShowingDimension/ShowingDimension";
import { getShowingTime } from "../../../../../../shared/utils/getShowingTime";

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

const ShowingGroup = ({ group: { date, seances } } = {}) => {
  if (!seances) return null;

  return (
    <section>
      <StyledTitle>{date}</StyledTitle>
      <StyledShowingsContainer>
        {seances.map(
          ({
            dateTime: { date: showingDate },
            cinema: { name: cinemaName },
            subtitles,
            dimensionality,
            url
          }) => (
            <StyledShowing>
              <StyledShowingRow>
                <StyledTime>{getShowingTime(showingDate)}</StyledTime>
                <StyledCinemaName>{cinemaName}</StyledCinemaName>
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
};

export { ShowingGroup };
