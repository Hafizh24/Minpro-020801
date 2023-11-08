"use strict";
const bcrypt = require("bcrypt");

const makePassword = (pw) => {
  return new Promise(async (rs) => {
    let salt, hash;
    (salt = await bcrypt.genSalt(10)), (hash = await bcrypt.hash(pw, salt));
    return rs(hash);
  });
};

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let password = await makePassword("password");
    return await queryInterface.bulkInsert("Users", [
      {
        name: "wildan Good",
        username: "wildan",
        email: "wildan@mail.com",
        password,
        image_url: "https://source.unsplash.com/random/900×700/?event&1",
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
  },
};
