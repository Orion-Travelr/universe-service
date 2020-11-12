import {PlanetMapper} from "./mappers/PlanetMapper";
import {PlanetsRepository} from "./PlanetRepository";
import {PlanetSequelizeRepository} from './PlanetSequelizeRepository';
import {TerrainMapper} from "./mappers/TerrainMapper";
import {AmenityMapper} from "./mappers/AmenityMapper";
import {PhotoMapper} from './mappers/PhotoMapper';
import {GalaxyMapper} from './mappers/GalaxyMapper';

const planetRepo = new PlanetSequelizeRepository();

export {
  PlanetsRepository,
  PlanetMapper,
  planetRepo as PlanetPersistenceRepository,
  TerrainMapper,
  AmenityMapper,
  PhotoMapper,
  GalaxyMapper,
}
