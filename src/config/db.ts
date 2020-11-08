import Sequelize from "sequelize";
import path from "path";

export const databases:any = {
  development: {
    username: null,
    password: null,
    database: 'travelr',
    host: '127.0.0.1',
    dialect: 'sqlite',
    operatorsAliases: Sequelize.Op,
    seederStorage: "sequelize",
    seederStorageTableName: "db_seeds",
    migrationStorageTableName: "db_migrations",
    storage: path.resolve(__dirname, '..', '..', 'database', 'db.sqlite'),
  },
  test: {
    username: null,
    password: null,
    database: 'travelr',
    host: '127.0.0.1',
    dialect: 'sqlite',
    operatorsAliases: Sequelize.Op,
    seederStorage: "sequelize",
    seederStorageTableName: "db_seeds",
    migrationStorageTableName: "db_migrations",
    storage: path.resolve('../database', 'db-test.sqlite'),
  },
};
