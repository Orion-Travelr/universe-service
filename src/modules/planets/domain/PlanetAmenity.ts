import {BaseEntity, UniqueEntity} from "../../../domain";

export interface PlanetAmenityProps {
  amenity_id: number|string,
}

export class PlanetAmenity extends BaseEntity<PlanetAmenityProps> {
  public static create(props: PlanetAmenityProps, id?: UniqueEntity): PlanetAmenity {
    return new PlanetAmenity(props, id);
  }
}
