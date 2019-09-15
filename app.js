const express = require('express');
const path = require('path');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  interface dateTime {
    date: String
  }

  interface Cinema {
    name: String
  }

  type Seance {
    dateTime:dateTime
    cinema: Cinema
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

// The root provides a resolver function for each API endpoint
const root = {
  movies: () => [
    {
      genre: 'Drama',
      id: 1,
      image: 'https://sphoto.nasza-klasa.pl/8891700/3/main/f716f0214c.jpeg',
      rating: 5.4,
      name: 'Olden The Movie',
      showings: [
        {
          dataTime: {
            date: '2019-08-09 13:00:00.000000',
          },
        },
        {
          dataTime: {
            date: '2019-08-09 15:00:00.000000',
          },
        },
        {
          dataTime: {
            date: '2019-08-09 20:30:00.000000',
          },
        },
      ],
    },
  ],
};

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.use(
  '/olden',
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }),
);

app.get('/api/getList', (req, res) => {
  const list = ['item1', 'item2', 'item3'];
  res.json(list);
  console.log('Sent list of items');
});

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/client/build/index.html`));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`App is listening on port ${port}`);
