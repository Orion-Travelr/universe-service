import {Injectable} from "@nestjs/common";
import {AmenityRepository} from "../../../infrastructure";

@Injectable()
class AmenityService {
  constructor(private readonly repo: AmenityRepository) {}
}

export {AmenityService}
