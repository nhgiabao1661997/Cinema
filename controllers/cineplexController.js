const { Cineplex, Cinema, sequelize } = require("../models");
const getListCineplexWithCinema = async (req, res) => {
  try {
    const cineplexList = await Cineplex.findAll({
      include: Cinema,
    });
    res.status(200).send(cineplexList);
  } catch (error) {
    res.status(500).send(error);
  }
};
const getByCineplex = async (req, res) => {
  const { nameCineplex } = req.query;
  try {
    const [results] = await sequelize.query(
      `
            select cinemas.name as cinemasName, cineplexes.name as cineplexesName from cinemas
            inner join cineplexes
            on cinemas.cineplexId = cineplexes.id
            where cineplexes.name like "%${nameCineplex}%";
            `
    );
    res.status(200).send(results);
  } catch (error) {
    res.status(500).send(error);
  }
};
module.exports = {
  getListCineplexWithCinema,
  getByCineplex,
};
