import {Planet} from "../domain";
import db from '../../../models'
import {PlanetsRepository} from "./PlanetRepository";
import {PlanetMapper} from "./index";

const PlanetDb = db.Planet;

export class PlanetSequelizeRepository implements PlanetsRepository {
  async getByPlanetId(id: number): Promise<Planet> {
    const planet = await PlanetDb.findOne({ where: { id: id}, include: ['amenities', 'galaxy', 'photo', 'terrains'] });

    return PlanetMapper.toDomain(planet);
  }

  async save(entity: Planet): Promise<void> {
    return;
  }

  async getAllPlanets(): Promise<Planet[]> {
    const planets = await PlanetDb.findAll({ include: ['amenities', 'galaxy', 'photo', 'terrains']});

    return planets.map((planet: any) => PlanetMapper.toDomain(planet));
  }
}
