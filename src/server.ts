"use strict";

process.title = 'universe';

import { Server, Request, ResponseToolkit } from "@hapi/hapi"
import inert from '@hapi/inert';
import config from './config';
import routes from './routes';
const akaya = require('akaya');
import Logger from './services/logger';
import {orm} from './config/orm';

const HOST = config.host;
const HOST_PORT = config.port;

(async () => {
  
  await orm();
  
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

  await server.register([akaya, inert, routes], {
    routes: {
      prefix: '/api'
    }
  });
  
  server.route({
    method: 'GET',
    path: '/images/{file*}',
    handler: {
      directory: {
        path: 'public/images',
        listing: true
      }
    }
  })

  server.route({
    method: '*',
    path: '/{any*}',
    handler: (request:Request, h:ResponseToolkit) => {
      return h.response({statusCode: 404, server: config.name, host: `${HOST}:${HOST_PORT}`}).code(404);
    }
  })

  server.events.on('response', function (response: any) {
    Logger.info(`${config.host}:${config.port}: - - ${response.method.toUpperCase()} ${response.path} --> ${response.response.statusCode}`);
  });

  server.events.on('log', (event: any, tags: any) => {
    if (tags.error) {
      Logger.error(`${config.env}] Server error: ${event.error ? event.error.message : 'unknown'}`);
    }
  });

  await server.start();

  Logger.info(`[${config.env}] Server running on ${config.host}:${config.port}`);

})().catch((error: Error) => Logger.error(`${config.env}] Server error: ${error ? error.message : 'unknown'}`));
