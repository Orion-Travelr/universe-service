'use strict';

const models = require('../../server/models');
const planets = require("./stubs/files");
const uuidv4 = require('uuid/v4');

const File = models.File;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return File.bulkCreate(planets.map((planet) => {
        planet.uuid = uuidv4();
        return planet;
      }), {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('planets', null, {});
  }
};
