import moment from 'moment';
import { Op } from 'sequelize';

import models from '../models';

/**
 * Returns details for a single movie.
 * Structure of the returned object follows the Graphql schema.
 * @param {number} id - Id of a movie.
 */
export const getMovieDetails = async ({ id }) => {
  const movie = await models.Movie.findByPk(id);
  const showings = await models.Showing.findAll({
    where: {
      MovieId: movie.id,
      time: { [Op.gte]: moment().toDate() },
    },
    include: [
      {
        model: models.Cinema,
      },
    ],
  });

  const groupedSeances = {};
  showings.forEach(showing => {
    // Ignore seances in the past
    if (!moment(showing.time).diff(moment())) return;

    const date = moment(showing.time).format('DD.MM');

    if (groupedSeances[date]) {
      return groupedSeances[date].push(showing);
    }

    groupedSeances[date] = [showing];
  });

  return {
    genre: movie.genre,
    id: movie.id,
    posterUrl: movie.poster,
    /**
     * We don't have access to banner yet.
     * This field will be returned when crawler will be able to provide it.
     */
    bannerUrl: '',
    rating: movie.rating,
    duration: {
      hours: Math.floor(movie.duration / 60),
      minutes: movie.duration % 60,
    },
    title: movie.title,
    description: movie.description,
    showings: Object.keys(groupedSeances).map(date => ({
      date,
      seances: groupedSeances[date].map(seance => ({
        time: moment(seance.time).format('HH:MM'),
        cinema: seance.Cinema.dataValues.name,
        subtitles: seance.data.subtitles,
        dimensionality: seance.data.dimensionality,
        dubbing: !seance.data.subtitles,
        url: seance.url,
      })),
    })),
  };
};
