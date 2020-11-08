'use strict';

const models = require('../../server/models');
const pivot = require("./stubs/terrain_planet_pivot");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return models.Terrain_Planet.bulkCreate(pivot, {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('terrain_planet', null, {});
  }
};
