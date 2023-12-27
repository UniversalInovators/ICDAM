const mongoose = require("mongoose");

const Schema = mongoose.Schema,
AdvisoryCommMembers = new Schema({
    id: Number,
    name: String,
    information: String,
    rank: Number
}, {timestamps: true});

module.exports = mongoose.model('advCommMemList',AdvisoryCommMembers);