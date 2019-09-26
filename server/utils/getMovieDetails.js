import moment from 'moment';
import { Op } from 'sequelize';

import models from '../models';

export const getMovieDetails = async ({ id }) => {
  const movie = await models.Movie.findByPk(id);
  const showings = await models.Showing.findAll({
    where: {
      MovieId: movie.id,
      time: { [Op.gte]: moment().toDate() },
    },
  }); // TODO: extract also cinema

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
        // cinema: String,
        subtitles: seance.data.subtitles,
        dimensionality: seance.data.dimensionality,
        dubbing: !seance.data.subtitles,
        url: seance.url,
      })),
    })),
  };
};
