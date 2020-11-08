"use strict";

import { Server, Request, ResponseToolkit } from "@hapi/hapi";
import config from './config';
import routes from './routes/api';
const akaya = require('akaya');

const HOST = config.host;
const HOST_PORT = config.port;

(async () => {
  try {

    const server = new Server({
      port: HOST_PORT,
      host: HOST,
      routes: {
        cors: {
          origin: ["*"],
          headers: ["Accept", "Content-Type"],
          additionalHeaders: ["X-Requested-With"]
        }
      },
      debug: { request: ['*'] }
    });

    await server.register([akaya, routes], {
      routes: {
        prefix: '/api'
      }
    });

    server.route({
      method: '*',
      path: '/{any*}',
      handler: (request:Request, h: ResponseToolkit) => {
        return h.response({statusCode: 404, server: config.name, host: `${HOST}:${HOST_PORT}`}).code(404);
      }
    })

    server.events.on('response', function (response: any) {
      console.log(`${HOST}:${HOST_PORT}: - - ${response.method.toUpperCase()} ${response.path} --> ${response.response.statusCode}`);
    });

    server.events.on('log', (event:any, tags:any) => {
      if (tags.error) {
        console.log(`Server error: ${event.error ? event.error.message : 'unknown'}`);
      }
    });

    await server.start();

    console.log(`Server running on ${HOST}:${HOST_PORT}`);
  } catch (err) {
    console.log(err);
  }
})();
