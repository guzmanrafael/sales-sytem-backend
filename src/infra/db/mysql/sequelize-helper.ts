import { Sequelize } from 'sequelize';
import { config as dotenv } from 'dotenv';
dotenv();

export const db = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: '127.0.0.1',
  dialect: 'mysql',
  port: 3389,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
