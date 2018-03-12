// var Restaurantmeallist=  () => (
//   <ul>
//   <li>Yummy meal one</li>
//   <li>Yummy meal two</li>
//   </ul>
// )
// var Restaurantmeallist = (props) =>(
//   <ul>
//     {
//        (props)=>(<li>hi</li>)
//     }
//   </ul>
// );

class Retaurantlistentryitem extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <li>
        {this.props.item.name}
      </li>
    )
  }
}


var Restaurantmeallist = (props) => (
  <ul>
 {props.restaurants.map(restaurant =>
      <Retaurantlistentryitem item={restaurant} key={restaurant.name}/>
  )}
  </ul>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;