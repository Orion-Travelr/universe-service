import { Module } from '@nestjs/common';
import {PlanetModule} from "./modules/planets/PlanetModule";
import {GalaxyModule} from "./modules/galaxies/GalaxyModule";

@Module({
  imports:
    [
      PlanetModule,
      GalaxyModule
    ],
  controllers: [],
  providers: [],
})
export class App {}
