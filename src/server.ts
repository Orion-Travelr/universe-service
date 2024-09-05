"use strict";
process.title = 'universe';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {getOrmInstance} from './config/orm';
import routes from './routes';
import config from './config';
import Logger from './services/logger';

const HOST = config.host;
const HOST_PORT = config.port;


const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
