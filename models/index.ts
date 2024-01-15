import fs from "fs";
import path from "path";
import { Sequelize, DataTypes } from "sequelize";
import { Dialect } from "sequelize/types";
import config from "../config/config.json";

interface Config {
  [key: string]: {
    username: string;
    password: string | null;
    database: string;
    host: string;
    dialect: string;
    use_env_variable?: string;
  };
}

const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV || "development";
const envConfig = config[env] as Config[typeof env];
const db: { [key: string]: any } = {};

let sequelize: Sequelize;
if (envConfig.use_env_variable) {
  sequelize = new Sequelize(
    process.env[envConfig.use_env_variable]!,
    envConfig as any
  );
} else {
  sequelize = new Sequelize(
    envConfig.database,
    envConfig.username,
    envConfig.password,
    {
      host: envConfig.host,
      dialect: envConfig.dialect as Dialect,
    }
  );
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".ts" &&
      !file.endsWith(".test.ts")
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;