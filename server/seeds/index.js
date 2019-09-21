import 'dotenv/config';

import { sequelize } from '../models';
import { createCinemas } from './createCinemas';
import { createMovies } from './createMovies';
import { createShowings } from './createShowings';

const isProduction = process.env.NODE_ENV === 'production';

sequelize.sync({ force: true }).then(async () => {
  if (!isProduction) {
    const cinemas = await createCinemas();
    const movies = await createMovies();

    movies.forEach((movie) => createShowings({ movieId: movie.id, cinemas }));
  }
});
