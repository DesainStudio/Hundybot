const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    userName: String,
    userTag: Number,
    userAvatar: String,
    dashboardToken: String,
    accessToken: String,
    refreshToken: String
})

module.exports = mongoose.model('user', Schema)