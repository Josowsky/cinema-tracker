import models from '../models';

const createMovies = () => new Promise((resolve) => {
  models.Movie.bulkCreate([
    {
      title: 'Gladiator',
      genre: 'Dramat historyczny',
      description: 'Some description for the Gladiator',
      poster: 'https://images-na.ssl-images-amazon.com/images/I/51o9U06EV8L.jpg',
      rating: 8.1,
    }, {
      title: 'Labirynt',
      genre: 'Thriller',
      description: 'Some description for the Prisoners',
      poster: 'https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix8L-GttbkAhWDlIsKHdfcCn0QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.amazon.com%2FPrisoners-Poster-27-40-102cm%2Fdp%2FB00KAL2JYE&psig=AOvVaw3X4gh5yktVXuHO7DGqVZgP&ust=1568760374291457',
      rating: 7.9,
    },
  ]).then(() => models.Movie.findAll()).then((movies) => {
    resolve(movies);
  });
});

export { createMovies };
