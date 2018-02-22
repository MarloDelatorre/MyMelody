const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let trackSchema = new Schema({
    trackId: {type: String, required: true },
    service: {type: String, default: 'manual'},
}, {versionKey: false});


module.exports = mongoose.model('Track', trackSchema);