const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    money: Number,
    bank: Number,
    kredit: Number,
    spenden: String,
    userspenden: String,
})

module.exports = mongoose.model('economy', Schema)