import React from "react";
import { string, number, shape } from "prop-types";

import {
  StyledContainer,
  StyledTitle,
  StyledTimeIcon,
  StyledTime,
  StyledRatingIcon,
  StyledRating,
  StyledGenre
} from "./MovieShortInfo.style";

const MovieShortInfo = ({
  title,
  duration: { hours, minutes } = {},
  rating,
  genre
}) => (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
    {hours && minutes && (
      <StyledTime>
        <StyledTimeIcon /> {`${hours} godz. ${minutes} min.`}
      </StyledTime>
    )}
    {rating && (
      <StyledRating>
        <StyledRatingIcon />
        {rating}
      </StyledRating>
    )}
    <StyledGenre>Gatunek: {genre}</StyledGenre>
  </StyledContainer>
);

MovieShortInfo.propTypes = {
  title: string.isRequired,
  duration: shape({
    hours: number,
    minutes: number
  }).isRequired,
  rating: number.isRequired,
  genre: string.isRequired
};

export { MovieShortInfo };
