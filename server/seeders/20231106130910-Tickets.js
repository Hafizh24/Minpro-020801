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
        price: 0,
        EventID: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 110,
        price: 450000,
        EventID: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 300,
        price: 50000,
        EventID: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 250,
        price: 700000,
        EventID: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 30,
        price: 0,
        EventID: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 250,
        price: 645000,
        EventID: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 20,
        price: 134000,
        EventID: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 210,
        price: 194000,
        EventID: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        total_stock: 200,
        price: 0,
        EventID: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Tickets,", null, {});
  },
};
