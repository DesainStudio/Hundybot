const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    userspenden: Number,
    serverspenden: Number,
})

module.exports = mongoose.model('spenden', Schema)