import moment from 'moment';
import sample from 'lodash.sample';

import models from '../models';

const generateRandomShowing = ({
  movieId,
  cinemaIds,
  dayOffset,
  time: { hour, minute },
}) => ({
  time: moment()
    .add(dayOffset, 'days')
    .hour(hour)
    .minute(minute)
    .toDate(),
  url: 'https://google.com',
  data: {
    dimensionality: sample(['2D', '3D']),
    subtitles: sample([false, true]),
  },
  MovieId: movieId,
  CinemaId: sample(cinemaIds),
});

const createShowings = async ({ movieId, cinemas }) => {
  const cinemaIds = cinemas.map((cinema) => cinema.id);

  const showingsData = [
    { dayOffset: -1, time: { hour: 17, minute: 30 } },
    { dayOffset: -1, time: { hour: 19, minute: 20 } },
    { dayOffset: -1, time: { hour: 21, minute: 0 } },
    { dayOffset: 0, time: { hour: 17, minute: 30 } },
    { dayOffset: 0, time: { hour: 19, minute: 20 } },
    { dayOffset: 0, time: { hour: 21, minute: 0 } },
    { dayOffset: 1, time: { hour: 17, minute: 30 } },
    { dayOffset: 1, time: { hour: 20, minute: 20 } },
    { dayOffset: 1, time: { hour: 21, minute: 30 } },
    { dayOffset: 2, time: { hour: 17, minute: 30 } },
    { dayOffset: 2, time: { hour: 19, minute: 20 } },
    { dayOffset: 2, time: { hour: 21, minute: 30 } },
    { dayOffset: 3, time: { hour: 16, minute: 30 } },
    { dayOffset: 3, time: { hour: 19, minute: 20 } },
    { dayOffset: 3, time: { hour: 21, minute: 30 } },
    { dayOffset: 4, time: { hour: 17, minute: 15 } },
    { dayOffset: 4, time: { hour: 19, minute: 20 } },
    { dayOffset: 4, time: { hour: 21, minute: 30 } },
    { dayOffset: 5, time: { hour: 18, minute: 0 } },
    { dayOffset: 5, time: { hour: 19, minute: 10 } },
    { dayOffset: 5, time: { hour: 21, minute: 30 } },
    { dayOffset: 6, time: { hour: 17, minute: 30 } },
    { dayOffset: 6, time: { hour: 19, minute: 20 } },
    { dayOffset: 6, time: { hour: 22, minute: 45 } },
  ].map((timeData) => generateRandomShowing({ ...timeData, movieId, cinemaIds }));

  models.Showing.bulkCreate(showingsData);
};

export { createShowings };
