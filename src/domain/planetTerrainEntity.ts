import {BaseEntity, UniqueEntity} from "../core/domain";

export interface PlanetTerrainProps {
  terrain_id: number|string,
  name: string,
  description: string|null,
}

export class PlanetTerrainEntity extends BaseEntity<PlanetTerrainProps> {
  public static create(props: PlanetTerrainProps, id?: UniqueEntity): PlanetTerrainEntity {
    return new PlanetTerrainEntity(props, id);
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
