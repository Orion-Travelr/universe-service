import {BaseEntity, UniqueEntity} from "../../core/domain";

export interface GalaxyProps {
  name: string,
  id: number | string,
}

export class Galaxy extends BaseEntity<GalaxyProps> {
  public static create(props: GalaxyProps, id?: UniqueEntity): Galaxy {
    return new Galaxy(props, id);
  }
  
  public getName(): string
  {
    return this.props.name;
  }
}
