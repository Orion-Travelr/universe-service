import {Entity, Property} from '@mikro-orm/core';
import {BasePersistenceModel} from '../../core/infrastructure/BasePersistenceModel';

@Entity({tableName: 'amenities'})
export class AmenityPersistenceModel extends BasePersistenceModel {
  @Property({type: "varchar" })
  public name: string;
  
  @Property({type: "varchar" })
  public slug: string;
  
  @Property({type: "varchar" })
  public description: string;
  
  @Property({type: "bigint", unsigned: true})
  public galaxy_id: bigint;
  
  public static create(): AmenityPersistenceModel {
    return new AmenityPersistenceModel;
  }
}
