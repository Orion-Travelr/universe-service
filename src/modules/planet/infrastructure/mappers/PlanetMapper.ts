import {Planet, PlanetAmenity, PlanetTerrain} from "../../domain";
import {UniqueEntity} from "../../../../domain";
import {BaseMapper} from "../../../../infrastructure";
import {PlanetView} from "../../application/viewmodels";
import {AmenityMapper, TerrainMapper} from "../";

export class PlanetMapper implements BaseMapper<Planet> {

  public static toDomain(planet: any): Planet {
    return  Planet.create({
      galaxy_id: planet.galaxy_id,
      name: planet.name,
      description: planet.description,
      diameter: planet.diameter,
      population: planet.population,
      featured:  planet.featured,
      photo: planet.photo,
      terrains: planet.terrains.map((t: PlanetTerrain) => TerrainMapper.toDomain(t)),
      amenities: planet.amenities.map((a: PlanetAmenity) => AmenityMapper.toDomain(a)),
    }, new UniqueEntity(planet.id));
  }

  public static toView(planet: Planet): PlanetView {
    return {
      planet_id: planet.id.toValue(),
      name: planet.getName(),
      diameter: planet.getDiameter(),
      description: planet.getDescription(),
      population: planet.getPopulations(),
      photo: planet.getPhoto(),
      amenities: planet.getAmenities().map((a: PlanetAmenity) => AmenityMapper.toView(a)),
      terrains: planet.getTerrains().map((t: PlanetTerrain) => TerrainMapper.toView(t)),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
