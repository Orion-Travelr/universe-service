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
import {AmenityRepository} from "./amenityRepository";
import {AmenityPersistenceRepository} from "./amenityPersistenceRepository";
import {AmenityPersistenceModel} from "./persistenceModels/amenityPersistenceModel";

// LOL This module is getting out of control.
const ormInstance = getOrmInstance();

// FAKE DI! :D :D :D :D
const galaxyRepo = new GalaxyPersistenceRepository(ormInstance.then((orm) => orm.em.getRepository(GalaxyPersistenceModel)));
const planetRepo = new PlanetPersistenceRepository(ormInstance.then((orm) => orm.em.getRepository(PlanetPersistenceModel)));
const amenityRepo = new AmenityPersistenceRepository(ormInstance.then((orm) => orm.em.getRepository(AmenityPersistenceModel)));

export {
  GalaxyRepository,
  GalaxyMapper,
  galaxyRepo as GalaxyPersistenceRepository,

  PlanetRepository,
  PhotoMapper,
  planetRepo as PlanetPersistenceRepository,

  AmenityRepository,
  AmenityMapper,
  amenityRepo as AmenityPersistenceRepository,

  PlanetMapper,
  TerrainMapper,
}
