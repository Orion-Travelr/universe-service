import {BaseMapper} from "../../../../core/infrastructure";
import {UniqueEntity} from "../../../../core/domain";
import {PlanetEntity} from "../../domain/PlanetEntity";
import {TerrainEntity} from "../../domain/TerrainEntity";
import {TerrainViewModel} from "../../../../application/viewModels";

export class TerrainMapper implements BaseMapper<TerrainEntity> {

  public static toDomain(terrain: any): TerrainEntity {
    return  TerrainEntity.create({
      terrain_id: terrain.id,
      name: terrain.name,
      description: terrain.description,
    }, new UniqueEntity(terrain.id));
  }

  public static toView(terrain: TerrainEntity): TerrainViewModel {
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
