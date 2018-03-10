var App = () => (
  <Restaurantmeallist />
);
var Restaurantmeallist=  () => (
  <ul>
  <li>Yummy meal one</li>
  </ul>
)
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;