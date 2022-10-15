const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    gold: Number,
    
})

module.exports = mongoose.model('gold', Schema)