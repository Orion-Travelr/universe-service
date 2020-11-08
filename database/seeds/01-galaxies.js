'use strict';

const Galaxy = require("../../server/models").Galaxy;
const uuidv4 = require('uuid/v4');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Galaxy.bulkCreate([
      {
        name: 'Comae Chronos',
        uuid: uuidv4(),
      },
      {
        name: 'Apus Kentaurus',
        uuid: uuidv4(),
      },
      {
        name: 'Gamma Orithyia',
        uuid: uuidv4(),
      },
      {
        name: 'Astraeus',
        uuid: uuidv4(),
      },
      {
        name: 'Aquarii Nebula',
        uuid: uuidv4(),
      },
      {
        name: 'Vortex',
        uuid: uuidv4(),
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('galaxies', null, {});
  }
};
