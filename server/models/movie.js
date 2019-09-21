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
    photo: {
      type: DataTypes.STRING,
    },
  });
  return Movie;
};

export default movie;
