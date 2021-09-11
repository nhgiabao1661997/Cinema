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
      "Cinemas",
      [
        {
          name: "Star-001",
          address: "101 203 HCM",
          image: "star001.jpg",
          cineplexId: 1, //Star = 1
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "BHD-TT",
          address: "50 50 50 DN",
          image: "BHD-TT.jpg",
          cineplexId: 2, //BHD = 1
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
    await queryInterface.bulkDelete("Cinemas", null, {});
  },
};
