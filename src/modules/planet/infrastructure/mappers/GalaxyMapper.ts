import {Planet} from "../../domain";
import {UniqueEntity} from "../../../../domain";
import {BaseMapper} from "../../../../infrastructure";
import {Galaxy} from '../../domain/Galaxy';
import {GalaxyView} from '../../application/viewmodels';

export class GalaxyMapper implements BaseMapper<Planet> {

  public static toDomain(galaxy: any): Galaxy {
    return  Galaxy.create({
      name: galaxy.name,
      id: galaxy.id,
    }, new UniqueEntity(galaxy.id));
  }

  public static toView(galaxy: Galaxy): GalaxyView {
    return {
      id: galaxy.id.toValue(),
      name: galaxy.getName(),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
