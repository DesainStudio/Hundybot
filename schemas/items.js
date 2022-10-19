const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    kupfer: Number,
    gold: Number,
    diamant: Number,
    emerald: Number,
})

module.exports = mongoose.model('money', Schema)