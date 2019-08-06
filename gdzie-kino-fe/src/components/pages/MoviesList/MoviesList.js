import React from "react";

import { InlineLoading } from "../../loading";
import { FilmListElement } from "../../film.list.element";
import { NoResults } from "../../no.results";
import { useMoviesFetch } from "./MovieList.hooks";

import { StyledContainer, StyledLoadingContainer } from "./MoviesList.style";

const MoviesList = () => {
  const moviesData = useMoviesFetch();

  const isFetchingMovies = moviesData.isFetching;
  const movies = moviesData.data;

  // TODO: filtering logic should be in some hook or something
  // const { genre } = filters;
  // const filteredFilms = movies.filter(film => {
  //   if (
  //     search &&
  //     film.name &&
  //     !film.name
  //       .toLowerCase()
  //       .replace(/\s/g, "")
  //       .includes(search.toLowerCase().replace(/\s/g, ""))
  //   ) {
  //     return false;
  //   }

  //   if (genre && !film.genre.includes(genre)) {
  //     return false;
  //   }

  //   return true;
  // });

  if (isFetchingMovies)
    return (
      <StyledLoadingContainer>
        <InlineLoading />
      </StyledLoadingContainer>
    );

  return (
    <StyledContainer>
      {movies ? (
        movies.map(movie => <FilmListElement key={movie.id} film={movie} />)
      ) : (
        <NoResults />
      )}
    </StyledContainer>
  );
};

export { MoviesList };
