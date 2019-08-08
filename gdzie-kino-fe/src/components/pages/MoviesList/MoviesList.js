import React from "react";

import { InlineLoading } from "../../loading";
import { MoviesListElement } from "../../ui/MoviesListElement/MoviesListElement";
import { NoResults } from "../../no.results";
import { useMoviesFetch } from "./MovieList.hooks";

import { StyledContainer, StyledLoadingContainer } from "./MoviesList.style";

const MoviesList = () => {
  const moviesData = useMoviesFetch();

  const isLoadingMovies = moviesData.isFetching;
  const movies = moviesData.data;

  if (isLoadingMovies)
    return (
      <StyledLoadingContainer>
        <InlineLoading />
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
