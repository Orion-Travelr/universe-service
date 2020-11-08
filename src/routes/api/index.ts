import {index, show} from '../../controllers/planet';

export default {
  name: "ApiRoutes",
  register: async (server: any, options: any) => {
    server.route([
      {
        method: "GET",
        path: "/planet",
        config: {
          id: 'planet.index',
          handler: index
        }
      },
      {
        method: "GET",
        path: "/planet/{id}",
        config: {
          id: 'planet.show',
          handler: show,
        }
      },
      {
        method: "GET",
        path: "/galaxies",
        config: {
          id: 'galaxies.index',
          handler: index
        }
      },
      {
        method: "GET",
        path: "/galaxies/{id}",
        config: {
          id: 'galaxies.show',
          handler: show,
        }
      }
    ]);
  }
};
