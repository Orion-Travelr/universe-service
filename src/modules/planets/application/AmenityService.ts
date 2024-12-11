import {Inject, Injectable} from "@nestjs/common";
import {AmenityPersistenceRepository} from "../infrastructure/AmenityPersistenceRepository";
import {AmenityEntity} from "../domain/AmenityEntity";

@Injectable()
class AmenityService {
  constructor(@Inject(AmenityPersistenceRepository) private readonly repo: AmenityPersistenceRepository) {}

  getAll():Promise<AmenityEntity[]> {
    return this.repo.getAll();
  }

  getById(id: number): Promise<AmenityEntity> {
    return this.repo.getById(id);
  }
}

export {AmenityService}
