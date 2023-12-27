const mongoose = require("mongoose");

const Schema = mongoose.Schema,
CallForPaperSchema = new Schema({
    callforpaper_id : String,
    content: String,
}, {timestamps: true});

module.exports = mongoose.model('callForPaperList',CallForPaperSchema);