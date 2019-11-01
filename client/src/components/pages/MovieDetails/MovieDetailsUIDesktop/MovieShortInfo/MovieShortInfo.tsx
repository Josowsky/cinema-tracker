import React, { FunctionComponent } from 'react';

import { Movie } from 'shared/models';

import {
  StyledContainer,
  StyledTitle,
  StyledTimeIcon,
  StyledTime,
  StyledRatingIcon,
  StyledRating,
  StyledGenre,
} from './MovieShortInfo.style';

type MovieShortInfoProps = Pick<Movie, 'title' | 'duration' | 'rating' | 'genre'>;

const MovieShortInfo: FunctionComponent<MovieShortInfoProps> = ({
  title,
  duration: { hours, minutes },
  rating,
  genre,
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
    <StyledGenre>
      Gatunek:
      {genre}
    </StyledGenre>
  </StyledContainer>
);

export { MovieShortInfo };
