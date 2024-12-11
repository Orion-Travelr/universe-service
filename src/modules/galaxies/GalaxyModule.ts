import { Module } from '@nestjs/common';
import {GalaxyService} from "./application/GalaxyService";
import {GalaxyPersistenceRepository} from "./infrastructure/GalaxyPersistenceRepository";
import {GalaxyController} from "../../application/http/GalaxyController";

@Module({
  imports: [],
  controllers: [GalaxyController],
  providers: [
    GalaxyService,
    GalaxyPersistenceRepository
  ],
})
export class GalaxyModule {}
