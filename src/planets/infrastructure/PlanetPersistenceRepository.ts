import {Planet} from "../domain";
import {PlanetsRepository} from "./PlanetRepository";
import {PlanetMapper} from "./index";

export class PlanetPersistenceRepository implements PlanetsRepository {
  private ormRepo:any;
  constructor(ormRepo: any) {
    this.ormRepo = ormRepo;
  }
  async getByPlanetId(id: number): Promise<Planet> {
    const planet = await this.ormRepo.findOne({ where: { id: id}, include: ['amenities', 'galaxy', 'photo', 'terrains'] });

    return PlanetMapper.toDomain(planet);
  }

  async save(entity: Planet): Promise<void> {
    return;
  }

  async getAllPlanets(): Promise<Planet[]> {
    const planets = await this.ormRepo.findAll({ include: ['amenities', 'galaxy', 'photo', 'terrains']});

    return planets.map((planet: any) => PlanetMapper.toDomain(planet));
  }
}
