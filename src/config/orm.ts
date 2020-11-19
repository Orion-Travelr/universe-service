import {MikroORM} from '@mikro-orm/core';
import {TsMorphMetadataProvider} from '@mikro-orm/reflection';
import {SqliteDriver} from '@mikro-orm/sqlite';

let instance:any;
let semaphore = false;
export const getOrmInstance = async () => {
  if (!instance && !semaphore) {
    semaphore = true;
    instance = await orm();
  }
  
  return instance;
}

async function orm(): Promise<MikroORM<SqliteDriver>>{
  return await MikroORM.init({
    entities: [
      './dist/core/infrastructure/BasePersistenceModel.js',
      './dist/infrastructure/persistenceModels/**/*.*',
    ],
    entitiesTs: [
      './src/core/infrastructure/BasePersistenceModel.ts',
      './src/infrastructure/persistenceModels/**/*.*'
    ],
    dbName: 'database/db.sqlite',
    type: 'sqlite',
    metadataProvider: TsMorphMetadataProvider,
    debug: true,
  });
}
