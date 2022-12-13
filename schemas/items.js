const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    kupfer: Number,
    gold: Number,
    diamant: Number,
    emerald: Number,
    banned: Boolean,
    update: Boolean,
    bugfix: Boolean
})

module.exports = mongoose.model('items', Schema)