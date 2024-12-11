import {PlanetEntity} from "../domain/PlanetEntity";
import {BaseRepository} from "../../../core/infrastructure";
import {PlanetSearchParams} from "../../../application/http/PlanetController";

export interface PlanetRepository extends BaseRepository<PlanetEntity> {
  getBySearchParams(searchParams: PlanetSearchParams): Promise<PlanetEntity[]|null>;
}
