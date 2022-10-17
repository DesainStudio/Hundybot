const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    kupfer: Number,
    gold: Number,
    diamands: Number,
    emerald: Number,
})

module.exports = mongoose.model('money', Schema)