const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {type: String, unique: true, required: true },
    password: {type: String, required: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    profilePicture: {type: String, default: ''},
    
}, {versionKey: false});


module.exports = mongoose.model('User', userSchema);