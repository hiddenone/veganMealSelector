// getting-started.js from mongo 5.09 documentation
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
// We have a pending connection to the test database running on localhost. We now need to get notified if we connect successfully or if a connection error occurs:

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("connected to MONGO");
});


var restaurantSchema = mongoose.Schema({
  name: String,
  meal: String,
  ingredients:[],
  crumbs:[]
});
// So far so good. We've got a schema with one property, name, which will be a String. The next step is compiling our schema into a Model.
// notes - what finally goes into the database is controlled by the schema
// that is if you change the schema then you can make that model goody not work!!
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

/*Restaurant.find( {name:"Vege-grill"}, function (err, result) {
    if (err) { console.log("ERR:",err) }
    if (!result) {
    }
    console.log("FINDDDDDDDDDDDDDDD:",result);
});
*/



// drops all restaurant documents
Restaurant.remove({}, function(){
var restaurants = [
            {name:"McDonalds",meal:"salad",ingredients:["lettuce"]},
            {name:"Vege-grill",meal:"mushroom burgers",ingredients:["lettuce","mushrooms","bread"]},
            {name: "Hong Kong Charlies", meal:"pad thai", ingredients:["lettuce", "mushrooms", "rice"]}];
Restaurant.insertMany(restaurants).then(function(docs){console.log("insertmany:",docs);
var query = Restaurant.find({name:"Vege-grill"});
    console.log( "IS NOT A PROMISE:", !(query instanceof Promise));


/*Restaurant.findOne( {name:"Vege-grill"}, function (err, result) {
    if (err) { console.log(err) }
    if (!result) {
    }
    console.log("ONEEEEEEE:",result);
});*/


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
//create db info into mongodb







