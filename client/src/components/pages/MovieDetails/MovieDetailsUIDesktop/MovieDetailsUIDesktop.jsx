import React from "react";
import { arrayOf, func, bool, number, string, shape, oneOf } from "prop-types";

import { MovieShortInfo } from "./MovieShortInfo/MovieShortInfo";
import { MovieDescription } from "./MovieDescription/MovieDescription";
import { MovieShowings } from "./MovieShowings/MovieShowings";
import { MovieDetailsContentLoader } from "./MovieDetailsContentLoader/MovieDetailsContentLoader";
import { MovieShortInfoLoader } from "./MovieShortInfoLoader/MovieShortInfoLoader";
import { MoviePosterLoader } from "./MoviePosterLoader/MoviePosterLoader";

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
    posterUrl,
    bannerUrl,
    title,
    duration,
    description,
    rating,
    genre,
    showings
  } = {},
  filters,
  onFilterChange
}) => (
  <StyledContainer>
    <StyledBanner bannerUrl={bannerUrl}>
      <StyledBannerContent>
        {isLoading && <MoviePosterLoader />}
        {posterUrl && <StyledPoster src={posterUrl} alt={title} />}
        <StyledMovieInfo>
          {isLoading && <MovieShortInfoLoader />}
          {!isLoading && (
            <MovieShortInfo
              title={title}
              duration={duration}
              rating={rating}
              genre={genre}
            />
          )}
        </StyledMovieInfo>
      </StyledBannerContent>
    </StyledBanner>
    <StyledContentContainer>
      {isLoading && <MovieDetailsContentLoader />}
      {!isLoading && <MovieDescription description={description} />}
      {!isLoading && (
        <MovieShowings
          groups={showings}
          filters={filters}
          onFiltersChange={onFilterChange}
        />
      )}
    </StyledContentContainer>
  </StyledContainer>
);

MovieDetailsUIDesktop.propTypes = {
  movie: shape({
    genre: string,
    id: number,
    posterUrl: string,
    bannerUrl: string,
    duration: shape({
      hours: number,
      minutes: number
    }),
    rating: number,
    title: string,
    description: string,
    showings: arrayOf(
      shape({
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
    )
  }).isRequired,
  isLoading: bool,
  filters: shape({
    dialoguesType: oneOf(["subtitles", "dubbing"]),
    screenType: oneOf(["2D", "3D"])
  }),
  onFilterChange: func.isRequired
};

export { MovieDetailsUIDesktop };
