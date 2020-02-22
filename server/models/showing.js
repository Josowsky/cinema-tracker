const showing = (sequelize, DataTypes) => {
  const Showing = sequelize.define('Showing', {
    time: {
      type: DataTypes.DATE,
    },
    url: {
      type: DataTypes.TEXT,
    },
    data: {
      type: DataTypes.JSON,
    },
  });

  Showing.associate = models => {
    Showing.belongsTo(models.Movie);
    Showing.belongsTo(models.Cinema);
  };

  return Showing;
};

export default showing;
