import {BaseEntity, UniqueEntity} from "../../../domain";

export interface PlanetTerrainProps {
  terrain_id: number|string,
}

export class PlanetTerrain extends BaseEntity<PlanetTerrainProps> {
  public static create(props: PlanetTerrainProps, id?: UniqueEntity): PlanetTerrain {
    return new PlanetTerrain(props, id);
  }
}
