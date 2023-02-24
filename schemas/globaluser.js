const mongoose = require('mongoose')

let Schema = new mongoose.Schema({
  userId: String,
  messages: Number,
  level: Number,
  xp: Number,
  userxp: Number,
  xpbooster: Number,
  nextxp: Number,
  banned: Boolean
})

module.exports = mongoose.model('globaluser', Schema)