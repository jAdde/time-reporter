let express = require('express');
let router = express.Router();
let model = require('../models/timeTable');

router.use(function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next()
});

router.get('/', function(req, res) {
    res.status(200).json({
        title: 'Index'
    });
});

router.get('/insert', (req, res, next) => {
    let date = new Date(req.query.date);
    let startTime = req.query.start;
    let endTime = req.query.end;
    let _break = req.query.break;
    let sum = parseFloat(endTime) - parseFloat(startTime) - parseFloat(_break);

    model.create({date: date ? date : Date.now(), start: startTime, end: endTime, break: _break, sum:sum}, (err, doc) =>{
        if (err) return next(err);
        res.send(doc);
    });
});

router.get('/getTimes', (req, res) => {
    res.set({'Access-Control-Allow-Origin':"*"});
    let db = req.db;
    db.collection("timetables").find({}, (err, items) =>{
          if(err) {
              return console.log('findOne error:', err);
          }
          else {
            return res.status(200).json({items});
          }
      });
});

module.exports = router;