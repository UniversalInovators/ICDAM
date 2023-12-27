const mongoose = require("mongoose");

const Schema = mongoose.Schema,
TechnicalProgramMembers = new Schema({
    id: Number,
    name: String,
    information: String,
}, {timestamps: true});

module.exports = mongoose.model('TechCommMemList',TechnicalProgramMembers);