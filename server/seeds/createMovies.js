import models from '../models';

const createMovies = () =>
  new Promise(resolve => {
    models.Movie.bulkCreate([
      {
        title: 'Gladiator',
        genre: 'Dramat historyczny',
        description: 'Some description for the Gladiator',
        poster:
          'https://images-na.ssl-images-amazon.com/images/I/51o9U06EV8L.jpg',
        rating: 8.1,
        duration: 155,
        isActive: true,
        isComplete: true,
      },
      {
        title: 'Labirynt',
        genre: 'Thriller',
        description: 'Some description for the Prisoners',
        poster:
          'https://ssl-gfx.filmweb.pl/po/71/69/507169/7568460.6.jpg',
        rating: 7.9,
        duration: 153,
        isActive: true,
        isComplete: true,
      },
    ])
      .then(() => models.Movie.findAll())
      .then(movies => {
        resolve(movies);
      });
  });

export { createMovies };
