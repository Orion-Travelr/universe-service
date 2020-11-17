import {MikroORM} from '@mikro-orm/core';
import {TsMorphMetadataProvider} from '@mikro-orm/reflection';
import {SqliteDriver} from '@mikro-orm/sqlite';

export async function orm(): Promise<MikroORM<SqliteDriver>>{
  return await MikroORM.init({
    entities: [
      './dist/core/infrastructure/BasePersistenceModel.ts',
      './dist/infrastructure/persistenceModels/**/*.*'
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

export async function getRepo(model: any) {
  const theOrm = await orm();
  
  return await theOrm.em.getRepository(model);
}
