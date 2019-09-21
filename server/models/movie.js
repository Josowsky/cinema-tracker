const movie = (sequelize, DataTypes) => {
  const Movie = sequelize.define('Movie', {
    title: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    poster: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.FLOAT,
    },
  });
  return Movie;
};

export default movie;
