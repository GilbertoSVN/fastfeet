import Sequelize from 'sequelize';

import User from '../app/models/User';
import Recipients from '../app/models/Recipients';
import Couriers from '../app/models/Couriers';
import Packages from '../app/models/Packages';
import File from '../app/models/File';
import Signatures from '../app/models/Signatures';
import Problems from '../app/models/Problems';

import databaseConfig from '../config/database';

const models = [
  User,
  Recipients,
  Couriers,
  File,
  Packages,
  Signatures,
  Problems,
];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new Database();
