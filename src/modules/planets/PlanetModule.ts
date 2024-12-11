import { Module } from '@nestjs/common';
import {AmenityService} from "./application/AmenityService";
import {AmenityPersistenceRepository} from "./infrastructure/AmenityPersistenceRepository";
import {PlanetService} from "./application/PlanetService";
import {PlanetPersistenceRepository} from "./infrastructure/PlanetPersistenceRepository";
import {GalaxyModule} from "../galaxies/GalaxyModule";
import {PlanetController} from "../../application/http/PlanetController";
import {AmenityController} from "../../application/http/AmenityController";

@Module({
  imports: [GalaxyModule],
  controllers: [PlanetController, AmenityController],
  providers: [
    AmenityService,
    AmenityPersistenceRepository,
    PlanetService,
    PlanetPersistenceRepository
  ],
})
export class PlanetModule {}
