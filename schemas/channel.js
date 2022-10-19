const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    serverId: String,
    channelId: String,
})

module.exports = mongoose.model('channel', Schema)