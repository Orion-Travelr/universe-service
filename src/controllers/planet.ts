import db from '../models'
import planetserializer from "../resources/planetserializer";

const Planet = db.Planet;

// TODO: Add JSON API Spec support
export const index = (request: any, h: any) => {
  return Planet.findAll({ include: ['amenities', 'galaxy', 'photo', 'terrains'] }).then((planets: any) => {
    return planetserializer(request, planets);
  });
};

// TODO: Add abstraction to use eagerloading.
export const show = (request: any, h: any) => {
  return Planet.findById(request.params.id, { include: ['amenities', 'galaxy', 'photo', 'terrains']}).then((planet: any) => {
    return planetserializer(request, planet);
  });
};
