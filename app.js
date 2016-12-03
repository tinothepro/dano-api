var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://heroku_r2n6xv7b:10e5oepocv3g6rkbjps7tm6hre@ds119578.mlab.com:19578/heroku_r2n6xv7b');

var Area = require('./models/areaModel');
var app = express();

app.use(express.static(__dirname + '/public'));

app.set('views', './pages');
app.set('view engine', 'ejs');

var port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

areaRouter = require('./routes/areaRoutes')(Area);

app.use("/api", areaRouter);

app.listen(port);
console.log("Server is listening on port " + port);
