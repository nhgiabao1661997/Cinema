const {
  Cinema,
  Cineplex,
  Showtime,
  MovieSession,
  Movie,
} = require("../models");

const getListCinema = async (req, res) => {
  try {
    const cinemaList = await Cinema.findAll({});
    res.status(200).send(cinemaList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getDetailCinema = async (req, res) => {
  const { id } = req.params;
  try {
    const cinema = await Cinema.findOne({ where: { id } });
    if (cinema !== null && cinema.id == id) {
      res.status(200).send(cinema);
    } else {
      res.status(404).send("Không tìm thấy rạp chiếu này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getListCinema,
  getDetailCinema,
};
