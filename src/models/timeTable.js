let mongoose = require('mongoose');

const timeTableSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    start: {type: String, default: "0"},
    end: {type: String, default: "0"},
    break: {type: Number, default: 0},
    sum: {type: Number, default: 0},
    createdDate: {type: Date, default: Date.now}
});

module.exports = mongoose.model('TimeTable', timeTableSchema);