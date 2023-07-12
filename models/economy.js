const { DataTypes } = require('sequelize');

module.exports = global.sequelize.define("economy", {
  userId: DataTypes.STRING,
  money: DataTypes.INTEGER,
  bank: DataTypes.INTEGER,
  sparbuch: DataTypes.INTEGER,
  bitcoin: DataTypes.INTEGER,
  abitcoin: DataTypes.BOOLEAN,
  bitcoinprice: DataTypes.INTEGER,
  mine: DataTypes.INTEGER,
  unternehmen: DataTypes.BOOLEAN,
  unternehmensname: DataTypes.STRING,
  unternehmenskonto: DataTypes.INTEGER,
  lageropt: DataTypes.BOOLEAN,
  lager: DataTypes.INTEGER,
  lagerplatz: DataTypes.INTEGER,
  unternehmenid: DataTypes.INTEGER,
  banned: DataTypes.BOOLEAN,
  update: DataTypes.BOOLEAN,
  bugfix: DataTypes.BOOLEAN
}, {
  tableName: "economy"
})