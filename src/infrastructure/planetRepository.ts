import {PlanetEntity} from "../domain";
import {BaseRepository} from "../core/infrastructure";
import {PlanetSearchParams} from "../application/http/planetController";

export interface PlanetRepository extends BaseRepository<PlanetEntity> {
  getBySearchParams(searchParams: PlanetSearchParams): Promise<PlanetEntity[]|null>;
}
