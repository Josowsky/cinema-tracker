import React from "react";

import { MoviesListElement } from "../../ui/MoviesListElement/MoviesListElement";
import { NoResults } from "../../ui/NoResults/NoResults";
import { useMoviesFetch } from "./MovieList.hooks";

import { StyledContainer, StyledLoadingContainer } from "./MoviesList.style";

const MoviesList = () => {
  // TODO: handle error
  const { loading: isLoadingMovies, data } = useMoviesFetch();

  const { movies } = data || {};

  if (isLoadingMovies)
    // TODO: Add proper loading state
    return (
      <StyledLoadingContainer>
        {/* <InlineLoading /> */}Loading
      </StyledLoadingContainer>
    );

  return (
    <StyledContainer>
      {movies ? (
        movies.map(movie => <MoviesListElement key={movie.id} movie={movie} />)
      ) : (
        <NoResults />
      )}
    </StyledContainer>
  );
};

export { MoviesList };
