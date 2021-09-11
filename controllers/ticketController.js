const {
  Ticket,
  Movie,
  User,
  MovieSession,
  Cinema,
  sequelize,
} = require("../models");

const getAllTicketUserHasBeenBooking = async (req, res) => {
  const { id } = req.query;

  try {
    const [ticket] = await sequelize.query(
      `
      select tickets.id as ticketId, tickets.userId as userId , 
      tickets.moviesessionid as sessionId , tickets.seatid as seatId ,
      movies.name as movieName
      from tickets 
      join moviesessions on tickets.moviesessionid = moviesessions.id
      join movies on moviesessions.movieid = movies.id
      where tickets.userid  = ${id}
          `
    );

    if (Array.isArray(ticket) && ticket.length !== 0) {
      res.status(200).send(ticket);
    } else {
      res.status(200).send("Bạn chưa có mua vé nào");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllSeatByShowTime = async (req, res) => {
  const { startTime } = req.query;

  try {
    const [ticket] = await sequelize.query(
      `
      select tickets.id as ticketCode , movies.name as movieName, 
moviesessions.date , moviesessions.startTime, moviesessions.endTime , 
seats.name as seatName , seats.status, seats.price, seats.type 
from tickets join moviesessions on tickets.moviesessionId = moviesessions.id
join movies on moviesessions.movieId = movies.id
join seats on tickets.seatId = seats.id
where moviesessions.startTime = "${startTime}"
          `
    );

    if (Array.isArray(ticket) && ticket.length !== 0) {
      res.status(200).send(ticket);
    } else {
      res.status(200).send("Không có suất chiếu trong thời gian này");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAllTicketUserHasBeenBooking,
  getAllSeatByShowTime,
};
