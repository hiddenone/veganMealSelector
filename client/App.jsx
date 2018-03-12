class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      restaurants: [{name:"r1",key:"kr1"},{name:"r2",key:"kr2"}],
      currentrestaurant: null
    };
  }

  componentDidMount() {
 //   this.getAllrestaurants();
  }

  getAllrestaurants(query) {
    // var options = {
    //   key: this.props.API_KEY,
    //   query: query
    // };

    this.props.getAllRestaurants(options, (restaurants) =>
      this.setState({
        restaurants: restaurants,
        //currentrestaurant: restaurants[0]
      })
    );
  }

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