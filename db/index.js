// getting-started.js from mongo 5.09 documentation
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/VeganMeals');
var Restaurant = require('./restaurant.schema.js');
// We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to MONGO");
});

var  selectAllRestaurants =  function(){
    return Restaurant.find();
}
var  selectARestaurant =  function(restaurant){

    return Restaurant.find({name: restaurant});
}
selectAllRestaurants().then(docs=>console.log("TESTING selectALL/all restaurants:",docs));
selectARestaurant('Vege-grill').then(doc=>console.log("TESTING select a restaurant:",doc));

exports.selectAllRestaurants = selectAllRestaurants;
exports.selectARestaurant = selectARestaurant;
