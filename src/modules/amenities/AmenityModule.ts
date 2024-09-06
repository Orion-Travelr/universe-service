import { Module } from '@nestjs/common';
import {AmenityController} from "../../application/http/amenityController";
import {AmenityService} from "./application/AmenityService";
import {AmenityPersistenceRepository} from "./infrastructure/AmenityPersistenceRepository";

@Module({
  imports: [],
  controllers: [AmenityController],
  providers: [AmenityService, AmenityPersistenceRepository],
})
export class AmenityModule {}
