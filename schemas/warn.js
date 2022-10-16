const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    warn: Number,
    
})

module.exports = mongoose.model('warn', Schema)