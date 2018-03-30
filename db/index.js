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
var  selectARestaurantMeal =  function(restaurant){

    return Restaurant.find(restaurant);
}
var saveRestaurantMeal =function(restaurants){
  console.log("saveRestaurant->",restaurants);
  Restaurant.insertMany([restaurants]).then(function(docs){
     console.log("insertmany:",docs);
  });
}
//saveRestaurant().then(docs=>console.log("saving Restaurants",docs))
selectAllRestaurants().then(docs=>console.log("TESTING selectALL/all restaurants:",docs));
selectARestaurantMeal('Vege-grill').then(doc=>console.log("TESTING select a restaurant meal:",doc));

exports.selectAllRestaurants = selectAllRestaurants;
exports.selectARestaurantMeal = selectARestaurantMeal;
exports.saveRestaurantMeal = saveRestaurantMeal;
exports.searchRestaurantMeal = selectARestaurantMeal;