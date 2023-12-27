const mongoose = require("mongoose");

const Schema = mongoose.Schema,
EuroTechBoardMembers = new Schema({
    id: Number,
    name: String,
    information: String,
}, {timestamps: true});

module.exports = mongoose.model('euroTechCommMemList',EuroTechBoardMembers);