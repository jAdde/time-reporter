var mongoose = require('mongoose');

var timeTableSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now},
  start: { type: Number, default: 0 },
  end: { type: String, default: "0" },
  break: { type: String, default: "0" },
});

module.exports = mongoose.model('TimeTable', timeTableSchema);