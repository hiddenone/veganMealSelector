
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [],
      currentrestaurant: null
    };
  }

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
    //  let that = this;
    // this.props.fetchAllRestaurants(restaurants=>{
    //   console.log("TESTING>>>>>>>>>", restaurants);
    //   that.setState({retaurants: restaurants})
    // })


    // this.setState({
    //   restaurants: restaurants
    // })
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

////////////////////////////////////////////







  // handlerestaurantListEntryTitleClick(restaurant) {
  //   this.setState({
  //     currentrestaurant: restaurant
  //   });
  // }

  render() {
    return (
      <div>
        <nav className="navbar">
        <div className="row">
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
            <Restaurantmeallist
 //             handlerestaurantListEntryTitleClick={this.handlerestaurantListEntryTitleClick.bind(this)}
              restaurants={this.state.restaurants}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;