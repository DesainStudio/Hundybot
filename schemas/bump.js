const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    serverId: String,
    channelId: String,
    title: String,
    sdescription: String,
    ldescription: String,
    invite: String,
    binvite: String,
    website: String,
    banned: Boolean,
    update: Boolean,
    bugfix: Boolean
})

module.exports = mongoose.model('bump', Schema)