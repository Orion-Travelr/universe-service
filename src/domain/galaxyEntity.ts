import {BaseEntity, UniqueEntity} from "../core/domain";

export interface GalaxyProps {
  name: string,
  id: number | string,
}

export class GalaxyEntity extends BaseEntity<GalaxyProps> {
  public static create(props: GalaxyProps, id?: UniqueEntity): GalaxyEntity {
    return new GalaxyEntity(props, id);
  }
  
  public getName(): string {
    return this.props.name;
  }
}
