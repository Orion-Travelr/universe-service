import {PlanetMapper} from "./mappers/planetMapper";
import {PlanetRepository} from "./planetRepository";
import {PlanetPersistenceRepository} from './planetPersistenceRepository';
import {TerrainMapper} from "./mappers/terrainMapper";
import {AmenityMapper} from "./mappers/amenityMapper";
import {PhotoMapper} from './mappers/photoMapper';
import {GalaxyMapper} from './mappers/galaxyMapper';
import {getOrmInstance} from '../config/orm';
import {PlanetPersistenceModel} from './persistenceModels/planetPersistenceModel';
import {GalaxyPersistenceModel} from './persistenceModels/galaxyPersistenceModel';
import {GalaxyRepository} from './galaxyRepository';
import {GalaxyPersistenceRepository} from './galaxyPersistenceRepository';

// LOL This module is getting out of control.
const ormInstance = getOrmInstance();

// FAKE DI! :D :D :D :D
const galaxyRepo = new GalaxyPersistenceRepository(ormInstance.then((orm) => orm.em.getRepository(GalaxyPersistenceModel)));
const planetRepo = new PlanetPersistenceRepository(ormInstance.then((orm) => orm.em.getRepository(PlanetPersistenceModel)));

export {
  galaxyRepo as GalaxyPersistenceRepository,
  GalaxyRepository,
  GalaxyMapper,
  
  PlanetRepository,
  planetRepo as PlanetPersistenceRepository,
  PhotoMapper,
  
  PlanetMapper,
  TerrainMapper,
  AmenityMapper,
}
