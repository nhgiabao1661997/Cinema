const express = require("express");
const {
  getMovieList,
  getMovieDetail,
  addMovie,
  removeMovie,
  updateMovie,
  getAllCinemaWithCineplexByMovieName,
  getAllListMovieWithDateShowtime,
  getAllListMovieWithCineplex,
} = require("../controllers/movieController");
const { getAllSeatByShowTime } = require("../controllers/ticketController");
const movieRouter = express.Router();

movieRouter.get("/", getMovieList);
movieRouter.get("/:id", getMovieDetail);
movieRouter.post("/", addMovie);
movieRouter.delete("/:id", removeMovie);
movieRouter.put("/:id", updateMovie);

movieRouter.post(
  "/get-movie-with-cinema-and-cineplex",
  getAllCinemaWithCineplexByMovieName
);

movieRouter.post(
  "/get-list-movie-with-date-showtime",
  getAllListMovieWithDateShowtime
);
movieRouter.post("/get-list-movie-with-cineplex", getAllListMovieWithCineplex);
movieRouter.post("/get-seat-by-showtime", getAllSeatByShowTime);
module.exports = { movieRouter };
