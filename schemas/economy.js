const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    money: Number,
    bank: Number,
    kredit: Number,
})

module.exports = mongoose.model('economy', Schema)