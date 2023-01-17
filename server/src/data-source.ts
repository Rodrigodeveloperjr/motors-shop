import { DataSource, DataSourceOptions } from "typeorm";
import "reflect-metadata";
import path from "path";

require("dotenv").config();

const port = process.env.POSTGRES_PORT as number | undefined;

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, "./entities/*.{ts,js}");
  const migrationsPath: string = path.join(__dirname, "./migrations/*.{ts,js}");
  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === "production") {
    return {
      type: "postgres",
      url: process.env.DATABASE_URL,
      entities: [entitiesPath],
      migrations: [migrationsPath],
    };
  }

  return {
    type: "postgres",
    host: process.env.POSTGRES_HOST,
    port: port,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    logging: false,
    entities: [entitiesPath],
    migrations: [migrationsPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());
