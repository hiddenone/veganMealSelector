
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      currentrestaurant: null,
      restaurant: null,
      meal:null,
      navselect: 'all'
    };
this.handleClickOnNav = this.handleClickOnNav.bind(this,["Add Restaurant","View"]);
this.handleMealSubmit = this.handleMealSubmit.bind(this);

  }
  handleClickOnNav(validValues, e){
    var that = this;
    console.log(e.target.innerHTML, "validValues:",validValues,"s:",e.target.innerHTML.toString());
      var x = e.target.innerHTML.toString();
      validValues.forEach(function(value){
        if(x.indexOf(value)>-1){
           that.setState({navselect:value});
        }
      })

  }

/////////////////
  componentDidMount() {
    //////this.getAllRestaurants();
    this.fetchRestaurantData();
  }

  getAllRestaurants() {
     let that = this;
     //var restaurants = this.props.getAllRestaurants();
     this.props.fetchAllRestaurants(function(restaurants){
         //console.log('restaurants>>>>>>>>>>>>>>>>');
         that.setState({
            restaurants: restaurants
      })
     });
  }
//////////////////////////////////////////

fetchRestaurantData(){
  let that = this;
  fetch('restaurants')
  .then(response =>response.json()
   )
  .then(restaurants => {
    console.log("STUFF FROM ZZZZZZZZZZZZZZZ fetchRestaurantData:",restaurants);
    this.setState({restaurants:restaurants})
  });
}

postRestaurantMeal(data){
  var url = 'restaurant/meal';

fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data),
  headers: new Headers({
    'Content-Type': 'application/json'
  })
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));
}
handleMealSubmit(e){
  e.preventDefault();
  const restaurantMealData = {
    restaurant: this.state.restaurant,
    meal: this.state.meal
  }
  console.log("DEBUG handleMealSubmit",restaurantMealData)
  this.postRestaurantMeal({meal:"mealtest",restaurant:"restauranttest"});
}


  render() {
    var util1 = null;
    var util2 = null;
    if(this.state.navselect==='View'){
      util1 = <Restaurantmeallist restaurants={this.state.restaurants}/>
    }else if(this.state.navselect==='Add Restaurant'){
      util2 = <AddRestaurantMeal />
    }else if(this.state.navselect==='all'){
      util1 = <Restaurantmeallist restaurants={this.state.restaurants}/>
      util2 = <AddRestaurantMeal handleSubmit={this.handleMealSubmit}/>
    }
    return (
      <div>
        <nav className="navbar">
        <div className="row">
        <Navcomponent handleClick= {this.handleClickOnNav}/>

        </div>
        </nav>
        <div className="row">
          <div className="col-md-5">
          {/*
            * It's very important to bind the context of this callback.
            * Also acceptable is to pass a anonymous function expression with a fat
            * arrow that inherits the surrounding lexical `this` context:
            *
            *   handlerestaurantListEntryTitleClick={(restaurant) => this.onrestaurantListEntryClick(restaurant)}
            *                                  - or -
            *   handlerestaurantListEntryTitleClick={(currentrestaurant) => this.setState({currentrestaurant})}
            *
            */}
 {/*           restaurantmeallist
             handlerestaurantListEntryTitleClick={this.handlerestaurantListEntryTitleClick.bind(this)}
             restaurants={this.state.restaurants}
           /> */}
            {util1}
            {util2}
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;