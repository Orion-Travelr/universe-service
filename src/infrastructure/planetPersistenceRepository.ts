import {PlanetEntity} from "../domain";
import {PlanetRepository} from "./planetRepository";
import {PlanetMapper} from "./index";

export class PlanetPersistenceRepository implements PlanetRepository {
  private readonly ormRepo:any;
  constructor(ormRepo: any) {
    this.ormRepo = ormRepo;
  }
  async getById(id: number): Promise<PlanetEntity> {
    const theOrm = await this.ormRepo;
    const planet = await theOrm.findOneOrFail(id, { populate: ['amenities', 'galaxy', 'terrains'] });

    return PlanetMapper.toDomain(planet);
  }

  async save(entity: PlanetEntity): Promise<void> {
    return;
  }

  async getAll(): Promise<PlanetEntity[]> {
    const theOrm = await this.ormRepo;
    const planets = await theOrm.findAll({ populate: ['amenities', 'terrains', 'galaxy']});

    return planets.map((planet: any) => PlanetMapper.toDomain(planet));
  }
}
