import React, { FunctionComponent } from 'react';

import { MoviesListElement } from '../../ui/MoviesListElement/MoviesListElement';
import { NoResults } from '../../ui/NoResults/NoResults';
import { useFetchMovies } from '../../../shared/api/useFetchMovies';

import { StyledContainer, StyledLoadingContainer } from './MoviesList.style';

const MoviesList: FunctionComponent = () => {
  const { loading: isLoadingMovies, data } = useFetchMovies();

  const { movies = [] } = data || {};

  if (isLoadingMovies)
    // TODO: Add proper loading state
    return <StyledLoadingContainer>{/* <InlineLoading /> */}Loading</StyledLoadingContainer>;

  return (
    <StyledContainer>
      {movies ? movies.map(movie => <MoviesListElement key={movie.id} movie={movie} />) : <NoResults />}
    </StyledContainer>
  );
};

export { MoviesList };
