const router = require('express').Router();
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Seance {
    date: String
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

  type Movie {
    genre: String
    id: Int!
    image: String
    banner: String
    rating: Float
    duration: String
    name: String
    description: String
    showings: [Showing!]
  }

  type Query {
    movies: [Movie!]
    movie(id: Int): Movie
  }
`);

const MOVIES = {
  1: {
    genre: 'Dramat historyczny',
    id: 1,
    image: 'https://images-na.ssl-images-amazon.com/images/I/51o9U06EV8L.jpg',
    rating: 8.1,
    name: 'Gladiator',
    showings: [
      {
        date: '2019-08-09',
        seances: [
          {
            date: '2019-08-09 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-09 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '2D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-10',
        seances: [
          {
            date: '2019-08-10 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '3D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-10 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '3D',
            dubbing: true,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-11',
        seances: [
          {
            date: '2019-08-11 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-11 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '3D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-12',
        seances: [
          {
            date: '2019-08-12 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-12 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '3D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
    ],
  },
  2: {
    genre: 'Thriller',
    id: 2,
    image: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8L-GttbkAhWDlIsKHdfcCn0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FPrisoners-Poster-27-40-102cm%2Fdp%2FB00KAL2JYE&psig=AOvVaw3X4gh5yktVXuHO7DGqVZgP&ust=1568760374291457',
    rating: 7.9,
    name: 'Labirynt',
    showings: [
      {
        date: '2019-08-09',
        seances: [
          {
            date: '2019-08-09 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-09 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '2D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-10',
        seances: [
          {
            date: '2019-08-10 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '3D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-10 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '3D',
            dubbing: true,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-11',
        seances: [
          {
            date: '2019-08-11 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-11 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '3D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
      {
        date: '2019-08-12',
        seances: [
          {
            date: '2019-08-12 13:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: false,
            dimensionality: '2D',
            dubbing: true,
            url: 'https://google.com',
          },
          {
            date: '2019-08-12 20:00:00.000000',
            cinema: 'Helios Poznań',
            subtitles: true,
            dimensionality: '3D',
            dubbing: false,
            url: 'https://google.com',
          },
        ],
      },
    ],
  },
};

const root = {
  movies: () => Object.keys(MOVIES).map((key) => MOVIES[key]),
  movie: ({ id }) => MOVIES[id],
};

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

module.exports = router;
