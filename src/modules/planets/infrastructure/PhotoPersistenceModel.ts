import {Collection, Entity, OneToMany, Property} from '@mikro-orm/core';
import {BasePersistenceModel} from "../../../core/infrastructure/BasePersistenceModel";
import {PlanetPersistenceModel} from "./PlanetPersistenceModel";

@Entity({tableName: 'files'})
export class PhotoPersistenceModel extends BasePersistenceModel {
  @Property({type: "bigint", unsigned: true})
  public fileable_id: number;

  @Property({type: "varchar"})
  public fileable_type: string;

  @Property({type: "varchar"})
  public file_path: string;

  @Property({type: "varchar"})
  public file_name: string;

  @OneToMany(() => PlanetPersistenceModel, ((planet: PlanetPersistenceModel) => planet.photo))
  public planets: Collection<PlanetPersistenceModel>;

  public static create(): PhotoPersistenceModel {
    return new PhotoPersistenceModel;
  }
}
