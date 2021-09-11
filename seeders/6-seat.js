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
      "Seats",
      [
        {
          name: "Ghế 1",
          status: true,
          price: 100,
          type: "Bình thường",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghế 2",
          status: true,
          price: 200,
          type: "Bình thường",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Ghế 3",
          status: false,
          price: 100,
          type: "Bình thường",
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
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
