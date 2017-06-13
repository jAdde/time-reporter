var express = require('express');
var router = express.Router();

router.use(function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
});

router.get('/', function(req, res) {
    res.status(200).json({
        title: 'Index'
    });
});

router.get('/test', function(req, res) {
    res.status(200).json({
        title: 'test'
    });
});

router.get('/getTimes', function(req, res) {
    res.set({'Access-Control-Allow-Origin':"*"});
    var db = req.db;
    db.collection("times").find({}, function(err, items) {
          if(err) {
              return console.log('findOne error:', err);
          }
          else {
            return res.status(200).json({items});
          }
      });
});

module.exports = router;