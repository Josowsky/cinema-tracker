import moment from 'moment';

import models from '../models';

/**
 * Returns list of all movies.
 * Structure of the returned object follows the Graphql schema.
 * For each movie, there is a "showingsTime" field which contains the array of closest showing times.
 * "showingsTime" array is 4 elements max.
 */
export const getAllMoviesShortInfo = async () => {
  const movies = await models.Movie.findAll({
    where: { isComplete: true, isActive: true },
  });

  const queryPromises = movies.map(async movie => {
    const showings = await models.Showing.findAll({
      where: { MovieId: movie.id },
      order: [['time', 'DESC']],
      limit: 4,
    });

    return {
      movie,
      showings: showings.map(showing =>
        moment(showing.time).format('HH:MM'),
      ),
    };
  });

  const parsedMovies = await Promise.all(queryPromises);

  return parsedMovies.map(({ movie, showings }) => ({
    genre: movie.genre,
    id: movie.id,
    posterUrl: movie.poster,
    rating: movie.rating,
    title: movie.title,
    showingsTime: showings,
  }));
};
