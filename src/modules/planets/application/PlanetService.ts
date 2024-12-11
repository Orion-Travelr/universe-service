import {Inject, Injectable} from "@nestjs/common";
import {PlanetPersistenceRepository} from "../infrastructure/PlanetPersistenceRepository";
import {PlanetEntity} from "../domain/PlanetEntity";

@Injectable()
class PlanetService {
  constructor(@Inject(PlanetPersistenceRepository) private readonly repo: PlanetPersistenceRepository) {}

  getAll():Promise<PlanetEntity[]> {
    return this.repo.getAll();
  }

  getById(id: number): Promise<PlanetEntity> {
    return this.repo.getById(id);
  }

  getBySearchParams(any: any): Promise<any> {
    return
  }
}

export {PlanetService}
