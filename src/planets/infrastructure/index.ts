import {PlanetMapper} from "./mappers/PlanetMapper";
import {PlanetsRepository} from "./PlanetRepository";
import {PlanetPersistenceRepository} from './PlanetPersistenceRepository';
import {TerrainMapper} from "./mappers/TerrainMapper";
import {AmenityMapper} from "./mappers/AmenityMapper";
import {PhotoMapper} from './mappers/PhotoMapper';
import {GalaxyMapper} from './mappers/GalaxyMapper';
import {getRepo} from '../../core/config/orm';
import {Planet} from '../../../dist/modules/planet/domain';

const planetRepo = new PlanetPersistenceRepository(getRepo(Planet));

export {
  PlanetsRepository,
  PlanetMapper,
  planetRepo as PlanetPersistenceRepository,
  TerrainMapper,
  AmenityMapper,
  PhotoMapper,
  GalaxyMapper,
}
