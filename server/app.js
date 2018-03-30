var express = require('express')
var bodyParser = require('body-parser')
var express = require('express');
var bodyParser = require('body-parser');
var db = require('../db/index.js');

var app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(express.static('dist')); // this takes precedence over get /

app.get('/restaurants', function(req, res){
  db.selectAllRestaurants().then(docs=>res.send(docs));
});
app.get('/restaurant', function(req, res){
  db.selectARestaurant('Vege-grill').then(docs=>res.send(docs));
});

app.post('/restaurant/meal', function(req, res){
  console.log(req.body);
  res.send(req.body);
});

app.listen(3000);