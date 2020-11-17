import {PlanetMapper} from "./mappers/planetMapper";
import {PlanetRepository} from "./planetRepository";
import {PlanetPersistenceRepository} from './planetPersistenceRepository';
import {TerrainMapper} from "./mappers/terrainMapper";
import {AmenityMapper} from "./mappers/amenityMapper";
import {PhotoMapper} from './mappers/photoMapper';
import {GalaxyMapper} from './mappers/galaxyMapper';
import {getOrmInstance} from '../config/orm';
import {PlanetPersistenceModel} from './persistenceModels/planetPersistenceModel';

// FAKE DI! :D :D :D :D
const planetRepo = new PlanetPersistenceRepository(getOrmInstance().then((orm) => orm.em.getRepository(PlanetPersistenceModel)));

export {
  PlanetRepository,
  planetRepo as PlanetPersistenceRepository,
  PlanetMapper,
  TerrainMapper,
  AmenityMapper,
  PhotoMapper,
  GalaxyMapper,
}
