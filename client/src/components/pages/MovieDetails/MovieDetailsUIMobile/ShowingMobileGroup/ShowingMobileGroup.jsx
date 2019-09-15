import React from "react";
import { arrayOf, bool, string, shape, oneOf } from "prop-types";
import {
  FaRegFileAlt,
  FaRegComments,
  FaRegSquare,
  FaRegClone,
  FaRegClock
} from "react-icons/fa";

import { getShowingTime } from "../../../../../shared/utils/getShowingTime";

import {
  StyledTitle,
  StyledTitleLine,
  StyledTitleText,
  StyledShowing,
  StyledRow,
  StyledTicketLink,
  StyledType,
  StyledCinema,
  StyledTime
} from "./ShowingMobileGroup.style";

const ShowingMobileGroup = ({ group: { date, seances = [] } } = {}) => {
  if (seances.length === 0) return null;

  return (
    <section>
      <StyledTitle>
        <StyledTitleLine />
        <StyledTitleText>{date}</StyledTitleText>
        <StyledTitleLine />
      </StyledTitle>
      <div>
        {seances.map(
          ({
            dateTime: { date: showingDate },
            cinema: { name: cinemaName },
            subtitles,
            dimensionality,
            url
          }) => (
            <StyledShowing>
              <StyledRow>
                <StyledTicketLink href={url} target="__blank">
                  Kup bilet
                </StyledTicketLink>
                <StyledType>
                  {dimensionality === "2D" ? <FaRegSquare /> : <FaRegClone />}
                  {dimensionality === "2D" ? "2D" : "3D"}
                </StyledType>
                <StyledType>
                  {subtitles ? <FaRegFileAlt /> : <FaRegComments />}
                  {subtitles ? "Napisy" : "Dubbing"}
                </StyledType>
              </StyledRow>
              <StyledRow>
                <StyledCinema>{cinemaName}</StyledCinema>
                <StyledTime>
                  <FaRegClock /> {getShowingTime(showingDate)}
                </StyledTime>
              </StyledRow>
            </StyledShowing>
          )
        )}
      </div>
    </section>
  );
};

ShowingMobileGroup.propTypes = {
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

export { ShowingMobileGroup };
