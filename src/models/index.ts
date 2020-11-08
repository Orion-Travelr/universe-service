'use strict';

// TODO: Do I want this helper?
import * as fs from 'fs'
import * as path from 'path'
import config from '../config';

const Sequelize = require('sequelize');
let basename  = path.basename(__filename);

let db: any        = {};
let sequelize = new Sequelize(config.db.database, config.db.username, config.db.password, config.db);

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// FIXME: Not a fan of the same word, different case, holding completely different values. Deep dive into this.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
