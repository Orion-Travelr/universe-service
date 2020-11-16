import {Planet} from "../domain";
import {BaseRepository} from "../../core/infrastructure";

export interface PlanetsRepository extends BaseRepository<Planet> {
  getAllPlanets(): Promise<Planet[]>;
  getByPlanetId(id: number): Promise<Planet>;
}
