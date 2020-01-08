'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      name: 'ari supriatna',
      email: 'arisupriatna703@gmail.com',
      phone_number: '085777282844',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'ridho septian ramadhan',
      email: 'ridhoseptian@gmail.com',
      phone_number: '085777272755',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Tiara Indriyanti',
      email: 'tiaraindriyanti@gmail.com',
      phone_number: '085777212177',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
