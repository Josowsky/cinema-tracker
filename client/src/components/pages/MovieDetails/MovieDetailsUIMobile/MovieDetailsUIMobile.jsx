import React from "react";
import { arrayOf, func, bool, number, string, shape, oneOf } from "prop-types";

import { MovieMobileHeader } from "./MovieMobileHeader/MovieMobileHeader";
import { ShowingsMobileFilters } from "./ShowingsMobileFilters/ShowingsMobileFilters";
import { ShowingMobileGroup } from "./ShowingMobileGroup/ShowingMobileGroup";

import { StyledContainer } from "./MovieDetailsUIMobile.style";

const MovieDetailsUIMobile = ({
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
    <MovieMobileHeader
      image={posterUrl}
      title={title}
      description={description}
      duration={duration}
      rating={rating}
      isLoading={isLoading}
    />
    <ShowingsMobileFilters filters={filters} onFilterChange={onFilterChange} />
    {showings &&
      showings.map(group => (
        <ShowingMobileGroup key={group.date} group={group} />
      ))}
  </StyledContainer>
);

MovieDetailsUIMobile.propTypes = {
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
    name: string,
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

export { MovieDetailsUIMobile };
