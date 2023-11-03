"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Users", [
      {
        fullname: "John",
        email: "john@example.com",
        password: "password1234",
        image_Url: "https://source.unsplash.com/random/900×700/?people&1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        fullname: "John",
        email: "john@example.com",
        password: "password1234",
        image_Url: "https://source.unsplash.com/random/900×700/?people&1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Users,", null, {});
  },
};
