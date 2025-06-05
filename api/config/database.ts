import { appConfig } from './config';
import mysql from 'mysql2/promise';

const { appDb } = appConfig;

export const databaseConnection: Promise<mysql.Connection> = mysql.createConnection({
  host: appDb.host,
  user: appDb.user,
  database: appDb.database,
  password: appDb.password,
  port: appDb.port,
});
