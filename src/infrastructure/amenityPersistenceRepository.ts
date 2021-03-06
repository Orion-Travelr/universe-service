import {GalaxyEntity, AmenityEntity} from '../domain';
import {AmenityMapper, AmenityRepository} from './index';
import {AmenityPersistenceModel} from "./persistenceModels/amenityPersistenceModel";

export class AmenityPersistenceRepository implements AmenityRepository {
  private readonly ormRepo:any;
  constructor(ormRepo: any) {
    this.ormRepo = ormRepo;
  }

  async getById(id: number): Promise<AmenityEntity> {
    const theOrm = await this.ormRepo;
    const amenity = await theOrm.findOneOrFail(id);

    return AmenityMapper.toDomain(amenity);
  }

  async getAll(): Promise<AmenityEntity[]> {
    const theOrm = await this.ormRepo;
    const amenities = await theOrm.findAll();

    return amenities.map((amenity: AmenityPersistenceModel) => AmenityMapper.toDomain(amenity));
  }

  async save(entity: AmenityEntity): Promise<void> {
    return;
  }
}
