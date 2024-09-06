import {PlanetEntity} from "../domain/PlanetEntity";
import {PlanetRepository} from "./PlanetRepository";
import {PlanetMapper} from "./mappers/PlanetMapper";
import {PlanetSearchParams} from "../../../application/http/PlanetController";

export class PlanetPersistenceRepository implements PlanetRepository {
  private readonly ormRepo:any;
  constructor(ormRepo: any) {
    this.ormRepo = ormRepo;
  }
  async getById(id: number): Promise<PlanetEntity> {
    const theOrm = await this.ormRepo;
    const planet = await theOrm.findOneOrFail(id, { populate: ['amenities', 'galaxy', 'terrains', 'photo'] });

    return PlanetMapper.toDomain(planet);
  }

  async save(entity: PlanetEntity): Promise<void> {
    return;
  }

  async getAll(): Promise<PlanetEntity[]> {
    const theOrm = await this.ormRepo;
    const planets = await theOrm.findAll({ populate: ['amenities', 'terrains', 'galaxy', 'photo']});

    return planets.map((planet: any) => PlanetMapper.toDomain(planet));
  }


  async getBySearchParams(searchParams: PlanetSearchParams): Promise<PlanetEntity[]|null> {

    // The problem with this query is, I would want to get a match on amenities whereIn().
    // I want to return all amenities which have ALL of the ids.
    // I solved for this in the PHP version: https://github.com/jaketoolson/travelr/blob/master/app/Models/PlanetQuery/PlanetFilter.php#L26

    // const planets = await theOrm.find({ $and: [
    //     {
    //       amenities: {
    //         $and: [
              // {
              //   id: {$in: [2]},
              // },
              // {
              //   id: {$in: [3]},
              // },
              // {
              //   id: {$in: [4]},
              // }
    //         ]
    //       },
    //       galaxy: {id: searchParams.galaxyId}
    //     }
    //   ]
    // }, {populate: ['galaxy', 'amenities', 'terrains', 'photo'] })
    //
    // return planets.map((planet: any) => PlanetMapper.toDomain(planet));

    return await this.getAll();
  }
}
