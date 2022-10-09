const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    bank: Number,
})

module.exports = mongoose.model('bank', Schema)
