import React from "react";
import { arrayOf, bool, shape, string, number, oneOf } from "prop-types";
import { Link } from "react-router-dom";

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
  StyledTitle
} from "./MoviesListElement.styles";

const MoviesListElement = ({ movie = {} }) => {
  const { genre, id, posterUrl, rating, title, showingsTime } = movie;

  return (
    <StyledContainer>
      <Link to={`/film/${id}`}>
        <StyledElementContainer>
          <StyledPoster posterUrl={posterUrl} />
          <StyledDescription>
            <StyledTitle>{title}</StyledTitle>
            <StyledShowingSection>
              {showingsTime.map(showing => (
                <StyledShowingsContainer key={showing}>
                  {showing}
                </StyledShowingsContainer>
              ))}
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

MoviesListElement.propTypes = {
  movie: shape({
    genre: string.isRequired,
    id: number.isRequired,
    image: string.isRequired,
    rating: number.isRequired,
    name: string.isRequired,
    showings: arrayOf(
      shape({
        dataTime: shape({
          date: string.isRequired
        }).isRequired,
        dimensionality: oneOf(["2D", "3D"]).isRequired,
        dubbing: bool.isRequired,
        id: number.isRequired,
        isActive: bool.isRequired,
        subtitles: bool.isRequired
      })
    )
  }).isRequired
};

export { MoviesListElement };
