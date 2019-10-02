import React from "react";
import { arrayOf, func, bool, number, string, shape, oneOf } from "prop-types";

import { MovieMobileHeader } from "./MovieMobileHeader/MovieMobileHeader";
import { ShowingsMobileFilters } from "./ShowingsMobileFilters/ShowingsMobileFilters";
import { ShowingMobileGroup } from "./ShowingMobileGroup/ShowingMobileGroup";

import { StyledContainer } from "./MovieDetailsUIMobile.style";

const MovieDetailsUIMobile = ({
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
  } = {},
  filters,
  onFilterChange
}) => (
  <StyledContainer>
    <MovieMobileHeader
      image={image}
      title={name}
      description={description}
      duration={duration}
      rating={rating}
      isLoading={isLoading}
    />
    <ShowingsMobileFilters filters={filters} onFilterChange={onFilterChange} />
    {showings.map(group => (
      <ShowingMobileGroup key={group.date} group={group} />
    ))}
  </StyledContainer>
);

MovieDetailsUIMobile.propTypes = {
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
