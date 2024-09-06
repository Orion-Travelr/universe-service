"use strict";
import {NestExpressApplication} from "@nestjs/platform-express";
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import helmet from 'helmet';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { App } from './app';
import config from './config';
import * as winston from 'winston';

const bootstrap = async () => {
  const app = await NestFactory.create<NestExpressApplication>(App);
  app.enableCors();
  app.use(helmet());
  app.useLogger(
    WinstonModule.createLogger({
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.errors({ stack: true }),
        winston.format.splat(),
        winston.format.json()
      ),
      transports: [
        new winston.transports.Console({
          format: winston.format.combine(
            winston.format.colorize(),
            winston.format.json(),
            winston.format.cli(),
            winston.format.timestamp(),
            winston.format.ms(),
            nestWinstonModuleUtilities.format.nestLike(),
          ),
        }),
      ],
    }),
  );
  await app.listen(config.port);
  Logger.log(`UNIVERSE is running on: ${await app.getUrl()}`);
}
bootstrap();
