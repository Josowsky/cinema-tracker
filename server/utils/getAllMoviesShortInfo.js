import moment from 'moment';

import models from '../models';

export const getAllMoviesShortInfo = async () => {
  const movies = await models.Movie.findAll();

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
