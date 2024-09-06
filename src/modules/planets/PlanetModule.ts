import { Module } from '@nestjs/common';
import {AmenityController} from "../../application/http/AmenityController";
import {AmenityService} from "./application/AmenityService";
import {AmenityPersistenceRepository} from "./infrastructure/AmenityPersistenceRepository";
import {PlanetService} from "./application/PlanetService";
import {PlanetController} from "../../application/http/PlanetController";
import {PlanetPersistenceRepository} from "./infrastructure/PlanetPersistenceRepository";
import {GalaxyModule} from "../galaxies/GalaxyModule";

@Module({
  imports: [GalaxyModule],
  controllers: [
    AmenityController,
    PlanetController
  ],
  providers: [
    AmenityService,
    AmenityPersistenceRepository,
    PlanetService,
    PlanetPersistenceRepository
  ],
})
export class PlanetModule {}
