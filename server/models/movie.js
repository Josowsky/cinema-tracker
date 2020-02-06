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
    duration: {
      type: DataTypes.INTEGER,
    },
    /**
     * Is all data for this movie present?
     * Initially this field is set to false, because initially movie has only
     * title attribute.
     * This field is set to true after we scrape all necessary data for the given movie.
     */
    isComplete: {
      type: DataTypes.BOOLEAN,
    },
    /**
     * Should this movie be returned from the API?
     * Initially set to true.
     */
    isActive: {
      type: DataTypes.BOOLEAN,
    },
  });
  return Movie;
};

export default movie;
