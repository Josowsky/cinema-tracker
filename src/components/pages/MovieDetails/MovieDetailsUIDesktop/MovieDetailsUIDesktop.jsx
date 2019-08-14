import React from "react";
import { arrayOf, bool, number, string, shape, oneOf } from "prop-types";

import { MovieShortInfo } from "./MovieShortInfo/MovieShortInfo";
import { MovieDescription } from "./MovieDescription/MovieDescription";
import { MovieShowings } from "./MovieShowings/MovieShowings";

import {
  StyledContainer,
  StyledBanner,
  StyledBannerContent,
  StyledPoster,
  StyledMovieInfo,
  StyledContentContainer
} from "./MovieDetailsUIDesktop.style";

const MovieDetailsUIDesktop = ({
  isLoading = false,
  movie: {
    image,
    banner,
    name,
    duration,
    description,
    rating,
    genre,
    showings
  } = {}
}) => (
  <StyledContainer>
    <StyledBanner bannerUrl={banner}>
      <StyledBannerContent>
        {image && <StyledPoster src={image} alt={name} />}
        <StyledMovieInfo>
          <MovieShortInfo
            title={name}
            time={duration}
            rating={rating}
            genre={genre}
          />
        </StyledMovieInfo>
      </StyledBannerContent>
    </StyledBanner>
    <StyledContentContainer>
      <MovieDescription description={description} />
      <MovieShowings groups={showings} />
    </StyledContentContainer>
  </StyledContainer>
);

MovieDetailsUIDesktop.propTypes = {
  movie: shape({
    genre: string,
    id: number,
    image: string,
    banner: string,
    duration: string,
    rating: number,
    name: string,
    description: string,
    showings: arrayOf(
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
  }).isRequired,
  isLoading: bool
};

export { MovieDetailsUIDesktop };
