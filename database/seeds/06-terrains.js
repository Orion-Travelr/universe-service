'use strict';

const models = require('../../server/models');
const terrains = require("./stubs/terrains");
const uuidv4 = require('uuid/v4');

const Terrain = models.Terrain;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return Terrain.bulkCreate(terrains.map((terrain) => {
        terrain.uuid = uuidv4();
        return terrain;
      }), {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('terrains', null, {});
  }
};
