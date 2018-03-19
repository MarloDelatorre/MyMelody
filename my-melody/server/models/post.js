const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    username: {type: String, required: true},
    track: {type: Schema.Types.ObjectId, ref: 'Track'},
    caption: {type: String, default: ''},
    posted: {type: String, default: new Date().toISOString()}   
}, {versionKey: false});


module.exports = mongoose.model('Post', postSchema);
