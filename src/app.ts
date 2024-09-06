import { Module } from '@nestjs/common';
import {PlanetModule} from "./modules/planets/PlanetModule";

@Module({
  imports: [PlanetModule],
  controllers: [],
  providers: [],
})
export class App {}
