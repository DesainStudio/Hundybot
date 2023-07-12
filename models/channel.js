const { DataTypes } = require('sequelize');

module.exports = global.sequelize.define("channel", {
  serverId: DataTypes.STRING,
  channelId: DataTypes.STRING
}, {
  tableName: "channel"
})