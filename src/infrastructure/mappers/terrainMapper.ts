import {PlanetEntity, PlanetTerrainEntity} from "../../domain";
import {UniqueEntity} from "../../core/domain";
import {BaseMapper} from "../../core/infrastructure";
import {TerrainViewModel} from "../../application/viewModels";

export class TerrainMapper implements BaseMapper<PlanetEntity> {

  public static toDomain(terrain: any): PlanetTerrainEntity {
    return  PlanetTerrainEntity.create({
      terrain_id: terrain.id,
      name: terrain.name,
      description: terrain.description,
    }, new UniqueEntity(terrain.id));
  }

  public static toView(terrain: PlanetTerrainEntity): TerrainViewModel {
    return {
      id: terrain.id.toValue(),
      name: terrain.getName(),
      description: terrain.getDescription(),
    }
  }

  public static toPersistence(planet: PlanetEntity): any {
    return {

    };
  }
}
