const cinema = (sequelize, DataTypes) => {
  const Cinema = sequelize.define('Cinema', {
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    location: {
      type: DataTypes.STRING,
    },
  });
  return Cinema;
};

export default cinema;
