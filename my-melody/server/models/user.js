const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    username: {type: String, unique: true, required: true },
    password: {type: String, required: true },
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    description: {type: String, default: 'This is your description.'},
    followers: [{type: String}],
    following: [{type: String}],
    savedSongs: [{type: Schema.Types.ObjectId, ref: 'Track'}]

}, {versionKey: false});


module.exports = mongoose.model('User', userSchema);
