import {Planet, PlanetAmenity} from "../../domain";
import {UniqueEntity} from "../../../core/domain";
import {BaseMapper} from "../../../core/infrastructure";
import {AmenityView} from "../../application/viewmodels";

export class AmenityMapper implements BaseMapper<PlanetAmenity> {

  public static toDomain(amenity: any): PlanetAmenity {
    return  PlanetAmenity.create({
      amenity_id: amenity.amenity_id,
      name: amenity.name,
      description: amenity.description,
      slug: amenity.slug,
    }, new UniqueEntity(amenity.id));
  }

  public static toView(amenity: PlanetAmenity): AmenityView {
    return {
      id: amenity.id.toValue(),
      name: amenity.getName(),
      description: amenity.getDescription(),
      slug: amenity.getSlug(),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
