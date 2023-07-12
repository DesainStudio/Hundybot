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
var sequelize_exports = {};
__export(sequelize_exports, {
  sequelize: () => sequelize
});
module.exports = __toCommonJS(sequelize_exports);
var import_sequelize = require("sequelize");
const sequelize = new import_sequelize.Sequelize({
  host: "de-db-01.paperstudios.dev",
  username: "u39_LRdzKY1z0Q",
  password: "!J+@xmKyS7@BfePP6mnAj5D=",
  dialect: "mariadb",
  database: "s39_Chat",
  ssl: true
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  sequelize
});
