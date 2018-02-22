const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let postSchema = new Schema({
    userId: {type: mongoose.Types.ObjectId, required: true},
    trackId: {type: mongoose.Types.ObjectId, required: true}    
}, {versionKey: false});


module.exports = mongoose.model('Post', postSchema);