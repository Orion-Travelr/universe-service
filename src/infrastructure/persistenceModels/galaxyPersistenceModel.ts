import {Collection, Entity, OneToMany, Property} from '@mikro-orm/core';
import {BasePersistenceModel} from '../../core/infrastructure/BasePersistenceModel';
import {PlanetPersistenceModel} from './planetPersistenceModel';

@Entity({tableName: 'galaxies'})
export class GalaxyPersistenceModel extends BasePersistenceModel {
  @Property({type: "varchar" })
  public name: string;
  
  @OneToMany(() => PlanetPersistenceModel, ((planet: PlanetPersistenceModel) => planet.galaxy))
  public planets: Collection<PlanetPersistenceModel>;
  
  public static create(): GalaxyPersistenceModel {
    return new GalaxyPersistenceModel;
  }
}
