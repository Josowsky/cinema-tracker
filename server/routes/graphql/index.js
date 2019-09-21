import graphqlHTTP from 'express-graphql';
import express from 'express';

import { getAllMoviesShortInfo, getMovieDetails } from '../../utils';
import { schema } from './schema';

const router = express.Router();

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: {
      movies: getAllMoviesShortInfo,
      movie: getMovieDetails,
    },
    graphiql: process.env.NODE_ENV === 'development',
  }),
);

module.exports = router;
