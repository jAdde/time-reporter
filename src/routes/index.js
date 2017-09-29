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

router.get('/', function (req, res) {
    res.status(200).json({
        title: 'Index'
    });
});

router.get('/insert', (req, res, next) => {
    let date = new Date(req.query.date);
    let startTimeAsDecimal = new Date(req.query.date + " " + req.query.start);
    let endTimeAsDecimal = new Date(req.query.date + " " + req.query.end);

    let _startTime = startTimeAsDecimal.getHours() + parseFloat(startTimeAsDecimal.getMinutes() / 60);
    let _endTime = endTimeAsDecimal.getHours() + parseFloat(endTimeAsDecimal.getMinutes() / 60);

    let startTime = req.query.start;
    let endTime = req.query.end;
    let _break = parseFloat(req.query.break);

    let sum = parseFloat(_endTime) - parseFloat(_startTime) - _break;

    model.create({
        date: date ? date : Date.now(),
        start: startTime,
        end: endTime,
        break: _break,
        sum: sum
    }, (err, doc) => {
        if (err) return next(err);
        res.send(doc);
    });
});
//db.timetables.find({)
router.get('/getTimes', (req, res) => {
    let reqDate = new Date(req.query.startDate);
    let startDate = reqDate.getDay();
    let endDate = reqDate.getDay() + 5;

    res.set({'Access-Control-Allow-Origin': "*"});
    let db = req.db;
    db.collection("timetables").find({
        "createdDate": {
            $gte: new Date("2017-07-01T00:00:00.000Z"),
            $lt: new Date("2017-10-01T00:00:00.000Z")
        }
    }, (err, items) => {
        if (err) {
            return console.log('find error:', err);
        }
        else {
            return res.status(200).json({items});
        }
    });
})
    ;

    module.exports = router;