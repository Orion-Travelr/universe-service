'use strict';

const models = require('../../server/models');
const amenities = require("./stubs/amenities");
const uuidv4 = require('uuid/v4');

const File = models.Amenity;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return File.bulkCreate(amenities.map((amenity) => {
        amenity.uuid = uuidv4();
        return amenity;
      }), {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('amenities', null, {});
  }
};
