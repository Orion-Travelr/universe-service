import {AmenityEntity} from "../domain/AmenityEntity";
import {BaseMapper} from "../../../core/infrastructure";
import {AmenityViewModel} from "../../../application/viewModels";
import {UniqueEntity} from "../../../core/domain";

export class AmenityMapper implements BaseMapper<AmenityEntity> {
  public static toDomain(amenity: any): AmenityEntity {
    return  AmenityEntity.create({
      amenity_id: amenity.amenity_id,
      name: amenity.name,
      description: amenity.description,
      slug: amenity.slug,
    }, new UniqueEntity(amenity.id));
  }

  public static toView(amenity: AmenityEntity): AmenityViewModel {
    return {
      id: amenity.id.toValue(),
      name: amenity.getName(),
      description: amenity.getDescription(),
      slug: amenity.getSlug(),
    }
  }
}
