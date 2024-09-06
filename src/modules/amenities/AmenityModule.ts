import { Module } from '@nestjs/common';
import {AmenityController} from "../../application/http/amenityController";
import {AmenityService} from "./application/AmenityService";

@Module({
  imports: [],
  controllers: [AmenityController],
  providers: [AmenityService],
})
export class AmenityModule {}
