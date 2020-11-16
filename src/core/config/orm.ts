import {MikroORM} from '@mikro-orm/core';
import {TsMorphMetadataProvider} from '@mikro-orm/reflection';
import {SqliteDriver} from '@mikro-orm/sqlite';

export async function orm(): Promise<MikroORM<SqliteDriver>>{
  return await MikroORM.init({
    entities: ['./dist/models/**/*.*'],
    entitiesTs: ['./src/models/**/*.*'],
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
