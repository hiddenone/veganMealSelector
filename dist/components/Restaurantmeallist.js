"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Retaurantlistentryitem = function (_React$Component) {
  _inherits(Retaurantlistentryitem, _React$Component);

  function Retaurantlistentryitem(props) {
    _classCallCheck(this, Retaurantlistentryitem);

    return _possibleConstructorReturn(this, (Retaurantlistentryitem.__proto__ || Object.getPrototypeOf(Retaurantlistentryitem)).call(this, props));
  }

  _createClass(Retaurantlistentryitem, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "li",
        null,
        this.props.item.name
      );
    }
  }]);

  return Retaurantlistentryitem;
}(React.Component);

var Restaurantmeallist = function Restaurantmeallist(props) {
  return React.createElement(
    "ul",
    null,
    props.restaurants.map(function (restaurant) {
      return React.createElement(Retaurantlistentryitem, { item: restaurant, key: restaurant.name });
    })
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3RhdXJhbnRtZWFsbGlzdC5qc3giXSwibmFtZXMiOlsiUmV0YXVyYW50bGlzdGVudHJ5aXRlbSIsInByb3BzIiwiaXRlbSIsIm5hbWUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIlJlc3RhdXJhbnRtZWFsbGlzdCIsInJlc3RhdXJhbnRzIiwibWFwIiwicmVzdGF1cmFudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxzQjs7O0FBQ0osa0NBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwySUFDWEEsS0FEVztBQUVsQjs7Ozs2QkFHUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0csYUFBS0EsS0FBTCxDQUFXQyxJQUFYLENBQWdCQztBQURuQixPQURGO0FBS0Q7Ozs7RUFaa0NDLE1BQU1DLFM7O0FBZ0IzQyxJQUFJQyxxQkFBcUIsU0FBckJBLGtCQUFxQixDQUFDTCxLQUFEO0FBQUEsU0FDdkI7QUFBQTtBQUFBO0FBQ0FBLFVBQU1NLFdBQU4sQ0FBa0JDLEdBQWxCLENBQXNCO0FBQUEsYUFDbEIsb0JBQUMsc0JBQUQsSUFBd0IsTUFBTUMsVUFBOUIsRUFBMEMsS0FBS0EsV0FBV04sSUFBMUQsR0FEa0I7QUFBQSxLQUF0QjtBQURBLEdBRHVCO0FBQUEsQ0FBekI7O0FBU0E7QUFDQTtBQUNBTyxPQUFPSixrQkFBUCxHQUE0QkEsa0JBQTVCIiwiZmlsZSI6IlJlc3RhdXJhbnRtZWFsbGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHZhciBSZXN0YXVyYW50bWVhbGxpc3Q9ICAoKSA9PiAoXG4vLyAgIDx1bD5cbi8vICAgPGxpPll1bW15IG1lYWwgb25lPC9saT5cbi8vICAgPGxpPll1bW15IG1lYWwgdHdvPC9saT5cbi8vICAgPC91bD5cbi8vIClcbi8vIHZhciBSZXN0YXVyYW50bWVhbGxpc3QgPSAocHJvcHMpID0+KFxuLy8gICA8dWw+XG4vLyAgICAge1xuLy8gICAgICAgIChwcm9wcyk9Pig8bGk+aGk8L2xpPilcbi8vICAgICB9XG4vLyAgIDwvdWw+XG4vLyApO1xuXG5jbGFzcyBSZXRhdXJhbnRsaXN0ZW50cnlpdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpPlxuICAgICAgICB7dGhpcy5wcm9wcy5pdGVtLm5hbWV9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuXG5cbnZhciBSZXN0YXVyYW50bWVhbGxpc3QgPSAocHJvcHMpID0+IChcbiAgPHVsPlxuIHtwcm9wcy5yZXN0YXVyYW50cy5tYXAocmVzdGF1cmFudCA9PlxuICAgICAgPFJldGF1cmFudGxpc3RlbnRyeWl0ZW0gaXRlbT17cmVzdGF1cmFudH0ga2V5PXtyZXN0YXVyYW50Lm5hbWV9Lz5cbiAgKX1cbiAgPC91bD5cbik7XG5cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZS5cbi8vIGB2YXJgIGRlY2xhcmF0aW9ucyB3aWxsIG9ubHkgZXhpc3QgZ2xvYmFsbHkgd2hlcmUgZXhwbGljaXRseSBkZWZpbmVkLlxud2luZG93LlJlc3RhdXJhbnRtZWFsbGlzdCA9IFJlc3RhdXJhbnRtZWFsbGlzdDsiXX0=