import {Planet} from "../domain";
import db from '../../../models'
import {PlanetsRepository} from "./PlanetRepository";

const PlanetDb = db.Planet;

export class PlanetSequelizeRepository implements PlanetsRepository {
  public async getByPlanetId(id: number): Promise<Planet> {
    const response = PlanetDb.findById(id, { include: ['amenities', 'galaxy', 'photo', 'terrains']});

    return;
  }

  public save(entity: Planet): Promise<Planet> {
    return;
  }
}
