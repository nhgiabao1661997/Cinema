const { Movie, sequelize } = require("../models");

const getMovieList = async (req, res) => {
  try {
    const movieLists = await Movie.findAll();
    if (movieLists) {
      if (Array.isArray(movieLists) && movieLists.length !== 0) {
        res.status(200).send(movieLists);
      } else {
        res.status(200).send("Danh sách phim rỗng");
      }
    } else {
      res.status(404).send("Danh sách phim không tồn tại");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getMovieDetail = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await Movie.findOne({ where: { id } });
    if (movieDetail !== null && movieDetail.id == id) {
      res.status(200).send(movieDetail);
    } else {
      res.status(404).send("Không tìm thấy phim này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const addMovie = async (req, res) => {
  const { name, startDate, description, rating, poster, trailer } = req.body;
  try {
    const newMovie = await Movie.create({
      name,
      startDate,
      description,
      rating,
      poster,
      trailer,
    });
    res.status(200).send(newMovie);
  } catch (error) {
    res.status(500).send(error);
  }
};

const removeMovie = async (req, res) => {
  const { id } = req.params;
  try {
    const movieDetail = await Movie.findOne({ where: { id } });
    if (movieDetail !== null && movieDetail.id == id) {
      await Movie.destroy({
        where: {
          id: id,
        },
      });
      res.status(200).send("Xoá thành công");
    } else {
      res.status(404).send("Không tìm thấy phim này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
const updateMovie = async (req, res) => {
  const { id } = req.params;
  const { name, startDate, description, rating, poster, trailer } = req.body;
  try {
    const movieDetail = await Movie.findOne({ where: { id } });
    if (movieDetail !== null && movieDetail.id == id) {
      await Movie.update(
        { name, startDate, description, rating, poster, trailer },
        {
          where: {
            id: id,
          },
        }
      );
      res.status(200).send("Cập nhật thành công");
    } else {
      res.status(404).send("Không tìm thấy phim này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllCinemaWithCineplexByMovieName = async (req, res) => {
  const { movieName } = req.query;
  try {
    const [movie] = await sequelize.query(
      `
      select movies.name as movieName , movies.startDate, movies.description, movies.rating, movies.poster, movies.trailer , 
      cinemas.name as cinemaName , 
      cinemas.address , cineplexes.name as cineplexName from movies join moviesessions on movies.id = moviesessions.movieId
      join cinemas on moviesessions.cinemaId = cinemas.id join cineplexes on cinemas.cineplexId = cineplexes.id
      where movies.name like "%${movieName}%"
      `
    );
    if (Array.isArray(movie) && movie.length !== 0) {
      res.status(200).send(movie);
    } else {
      res.status(404).send("Không tìm thấy phim này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllListMovieWithDateShowtime = async (req, res) => {
  const { date } = req.query;
  try {
    const [movie] = await sequelize.query(
      `
      select movies.name as movieName , movies.startDate, movies.description, movies.rating, movies.poster, movies.trailer , 
      cinemas.name as cinemaName , 
      cinemas.address , cineplexes.name as cineplexName , moviesessions.date  from movies join moviesessions on movies.id = moviesessions.movieId
      join cinemas on moviesessions.cinemaId = cinemas.id join cineplexes on cinemas.cineplexId = cineplexes.id
      where moviesessions.date  = '${date} 07:00:00'
      `
    );
    if (Array.isArray(movie) && movie.length !== 0) {
      res.status(200).send(movie);
    } else {
      res.status(404).send("Không tìm thấy phim cho ngày này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllListMovieWithCineplex = async (req, res) => {
  const { cineplexName } = req.query;
  try {
    const [movie] = await sequelize.query(
      `
      select cineplexes.name as CineplexName, 
      cinemas.name as cinemaName ,
      cinemas.address, movies.name as movieName , movies.startDate, movies.description from movies join moviesessions on movies.id = moviesessions.movieId
      join cinemas on moviesessions.cinemaId = cinemas.id join cineplexes on cinemas.cineplexId = cineplexes.id
      where cineplexes.name like "${cineplexName}"
      `
    );
    if (Array.isArray(movie) && movie.length !== 0) {
      res.status(200).send(movie);
    } else {
      res.status(404).send("Không tìm thấy phim theo tên rạp này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getMovieList,
  getMovieDetail,
  addMovie,
  removeMovie,
  updateMovie,
  getAllCinemaWithCineplexByMovieName,
  getAllListMovieWithDateShowtime,
  getAllListMovieWithCineplex,
};
