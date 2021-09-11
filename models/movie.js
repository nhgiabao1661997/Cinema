"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ MovieSession }) {
      // define association here
      this.hasMany(MovieSession, { as: "movieId" });
    }
  }
  Movie.init(
    {
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      description: DataTypes.STRING,
      rating: DataTypes.INTEGER,
      poster: DataTypes.STRING,
      trailer: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Movie",
    }
  );
  return Movie;
};
