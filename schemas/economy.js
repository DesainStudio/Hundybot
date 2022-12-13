const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    money: Number,
    bank: Number,
    kredit: Number,
    sparbuch: Number,
    banned: Boolean,
    update: Boolean,
    bugfix: Boolean
})

module.exports = mongoose.model('economy2', Schema)