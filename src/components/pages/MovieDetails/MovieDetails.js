import React, { useState } from "react";
import { object } from "prop-types";
import { withRouter } from "react-router-dom";
import get from "lodash.get";

import { useMovieFetch, useMovieFilters } from "./MovieDetails.hooks";
import { DEFAULT_SHOWINGS_FILTERS } from "./MovieDetails.constants";

import { MovieDetailsUIDesktop } from "./MovieDetailsUIDesktop/MovieDetailsUIDesktop";

const MovieDetails = ({ match }) => {
  const movieId = get(match, "params.id", null);
  const [filters, setFilters] = useState(DEFAULT_SHOWINGS_FILTERS);

  const movieData = useMovieFetch(movieId);

  const isLoadingMovie = movieData.isFetching;
  const movie = movieData.data;

  const filteredMovie = useMovieFilters(movie, filters);

  const handleFilterChange = (filterName, filterValue) => {
    setFilters(filters => {
      if (filters[filterName] === filterValue)
        return {
          ...filters,
          [filterName]: null
        };

      return {
        ...filters,
        [filterName]: filterValue
      };
    });
  };

  return (
    <MovieDetailsUIDesktop
      movie={filteredMovie}
      isLoading={isLoadingMovie}
      filters={filters}
      onFilterChange={handleFilterChange}
    />
  );
};

MovieDetails.propTypes = {
  match: object.isRequired
};

const MovieDetailsHOC = withRouter(MovieDetails);

export { MovieDetailsHOC as MovieDetails };
