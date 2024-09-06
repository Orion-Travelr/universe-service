import {BaseMapper} from "../../../../core/infrastructure";
import {UniqueEntity} from "../../../../core/domain";
import {PlanetEntity} from "../../domain/PlanetEntity";
import {TerrainEntity} from "../../domain/TerrainEntity";
import {TerrainMapper} from "./TerrainMapper";
import {AmenityMapper} from "./AmenityMapper";
import {AmenityEntity} from "../../domain/AmenityEntity";
import {PlanetViewModel} from "../../../../application/viewModels";
import {GalaxyMapper} from "../../../galaxies/infrastructure/mappers/GalaxyMapper";
import {PlanetPersistenceModel} from "../PlanetPersistenceModel";
import {PhotoMapper} from "./PhotoMapper";

export class PlanetMapper implements BaseMapper<PlanetEntity> {
  public static toDomain(planet: any): PlanetEntity {
    return PlanetEntity.create({
      galaxy_id: planet.galaxy_id,
      name: planet.name,
      description: planet.description,
      diameter: planet.diameter,
      population: planet.population,
      climate: planet.climate,
      rotation_period_hours: planet.rotation_period_hours,
      price_cents: planet.price_cents,
      photo: PhotoMapper.toDomain(planet.photo),
      galaxy: GalaxyMapper.toDomain(planet.galaxy),
      terrains: planet.terrains.toArray().map((t: TerrainEntity) => TerrainMapper.toDomain(t)),
      amenities: planet.amenities.toArray().map((a: AmenityEntity) => AmenityMapper.toDomain(a)),
      // reviews: planet.reviews.toArray().map((r: ReviewsEntity) => ReviewMapper.toDomain(r)),
    }, new UniqueEntity(planet.id));
  }

  public static toView(planet: PlanetEntity): PlanetViewModel {
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
      amenities_available: planet.getAmenities().map((a: AmenityEntity) => AmenityMapper.toView(a)),
      terrains: planet.getTerrains().map((t: TerrainEntity) => TerrainMapper.toView(t)),
      // reviews: planet.getReviews().map((r: ReviewsEntity) => ReviewMapper.toView(r)),
    }
  }

  public static toPersistence(planet: PlanetEntity): PlanetPersistenceModel {
    return PlanetPersistenceModel.create(planet.props);
  }
}
