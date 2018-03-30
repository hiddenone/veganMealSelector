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
        <ul><li>{this.props.restaurant.name}</li>
            <li>{this.props.restaurant.meal}</li>
            <ul>{this.props.restaurant.ingredients.map(ingredient=>{
              return (<li>
                {ingredient}
               </li>);
            }
              )}</ul>

        </ul>
      </li>
    )
  }
}


var Restaurantmeallist = (props) => (
  <ol>
 {props.restaurants.map(restaurant =>
      <Retaurantlistentryitem restaurant={restaurant} key={restaurant.name}/>
  )}
  </ol>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;