var mongoose = require('mongoose');

var timeTableSchema = new mongoose.Schema({
  date: new ISODate() {
    startTime: String,
    endTime: String,
    break: Number
  }
});

module.exports = mongoose.model('TimeTable', timeTableSchema);