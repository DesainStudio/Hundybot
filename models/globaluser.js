const { DataTypes } = require('sequelize');

module.exports = global.sequelize.define("globaluser", {
  userId: DataTypes.STRING,
  messages: DataTypes.INTEGER,
  level: DataTypes.INTEGER,
  xp: DataTypes.INTEGER,
  userxp: DataTypes.INTEGER,
  xpbooster: DataTypes.INTEGER,
  nextxp: DataTypes.INTEGER,
  banned: DataTypes.BOOLEAN
}, {
  tableName: "globaluser"
})