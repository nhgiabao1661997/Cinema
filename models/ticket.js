"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, MovieSession, Seat }) {
      // define association here
      this.belongsTo(User);
      this.belongsTo(MovieSession);
      this.hasOne(Seat);
    }
  }
  Ticket.init(
    {
      userId: DataTypes.INTEGER,
      movieId: DataTypes.INTEGER,
      movieSessionId: DataTypes.INTEGER,
      seatId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Ticket",
    }
  );
  return Ticket;
};
