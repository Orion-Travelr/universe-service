import {Entity, Property} from '@mikro-orm/core';
import {BasePersistenceModel} from '../../core/infrastructure/BasePersistenceModel';

@Entity({tableName: 'terrains'})
export class TerrainPersistenceModel extends BasePersistenceModel {
  @Property({type: "varchar" })
  public name: string;
  
  @Property({type: "varchar" })
  public description: string;
}
