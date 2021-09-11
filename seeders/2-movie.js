"use strict";

const { DATEONLY } = require("sequelize");

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
      "Movies",
      [
        {
          name: "Vẫn Cứ Thích Em ",
          startDate: new Date("2016-06-06"),
          description: "Phim Vẫn Cứ Thích Em 2021",
          rating: 8,
          poster: "vancuthichem.poster",
          trailer: "vancuthichem.trailer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Đấu Phá Thương Khung",
          startDate: new Date("2019-09-19"),
          description: "Phim Đấu Phá Thương Khung 2021",
          rating: 9,
          poster: "dauphathuongkhung.poster",
          trailer: "dauphathuongkhung.trailer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Tinh Thần Biến",
          startDate: new Date("2018-07-15"),
          description: "Tinh Thần Biến 2021",
          rating: 10,
          poster: "tinhthanbien.poster",
          trailer: "tinhthanbien.trailer",
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
    await queryInterface.bulkDelete("Movies", null, {});
  },
};
