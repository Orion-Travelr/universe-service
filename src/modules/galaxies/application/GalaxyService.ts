import {Inject, Injectable} from "@nestjs/common";
import {GalaxyPersistenceRepository} from "../infrastructure/GalaxyPersistenceRepository";
import {GalaxyEntity} from "../domain/GalaxyEntity";

@Injectable()
class GalaxyService {
  constructor(@Inject(GalaxyPersistenceRepository) private readonly repo: GalaxyPersistenceRepository) {}

  getAll():Promise<GalaxyEntity[]> {
    return this.repo.getAll();
  }

  getById(id: number): Promise<GalaxyEntity> {
    return this.repo.getById(id);
  }
}

export {GalaxyService}
