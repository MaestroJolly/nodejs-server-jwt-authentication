'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      otherName: 'Jane',
      email: 'example@example.com',
      age: 20,
      sex: 'M',
      country: 'NG',
      password: 'test',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('Users', [{
      firstName: 'John',
      lastName: 'Doe',
      otherName: 'Jane',
      email: 'example@example.com',
      age: 20,
      sex: 'M',
      country: 'NG',
      password: 'test',
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  }
};
