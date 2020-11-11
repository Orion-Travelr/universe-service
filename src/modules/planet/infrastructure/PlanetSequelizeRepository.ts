import {Planet} from "../domain";
import db from '../../../models'
import {PlanetsRepository} from "./PlanetRepository";
import {PlanetMapper} from "./index";

const PlanetDb = db.Planet;

export class PlanetSequelizeRepository implements PlanetsRepository {
  static async getByPlanetId(id: number): Promise<Planet> {
    const planet = await PlanetDb.findOne({ where: { id: id}, include: ['amenities', 'galaxy', 'photo', 'terrains'] });

    return PlanetMapper.toDomain(planet);
  }

  async save(entity: Planet): Promise<void> {
    return;
  }

  static async getAllPlanets(): Promise<Planet[]> {
    const planets = await PlanetDb.findAll({ include: ['amenities', 'galaxy', 'photo', 'terrains']});

    return planets.map((planet: any) => PlanetMapper.toDomain(planet));
  }

  //----
  // Typescript doesnt allow defining static method inside interface so need to define both.
  public async getByPlanetId(id: number): Promise<Planet> {
    return PlanetSequelizeRepository.getByPlanetId(id);
  }

  public async getAllPlanets(): Promise<Planet[]> {
    return PlanetSequelizeRepository.getAllPlanets();
  }
}
