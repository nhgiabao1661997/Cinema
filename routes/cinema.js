const express = require("express");
const {
  getListCinema,
  getDetailCinema,
} = require("../controllers/cinemaController");
const cinemaRouter = express.Router();

cinemaRouter.get("/", getListCinema);
cinemaRouter.get("/:id", getDetailCinema);

module.exports = {
  cinemaRouter,
};
