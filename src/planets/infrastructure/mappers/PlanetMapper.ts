import {Planet, PlanetAmenity, PlanetTerrain} from "../../domain";
import {UniqueEntity} from "../../../core/domain";
import {BaseMapper} from "../../../core/infrastructure";
import {PlanetView} from "../../application/viewmodels";
import {AmenityMapper, PhotoMapper, GalaxyMapper, TerrainMapper} from "../";

export class PlanetMapper implements BaseMapper<Planet> {

  public static toDomain(planet: any): Planet {
    return  Planet.create({
      galaxy_id: planet.galaxy_id,
      name: planet.name,
      description: planet.description,
      diameter: planet.diameter,
      population: planet.population,
      featured:  planet.featured,
      climate: planet.climate,
      rotation_period_hours: planet.rotation_period_hours,
      price_dollars: planet.price_dollars,
      price_cents: planet.price_cents,
      photo: PhotoMapper.toDomain(planet.photo),
      galaxy: GalaxyMapper.toDomain(planet.galaxy),
      terrains: planet.terrains.map((t: PlanetTerrain) => TerrainMapper.toDomain(t)),
      amenities: planet.amenities.map((a: PlanetAmenity) => AmenityMapper.toDomain(a)),
    }, new UniqueEntity(planet.id));
  }

  public static toView(planet: Planet): PlanetView {
    return {
      id: planet.id.toValue(),
      name: planet.getName(),
      diameter: planet.getDiameter(),
      description: planet.getDescription(),
      population: planet.getPopulation(),
      climate: planet.getClimate(),
      rotation_period_hours: planet.getRotationPeriodInHours(),
      price_dollars: planet.getPriceInDollars(),
      price_cents: planet.getPriceInCents(),
      photo: PhotoMapper.toView(planet.getPhoto()),
      galaxy: GalaxyMapper.toView(planet.getGalaxy()),
      amenities_available: planet.getAmenities().map((a: PlanetAmenity) => AmenityMapper.toView(a)),
      terrains: planet.getTerrains().map((t: PlanetTerrain) => TerrainMapper.toView(t)),
    }
  }

  public static toPersistence(planet: Planet): any {
    return {

    };
  }
}
