"use strict";

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

var Restaurantmeallist = function Restaurantmeallist(props) {
  return React.createElement(
    "ul",
    null,
    props.restaurants.map(function (r, i) {
      console.log(r, i);
      return React.createElement(
        "li",
        null,
        r.name
      );
    })
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3RhdXJhbnRtZWFsbGlzdC5qc3giXSwibmFtZXMiOlsiUmVzdGF1cmFudG1lYWxsaXN0IiwicHJvcHMiLCJyZXN0YXVyYW50cyIsIm1hcCIsInIiLCJpIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDQyxLQUFEO0FBQUEsU0FDdkI7QUFBQTtBQUFBO0FBQ0NBLFVBQU1DLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCLFVBQVNDLENBQVQsRUFBV0MsQ0FBWCxFQUFhO0FBQ2xDQyxjQUFRQyxHQUFSLENBQVlILENBQVosRUFBY0MsQ0FBZDtBQUNBLGFBQVE7QUFBQTtBQUFBO0FBQUtELFVBQUVJO0FBQVAsT0FBUjtBQUNELEtBSEE7QUFERCxHQUR1QjtBQUFBLENBQXpCOztBQVVBO0FBQ0E7QUFDQUMsT0FBT1Qsa0JBQVAsR0FBNEJBLGtCQUE1QiIsImZpbGUiOiJSZXN0YXVyYW50bWVhbGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgUmVzdGF1cmFudG1lYWxsaXN0PSAgKCkgPT4gKFxuLy8gICA8dWw+XG4vLyAgIDxsaT5ZdW1teSBtZWFsIG9uZTwvbGk+XG4vLyAgIDxsaT5ZdW1teSBtZWFsIHR3bzwvbGk+XG4vLyAgIDwvdWw+XG4vLyApXG4vLyB2YXIgUmVzdGF1cmFudG1lYWxsaXN0ID0gKHByb3BzKSA9Pihcbi8vICAgPHVsPlxuLy8gICAgIHtcbi8vICAgICAgICAocHJvcHMpPT4oPGxpPmhpPC9saT4pXG5cblxuLy8gICAgIH1cbi8vICAgPC91bD5cbi8vICk7XG5cbnZhciBSZXN0YXVyYW50bWVhbGxpc3QgPSAocHJvcHMpID0+IChcbiAgPHVsPlxuICB7cHJvcHMucmVzdGF1cmFudHMubWFwKGZ1bmN0aW9uKHIsaSl7XG4gICAgY29uc29sZS5sb2cocixpKTtcbiAgICByZXR1cm4gKDxsaT57ci5uYW1lfTwvbGk+KVxuICB9KX1cbiAgPC91bD5cbik7XG5cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZS5cbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkLlxud2luZG93LlJlc3RhdXJhbnRtZWFsbGlzdCA9IFJlc3RhdXJhbnRtZWFsbGlzdDsiXX0=