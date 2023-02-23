const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    money: Number,
    bank: Number,
    sparbuch: Number,
    bitcoin: Number,
    abitcoin: Boolean,
    bitcoinprice: Number,
    mine: Number,
    unternehmen: Boolean,
    unternehmensname: String,
    unternehmenskonto: Number,
    lageropt: Boolean,
    lager: Number,
    lagerplatz: Number,
    unternehmenid: Number,
    banned: Boolean,
    update: Boolean,
    bugfix: Boolean
})

module.exports = mongoose.model('economy', Schema)