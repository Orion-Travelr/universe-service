import {GalaxyEntity} from '../domain';
import {GalaxyMapper} from './index';
import {GalaxyRepository} from './';
import {GalaxyPersistenceModel} from './persistenceModels/galaxyPersistenceModel';

export class GalaxyPersistenceRepository implements GalaxyRepository {
  private readonly ormRepo:any;
  constructor(ormRepo: any) {
    this.ormRepo = ormRepo;
  }
  
  async getById(id: number): Promise<GalaxyEntity> {
    const theOrm = await this.ormRepo;
    const galaxy = await theOrm.findOneOrFail(id);
    
    return GalaxyMapper.toDomain(galaxy);
  }
  
  async getAll(): Promise<GalaxyEntity[]> {
    const theOrm = await this.ormRepo;
    const galaxies = await theOrm.findAll();
  
    return galaxies.map((galaxy: GalaxyPersistenceModel) => GalaxyMapper.toDomain(galaxy));
  }

  async save(entity: GalaxyEntity): Promise<void> {
    return;
  }
}
