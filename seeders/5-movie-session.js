"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "MovieSession",
      [
        {
          cinemaId: 1,
          movieId: 1,
          date: new Date("2021-08-10"),
          startTime: new Date("2021-08-10 13:00:00"),
          endTime: new Date("2021-08-10 14:30:00"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cinemaId: 1,
          movieId: 2,
          date: new Date("2021-08-11"),
          startTime: new Date("2021-08-11 15:00:00"),
          endTime: new Date("2021-08-11 16:00:00"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cinemaId: 2,
          movieId: 1,
          date: new Date("2021-08-10"),
          startTime: new Date("2021-08-10 11:00:00"),
          endTime: new Date("2021-08-10 12:30:00"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cinemaId: 2,
          movieId: 2,
          date: new Date("2021-08-10"),
          startTime: new Date("2021-08-10 13:00:00"),
          endTime: new Date("2021-08-10 14:30:00"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cinemaId: 2,
          movieId: 3,
          date: new Date("2021-08-12"),
          startTime: new Date("2021-08-12 17:00:00"),
          endTime: new Date("2021-08-12 19:30:00"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("MovieSession", null, {});
  },
};
