import {UniqueEntity} from "../../../../core/domain";
import {BaseMapper} from "../../../../core/infrastructure";
import {GalaxyViewModel} from "../../../../application/viewModels";
import {GalaxyPersistenceModel} from "../GalaxyPersistenceModel";
import {GalaxyEntity} from "../../domain/GalaxyEntity";

export class GalaxyMapper implements BaseMapper<GalaxyEntity> {

  public static toDomain(galaxy: GalaxyPersistenceModel): GalaxyEntity {
    return  GalaxyEntity.create({
      name: galaxy.name,
      id: galaxy.id,
    }, new UniqueEntity(galaxy.id));
  }

  public static toView(galaxy: GalaxyEntity): GalaxyViewModel {
    return {
      id: galaxy.id.toValue(),
      name: galaxy.getName(),
    }
  }
}
