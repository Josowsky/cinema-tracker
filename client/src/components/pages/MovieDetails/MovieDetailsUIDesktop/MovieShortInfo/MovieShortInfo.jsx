import React from "react";
import { string, number } from "prop-types";

import {
  StyledContainer,
  StyledTitle,
  StyledTimeIcon,
  StyledTime,
  StyledRatingIcon,
  StyledRating,
  StyledGenre
} from "./MovieShortInfo.style";

const MovieShortInfo = ({ title, time, rating, genre }) => (
  <StyledContainer>
    <StyledTitle>{title}</StyledTitle>
    {time && (
      <StyledTime>
        <StyledTimeIcon /> {time}
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
  time: string.isRequired,
  rating: number.isRequired,
  genre: string.isRequired
};

export { MovieShortInfo };
