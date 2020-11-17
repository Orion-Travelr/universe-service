import {UniqueEntity} from "../../core/domain";
import {BaseMapper} from "../../core/infrastructure";
import {GalaxyEntity, PlanetEntity} from '../../domain';
import {GalaxyViewModel} from '../../application/viewModels';
import {GalaxyPersistenceModel} from '../persistenceModels/galaxyPersistenceModel';

export class GalaxyMapper implements BaseMapper<PlanetEntity> {

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

  public static toPersistence(planet: PlanetEntity): any {
    return {

    };
  }
}
