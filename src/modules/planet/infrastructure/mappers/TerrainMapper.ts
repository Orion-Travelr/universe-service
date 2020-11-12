import {Planet, PlanetTerrain} from "../../domain";
import {UniqueEntity} from "../../../../domain";
import {BaseMapper} from "../../../../infrastructure";
import {TerrainView} from "../../application/viewmodels";

export class TerrainMapper implements BaseMapper<Planet> {

  public static toDomain(terrain: any): PlanetTerrain {
    return  PlanetTerrain.create({
      terrain_id: terrain.terrain_id,
      name: terrain.name,
      description: terrain.description,
    }, new UniqueEntity(terrain.id));
  }

  public static toView(terrain: PlanetTerrain): TerrainView {
    return {
      id: terrain.id.toValue(),
      name: terrain.getName(),
      description: terrain.getDescription(),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
