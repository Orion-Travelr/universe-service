import {Entity, ManyToMany, ManyToOne, Collection, OneToMany, Property} from '@mikro-orm/core';
import {BasePersistenceModel} from '../../core/infrastructure/BasePersistenceModel';
import {GalaxyPersistenceModel} from './galaxyPersistenceModel';
import {AmenityPersistenceModel} from './amenityPersistenceModel';
import {TerrainPersistenceModel} from './terrainPersistenceModel';

@Entity({tableName: 'planets'})
export class PlanetPersistenceModel extends BasePersistenceModel {
  @Property({type: "varchar" })
  public name: string;
  
  @Property({type: "varchar" })
  public description: string;
  
  @Property({type: "bigint", unsigned: true})
  public galaxy_id: bigint;
  
  @Property({type: "int" })
  public diameter: number;
  
  @Property({type: "string" })
  public climate: string;
  
  @Property({type: "number" })
  public rotation_period_hours: number;
  
  @Property({type: "number" })
  public population: number;
  
  @Property({type: "float"})
  public price_cents: number;
  
  @ManyToOne(() => GalaxyPersistenceModel, {inversedBy: (galaxy: GalaxyPersistenceModel) => galaxy.planets, joinColumn: 'galaxy_id'})
  public galaxy: GalaxyPersistenceModel
  
  @ManyToMany({
    entity: () => AmenityPersistenceModel,
    pivotTable: "amenity_planet",
    joinColumn: 'planet_id',
    inverseJoinColumn: 'amenity_id',
  })
  public amenities:  Collection<AmenityPersistenceModel>;
  
  @ManyToMany({
    entity: () => TerrainPersistenceModel,
    pivotTable: "terrain_planet",
    joinColumn: 'planet_id',
    inverseJoinColumn: 'terrain_id',
  })
  public terrains:  Collection<TerrainPersistenceModel>;
  
  public static create(): PlanetPersistenceModel {
    return new PlanetPersistenceModel;
  }
}
