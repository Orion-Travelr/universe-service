import {Planet} from "../domain";
import {BaseRepository} from "../../../infrastructure";

export interface PlanetsRepository extends BaseRepository<Planet> {
  getAllPlanets(): Promise<Planet[]>;
  getByPlanetId(id: number): Promise<Planet>;
}
