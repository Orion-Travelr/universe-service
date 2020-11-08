'use strict';

const _ = require("lodash");
const models = require("../../server/models");
const planets = require("./stubs/planets");
const uuidv4 = require('uuid/v4');
const faker = require('faker');

const Planet = models.Planet;
let planetData = [];

_.each(planets, (planet) => {
  let fields = planet.fields;
  let population = fields.population;
  let rotation = fields.rotation_period;
  let diameter = fields.diameter;

  if (population === 'unknown') {
    population = 0;
  }

  if (rotation === 'unknown') {
    rotation = 0;
  }

  if (diameter === 'unknown') {
    diameter = 0;
  }

  planetData.push({
    uuid: uuidv4(),
    galaxy_id: Math.floor(Math.random() * 6) + 1,
    name: fields.name,
    population: population,
    diameter: diameter,
    climate: fields.climate,
    price_cents: (Math.floor(Math.random() * 50) + 400) * 100,
    rotation_period_hours: rotation,
    description: faker.lorem.paragraphs(2),
    featured: Math.random() >= 0.5 ? new Date() : null,
    terrains: fields.terrain.split(',').map((s)=>s.trim()),
  });
});


module.exports = {
  up: (queryInterface, Sequelize) => {
    return models.sequelize.transaction(function (t) {
      return Planet.bulkCreate(planetData, {transaction: t});
    });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('planets', null, {});
  }
};
