import {PlanetEntity} from "../domain";
import {BaseRepository} from "../core/infrastructure";

export interface PlanetRepository extends BaseRepository<PlanetEntity> {
  getAllPlanets(): Promise<PlanetEntity[]>;
  getByPlanetId(id: number): Promise<PlanetEntity>;
}
