import {PlanetController} from '../application/http/planetController';
import {PlanetPersistenceRepository} from '../infrastructure';

const controller = new PlanetController(PlanetPersistenceRepository);

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
      {
        method: "GET",
        path: "/planets",
        config: {
          id: 'planet.index',
          handler: controller.index.bind(controller)
        }
      },
      {
        method: "GET",
        path: "/planets/{id}",
        config: {
          id: 'planet.show',
          handler: controller.show.bind(controller)
        }
      },
    ]);
  }
};
