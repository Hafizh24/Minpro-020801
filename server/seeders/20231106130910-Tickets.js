"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Tickets", [
      {
        total_stock: 100,
        price: 155000,
        EventID: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 10,
        price: 15000,
        EventID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tickets,", null, {});
  },
};
