import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize({
  host: "de-db-01.paperstudios.dev",
  username: "u39_LRdzKY1z0Q",
  password: "!J+@xmKyS7@BfePP6mnAj5D=",
  dialect: "mariadb",
  database: "s39_Chat",
  ssl: true
});