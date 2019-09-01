import React, { useState } from "react";
import { object } from "prop-types";
import { withRouter } from "react-router-dom";
import get from "lodash.get";

import { FilmDetailsFilter } from "../../film.details.filter";
import { FilmDetailsGroup } from "../../film.details.group";
import { NoResults } from "../../no.results";
import { getFormattedDuration } from "../../../utils/filmDetails";
import { useMovieFetch, useMovieFilters } from "./MovieDetails.hooks";
import { DEFAULT_SHOWINGS_FILTERS } from "./MovieDetails.constants";

import { MovieDetailsUIDesktop } from "./MovieDetailsUIDesktop/MovieDetailsUIDesktop";

import { StyledContainer } from "./MovieData.style";

// store fetched movie data
// store filters state
// apply filters to fetched showings
// show error if api returns error
// show loader if api is fetching data
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
    // <div>
    //   <div>
    //     <div className="d-flex align-items film-details__poster-and-desc">
    //       <div
    //         className="film-details__poster-box"
    //         style={{ backgroundImage: `url(${movie.image})` }}
    //       />
    //       <div className="film-details__description-box">
    //         <h1 className="film-details__title">{movie.name}</h1>
    //         <h2 className="film-details__genre">{movie.genre}</h2>
    //         <div className="d-flex align-items">
    //           <i className="film-details__duration-icon far fa-clock" />
    //           <p className="film-details__duration">
    //             {getFormattedDuration(movie.duration)}
    //           </p>
    //         </div>
    //         <div className="film-details__description">{movie.description}</div>
    //       </div>
    //     </div>
    //     <div className="d-flex align-items film-details__rating-and-like">
    //       <i className="film-details__rating-icon fas fa-star" />
    //       <p className="film-details__rating">{movie.rating}</p>
    //     </div>
    //   </div>
    //   <FilmDetailsFilter
    //     onFilterChange={handleToggleFilter}
    //     filters={filters}
    //   />
    //   {!movie.showings && (
    //     <div className="film-details__no-results">
    //       <NoResults />
    //     </div>
    //   )}
    //   {movie.showings.map(group => (
    //     <FilmDetailsGroup key={group.date} group={group} filters={filters} />
    //   ))}
    // </div>
  );
};

MovieDetails.propTypes = {
  match: object.isRequired
};

const MovieDetailsHOC = withRouter(MovieDetails);

export { MovieDetailsHOC as MovieDetails };
