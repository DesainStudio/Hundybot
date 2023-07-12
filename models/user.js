const { DataTypes } = require('sequelize');

module.exports = global.sequelize.define("user", {
  userId: DataTypes.STRING,
  userName: DataTypes.STRING,
  userTag: DataTypes.INTEGER,
  userAvatar: DataTypes.STRING,
  dashboardToken: DataTypes.STRING,
  accessToken: DataTypes.STRING,
  refreshToken: DataTypes.STRING
}, {
  tableName: "user"
})