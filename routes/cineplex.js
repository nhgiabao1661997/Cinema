const express = require("express");
const {
  getListCineplexWithCinema,
  getByCineplex,
} = require("../controllers/cineplexController");
const cineplexRouter = express.Router();

cineplexRouter.get("/", getListCineplexWithCinema);
cineplexRouter.get("/by-cineplex", getByCineplex);

module.exports = {
  cineplexRouter,
};
