var mongoose = require('mongoose');
var restaurantSchema = mongoose.Schema({
  name: String,
  meal: String,
  ingredients:[],
  crumbs:[]
});

var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;