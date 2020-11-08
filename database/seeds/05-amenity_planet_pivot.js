'use strict';

const models = require('../../server/models');
const pivot = require("./stubs/amenity_planet_pivot");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return models.Amenity_Planet.bulkCreate(pivot, {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('amenity_planet', null, {});
  }
};
