import {PlanetController} from '../application/http/planetController';
import {
  PlanetPersistenceRepository,
  GalaxyPersistenceRepository,
  AmenityPersistenceRepository
} from '../infrastructure';
import {GalaxyController} from '../application/http/galaxyController';
import {AmenityController} from "../application/http/amenityController";

const planetController = new PlanetController(PlanetPersistenceRepository);
const galaxyController = new GalaxyController(GalaxyPersistenceRepository);
const amenityController = new AmenityController(AmenityPersistenceRepository);

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
      {
        method: "GET",
        path: "/amenities",
        config: {
          id: 'amenities.index',
          handler: amenityController.index.bind(amenityController)
        }
      },
      {
        method: "GET",
        path: "/planets",
        config: {
          id: 'planet.index',
          handler: planetController.index.bind(planetController)
        }
      },
      {
        method: "GET",
        path: "/planets/{id}",
        config: {
          id: 'planet.show',
          handler: planetController.show.bind(planetController)
        }
      },
      {
        method: "GET",
        path: "/planets/search",
        config: {
          id: 'planet.search',
          handler: planetController.search.bind(planetController)
        }
      },
      {
        method: "GET",
        path: "/planets/{id}/reviews",
        config: {
          id: 'planet.reviews',
          handler: planetController.search.bind(planetController)
        }
      },
      {
        method: "GET",
        path: "/galaxies",
        config: {
          id: 'galaxy.index',
          handler: galaxyController.index.bind(galaxyController)
        }
      },
      {
        method: "GET",
        path: "/galaxies/{id}",
        config: {
          id: 'galaxy.show',
          handler: galaxyController.show.bind(galaxyController)
        }
      },
    ]);
  }
};
