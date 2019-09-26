import { buildSchema } from 'graphql';

export const schema = buildSchema(`
  type Seance {
    time: String
    cinema: String
    subtitles: String
    dimensionality: String
    dubbing: Boolean
    url: String
  }

  type Showing {
    date: String
    seances: [Seance!]
  }

  type Duration {
    hours: Int!
    minutes: Int!
  }

  type MovieDetails {
    genre: String
    id: Int!
    posterUrl: String
    bannerUrl: String
    rating: Float
    duration: Duration
    title: String
    description: String
    showings: [Showing!]
  }

  type Movie {
    genre: String
    id: Int!
    posterUrl: String
    rating: Float
    title: String
    showingsTime: [String!]
  }

  type Query {
    movies: [Movie!]
    movie(id: Int): MovieDetails
  }
`);
