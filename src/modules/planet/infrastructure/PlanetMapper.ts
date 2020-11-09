import {Planet} from "../domain";
import {UniqueEntity} from "../../../domain";
import {BaseMapper} from "../../../infrastructure";
import {PlanetView} from "../application/viewmodels";

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

  public static toView(planet: Planet): PlanetView {
    return {
      planet_id: planet.id.toValue(),
      name: planet.getName(),
      description: planet.getDescription(),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
