const mongoose = require("mongoose");

const Schema = mongoose.Schema,
SteeringCommMembers = new Schema({
    id: Number,
    name: String,
    information: String,
    steercompost_id: Number
}, {timestamps: true});

module.exports = mongoose.model('steerCommMemList',SteeringCommMembers);