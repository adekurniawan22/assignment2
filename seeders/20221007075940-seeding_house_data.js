'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Houses', [
      {
        location: 'Amerika',
        bedroom: 3,
        bathroom: 2,
        price: 699,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        location: 'Indonesia',
        bedroom: 2,
        bathroom: 1,
        price: 299,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Houses', null, {});
  }
};
