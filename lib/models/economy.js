var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var economy_exports = {};
__export(economy_exports, {
  default: () => economy_default
});
module.exports = __toCommonJS(economy_exports);
var import_sequelize = require("sequelize");
var import_sequelize2 = require("@/global/sequelize");
var economy_default = import_sequelize2.sequelize.define("economy", {
  userId: import_sequelize.DataTypes.STRING,
  money: import_sequelize.DataTypes.INTEGER,
  bank: import_sequelize.DataTypes.INTEGER,
  sparbuch: import_sequelize.DataTypes.INTEGER,
  bitcoin: import_sequelize.DataTypes.INTEGER,
  abitcoin: import_sequelize.DataTypes.BOOLEAN,
  bitcoinprice: import_sequelize.DataTypes.INTEGER,
  mine: import_sequelize.DataTypes.INTEGER,
  unternehmen: import_sequelize.DataTypes.BOOLEAN,
  unternehmensname: import_sequelize.DataTypes.STRING,
  unternehmenskonto: import_sequelize.DataTypes.INTEGER,
  lageropt: import_sequelize.DataTypes.BOOLEAN,
  lager: import_sequelize.DataTypes.INTEGER,
  lagerplatz: import_sequelize.DataTypes.INTEGER,
  unternehmenid: import_sequelize.DataTypes.INTEGER,
  banned: import_sequelize.DataTypes.BOOLEAN,
  update: import_sequelize.DataTypes.BOOLEAN,
  bugfix: import_sequelize.DataTypes.BOOLEAN
}, {
  tableName: "economy"
});
