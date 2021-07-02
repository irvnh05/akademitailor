'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
     {
        name: "John Doe",
        profession: "admin micro",
        role: "admin",
        email: "admin@gmail.com",
        password: await bcrypt.hash('rahasia1234', 10),
        created_at: new Date(),
        updated_at: new Date()
     },
     {
      name: "John ",
      profession: "front end",
      role: "student",
      email: "jhon123@gmail.com",
      password: await bcrypt.hash('rahasia14', 10),
      created_at: new Date(),
      updated_at: new Date()
   }
  ]);
 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
  }
};
