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

var Restaurantmeallist = (props) => (
  <ul>
  {props.restaurants.map(function(r,i){
    console.log(r,i);
    return (<li>{r.name}</li>)
  })}
  </ul>
);


// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;