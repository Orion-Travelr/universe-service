import {PlanetController} from '../modules/planet/application/http/PlanetController';
import {PlanetPersistenceRepository} from '../modules/planet/infrastructure';

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
      // {
      //   method: "GET",
      //   path: "/galaxies",
      //   config: {
      //     id: 'galaxies.index',
      //     handler: index
      //   }
      // },
      // {
      //   method: "GET",
      //   path: "/galaxies/{id}",
      //   config: {
      //     id: 'galaxies.show',
      //     handler: show,
      //   }
      // }
    ]);
  }
};
