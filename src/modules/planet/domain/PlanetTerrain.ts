import {BaseEntity, UniqueEntity} from "../../../domain";

export interface PlanetTerrainProps {
  terrain_id: number|string,
  name: string,
  description: string|null,
}

export class PlanetTerrain extends BaseEntity<PlanetTerrainProps> {
  public static create(props: PlanetTerrainProps, id?: UniqueEntity): PlanetTerrain {
    return new PlanetTerrain(props, id);
  }

  public getName(): string
  {
    return this.props.name;
  }

  public getDescription(): string|null
  {
    return this.props.description;
  }
}
