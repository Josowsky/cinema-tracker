import models from '../models';

const createCinemas = () =>
  new Promise(resolve => {
    models.Cinema.bulkCreate([
      {
        name: 'Helios',
        location: '52.396517 16.955526',
      },
      {
        name: 'Cinema City Plaza',
        location: '52.442096 16.918940',
      },
    ])
      .then(() => models.Cinema.findAll())
      .then(cinemas => {
        resolve(cinemas);
      });
  });

export { createCinemas };
