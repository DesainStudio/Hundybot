const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    kredit: Number,
    
})

module.exports = mongoose.model('kredit', Schema)