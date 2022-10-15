const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: String,
    message: Number,
    
})

module.exports = mongoose.model('message', Schema)