import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  StyledContainer,
  StyledElementContainer,
  StyledPoster,
  StyledDescription,
  StyledRating,
  StyledShowingSection,
  StyledGenre,
  StyledBottomContainer,
  StyledShowingsContainer,
  StyledTitle,
} from './MoviesListElement.styles';

interface Movie {
  genre: string;
  id: number;
  posterUrl: string;
  rating: number;
  title: string;
  showingsTime: number[];
}

interface MoviesListElementProps {
  movie: Movie;
}

const MoviesListElement: FunctionComponent<MoviesListElementProps> = ({ movie }) => {
  const { genre, id, posterUrl, rating, title, showingsTime } = movie;

  return (
    <StyledContainer>
      <Link to={`/film/${id}`}>
        <StyledElementContainer>
          <StyledPoster posterUrl={posterUrl} />
          <StyledDescription>
            <StyledTitle>{title}</StyledTitle>
            <StyledShowingSection>
              {showingsTime &&
                showingsTime.map(showing => <StyledShowingsContainer key={showing}>{showing}</StyledShowingsContainer>)}
            </StyledShowingSection>
            <StyledGenre>{genre}</StyledGenre>
            <StyledBottomContainer>
              <StyledRating>{rating}</StyledRating>
              <div>fe star</div>
            </StyledBottomContainer>
          </StyledDescription>
        </StyledElementContainer>
      </Link>
    </StyledContainer>
  );
};

export { MoviesListElement };
