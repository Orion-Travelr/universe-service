import {Planet} from "../domain";
import {UniqueEntity} from "../../../domain";
import {BaseMapper} from "../../../infrastructure";

export class PlanetMapper implements BaseMapper<Planet> {

  public static toDomain(planet: any): Planet {
    return  Planet.create({
      galaxy_id: planet.galaxy_id,
      name: planet.name,
      description: planet.description,
      diameter: planet.diameter,
      population: planet.population,
      featured:  planet.featured,
    }, new UniqueEntity(planet.planet_id));
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
