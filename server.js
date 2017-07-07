const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const monk = require('monk');
const db = monk('localhost:27017/Timereporter');
const index = require('./src/routes/index');
const app = express();

app.set('port', process.env.PORT || 8000);
app.set({'Access-Control-Allow-Origin': '*'});
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/Timereporter";
const MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log(err.message);
});

MongoDB.once('open', function () {
    console.log("mongodb connection open");
});

app.use(function (req, res, next) {
    req.db = db;
    next();
});

app.use('/', index);

app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});