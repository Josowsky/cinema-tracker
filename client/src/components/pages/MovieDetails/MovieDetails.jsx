import React, { useState, useContext } from "react";
import { object } from "prop-types";
import { withRouter } from "react-router-dom";

import { useFetchMovie } from "../../../shared/api/useFetchMovie";
import { useMovieFilters } from "./useMovieFilters";
import { DEFAULT_SHOWINGS_FILTERS } from "./MovieDetails.constants";
import { ViewportContext } from "../../context/ViewportContext/ViewportContext";

import { MovieDetailsUIDesktop } from "./MovieDetailsUIDesktop/MovieDetailsUIDesktop";
import { MovieDetailsUIMobile } from "./MovieDetailsUIMobile/MovieDetailsUIMobile";

const MovieDetails = ({ match: { params } = {} }) => {
  const movieId = parseInt((params && params.id) || null);
  const [filters, setFilters] = useState(DEFAULT_SHOWINGS_FILTERS);

  const { loading: isLoadingMovie, data } = useFetchMovie(movieId);

  const { movie = {} } = data || {};

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

  const { isMdUp } = useContext(ViewportContext);

  if (isMdUp) {
    return (
      <MovieDetailsUIDesktop
        movie={filteredMovie}
        isLoading={isLoadingMovie}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
    );
  }

  return (
    <MovieDetailsUIMobile
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
