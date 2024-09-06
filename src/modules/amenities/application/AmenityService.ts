import {Inject, Injectable} from "@nestjs/common";
import {AmenityPersistenceRepository} from "../infrastructure/AmenityPersistenceRepository";
import {AmenityEntity} from "../domain/AmenityEntity";

@Injectable()
class AmenityService {
  constructor(@Inject(AmenityPersistenceRepository) private readonly repo: AmenityPersistenceRepository) {}

  getAll():AmenityEntity[] {
    return
  }

  getById(id: number): AmenityEntity {
    return
  }

}

export {AmenityService}
