import {PlanetMapper} from "./mappers/planetMapper";
import {PlanetRepository} from "./planetRepository";
import {PlanetPersistenceRepository} from './planetPersistenceRepository';
import {TerrainMapper} from "./mappers/terrainMapper";
import {AmenityMapper} from "./mappers/amenityMapper";
import {PhotoMapper} from './mappers/photoMapper';
import {GalaxyMapper} from './mappers/galaxyMapper';
import {getRepo} from '../config/orm';
import {PlanetPersistenceModel} from './persistenceModels/planetPersistenceModel';

const planetRepo = new PlanetPersistenceRepository(getRepo(PlanetPersistenceModel));

export {
  PlanetRepository,
  planetRepo as PlanetPersistenceRepository,
  PlanetMapper,
  TerrainMapper,
  AmenityMapper,
  PhotoMapper,
  GalaxyMapper,
}
