import {BaseEntity, UniqueEntity} from "../../../core/domain";

export interface PlanetAmenityProps {
  amenity_id: number|string,
  name: string,
  slug: string,
  description: string | null,
}

export class AmenityEntity extends BaseEntity<PlanetAmenityProps> {
  public static create(props: PlanetAmenityProps, id?: UniqueEntity): AmenityEntity {
    return new AmenityEntity(props, id);
  }

  public getName(): string {
    return this.props.name;
  }

  public getSlug(): string {
    return this.props.slug;
  }

  public getDescription(): string|null {
    return this.props.description;
  }
}
