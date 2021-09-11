"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MovieSession extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Movie, Cinema, Ticket }) {
      // define association here
      this.belongsTo(Movie);
      this.belongsTo(Cinema);
      this.hasOne(Ticket);
    }
  }
  MovieSession.init(
    {
      cinemaId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      startTime: DataTypes.DATE,
      endTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "MovieSession",
    }
  );
  return MovieSession;
};
