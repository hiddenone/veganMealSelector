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

// notes: this controls what fields will actually be put into the documents
// when inserting if some field is not included it gets set to an empty value
// if a field is not in here it will not be saved
//   SPECIAL NOTE: you might? get around this by creating an actual instance of a Model
//                 which is know as a document --- have not tried this here since not needed
//                 see the MDN website where it shows how a tutorial on this subject with library
//                 books


/*Restaurant.find( {name:"Vege-grill"}, function (err, result) {
    if (err) { console.log("ERR:",err) }
    if (!result) {
    }
    console.log("FINDDDDDDDDDDDDDDD:",result);
});
*/
  var restaurants = [
            {name:"McDonalds",meal:"salad",ingredients:["lettuce"]},
            {name:"Vege-grill",meal:"mushroom burgers",ingredients:["lettuce","mushrooms","bread"]},
            {name: "Hong Kong Charlies", meal:"pad thai", ingredients:["lettuce", "mushrooms", "rice"]},
    {name: "Vegetarian House", meal:"Pho Noodle Soupt", ingredients:["lettuce", "mushrooms", "Pho","bamboo-shoots"],crumbs:["IT CHANGED"],notinthemodel:["testing will not go into db"]}];

// drops all restaurant documents
Restaurant.remove({}, function(){

  Restaurant.insertMany(restaurants).then(function(docs){
  console.log("insertmany:",docs);


    // Old style callbacks to find data
    /*Restaurant.findOne( {name:"Vege-grill"}, function (err, result) {
        if (err) { console.log(err) }
        if (!result) {
        }
        console.log("ONEEEEEEE:",result);
    });*/
    var query = Restaurant.find({name:"Vege-grill"});
    console.log( "IS NOT A PROMISE:", !(query instanceof Promise));

    // A query is not a fully-fledged promise, but it does have a `.then()`.
    query.then(function (doc) {
      // use doc
      console.log("non promise:",doc);
    });

    // `.exec()` gives you a fully-fledged promise
    var promise = query.exec();
    console.log("IS A PROMISE, YEAH:",promise instanceof Promise);

    promise.then(function (doc) {
      // use doc
      console.log("promise:",doc);
    });




});
})