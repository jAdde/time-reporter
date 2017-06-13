var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var monk = require('monk');
var db = monk('localhost:27017/Timereporter');
var index = require('./src/routes/index');
var app = express();

app.set('port', process.env.PORT || 8000);
app.set({'Access-Control-Allow-Origin':'*'});
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/Timereporter";
var MongoDB = mongoose.connect(mongoURI).connection;
MongoDB.on('error', function(err) {
	console.log(err.message);
});
MongoDB.once('open', function() {
	console.log("mongodb connection open");
});

app.use(function(req,res,next){
    req.db = db;
    next();
});

app.use('/', index);

app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});