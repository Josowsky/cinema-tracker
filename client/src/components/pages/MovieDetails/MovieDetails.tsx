import React, { useState, useContext, FunctionComponent } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';

import { useFetchMovie } from 'shared/api/useFetchMovie';
import { routes } from 'shared/constants/constants.routes';
import { Movie } from 'shared/models';
import { ViewportContext } from 'components/context/ViewportContext/ViewportContext';

import { useMovieFilters } from './useMovieFilters';
import { DEFAULT_SHOWINGS_FILTERS, ShowingsFilters } from './MovieDetails.constants';

import { MovieDetailsUIDesktop } from './MovieDetailsUIDesktop/MovieDetailsUIDesktop';
import { MovieDetailsUIMobile } from './MovieDetailsUIMobile/MovieDetailsUIMobile';

type MovieDetailsProps = RouteComponentProps<{
  id?: string;
}>;

const MovieDetails: FunctionComponent<MovieDetailsProps> = ({ match: { params } = {} }) => {
  const movieId = params && params.id ? parseInt(params.id) : null;
  const [filters, setFilters] = useState<ShowingsFilters>(DEFAULT_SHOWINGS_FILTERS);

  /**
   * If movie id is missing in the url then redirect to home page
   */
  if (!movieId) return <Redirect to={routes.home} />;

  const { loading: isLoadingMovie, data } = useFetchMovie(movieId);
  const { movie = {} } = data || {};

  /**
   * TODO: If movie object is empty then return some kind of error page
   */
  if (movie === {}) return null;

  const filteredMovie = useMovieFilters(movie as Movie, filters);

  const handleFilterChange = (
    filterName: 'screenType' | 'dialoguesType',
    filterValue: ShowingsFilters['screenType'] | ShowingsFilters['dialoguesType'],
  ): void => {
    setFilters(filters => {
      if (filters[filterName] === filterValue)
        return {
          ...filters,
          [filterName]: null,
        };

      return {
        ...filters,
        [filterName]: filterValue,
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

const MovieDetailsHOC = withRouter(MovieDetails);

export { MovieDetailsHOC as MovieDetails };
