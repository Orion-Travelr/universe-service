import { Module } from '@nestjs/common';
import {AmenityModule} from "./modules/amenities/AmenityModule";

@Module({
  imports: [AmenityModule],
  controllers: [],
  providers: [],
})
export class App {}
