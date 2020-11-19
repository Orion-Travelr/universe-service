import {PlanetController} from '../application/http/planetController';
import {PlanetPersistenceRepository, GalaxyPersistenceRepository} from '../infrastructure';
import {GalaxyController} from '../application/http/galaxyController';

const planetController = new PlanetController(PlanetPersistenceRepository);
const galaxyController = new GalaxyController(GalaxyPersistenceRepository);

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
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
