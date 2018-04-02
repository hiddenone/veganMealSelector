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
        React.createElement(
          "ul",
          null,
          React.createElement(
            "li",
            null,
            this.props.restaurant.name
          ),
          React.createElement(
            "li",
            null,
            this.props.restaurant.meal
          ),
          React.createElement(
            "ul",
            null,
            this.props.restaurant.ingredients.map(function (ingredient) {
              return React.createElement(
                "li",
                null,
                ingredient
              );
            })
          )
        )
      );
    }
  }]);

  return Retaurantlistentryitem;
}(React.Component);

var Restaurantmeallist = function Restaurantmeallist(props) {
  return React.createElement(
    "ol",
    null,
    props.restaurants.map(function (restaurant) {
      return React.createElement(Retaurantlistentryitem, { restaurant: restaurant, key: restaurant._id });
    })
  );
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.Restaurantmeallist = Restaurantmeallist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1Jlc3RhdXJhbnRtZWFsbGlzdC5qc3giXSwibmFtZXMiOlsiUmV0YXVyYW50bGlzdGVudHJ5aXRlbSIsInByb3BzIiwicmVzdGF1cmFudCIsIm5hbWUiLCJtZWFsIiwiaW5ncmVkaWVudHMiLCJtYXAiLCJpbmdyZWRpZW50IiwiUmVhY3QiLCJDb21wb25lbnQiLCJSZXN0YXVyYW50bWVhbGxpc3QiLCJyZXN0YXVyYW50cyIsIl9pZCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ01BLHNCOzs7QUFDSixrQ0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDJJQUNYQSxLQURXO0FBRWxCOzs7OzZCQUdRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBSTtBQUFBO0FBQUE7QUFBSyxpQkFBS0EsS0FBTCxDQUFXQyxVQUFYLENBQXNCQztBQUEzQixXQUFKO0FBQ0k7QUFBQTtBQUFBO0FBQUssaUJBQUtGLEtBQUwsQ0FBV0MsVUFBWCxDQUFzQkU7QUFBM0IsV0FESjtBQUVJO0FBQUE7QUFBQTtBQUFLLGlCQUFLSCxLQUFMLENBQVdDLFVBQVgsQ0FBc0JHLFdBQXRCLENBQWtDQyxHQUFsQyxDQUFzQyxzQkFBWTtBQUNyRCxxQkFBUTtBQUFBO0FBQUE7QUFDTEM7QUFESyxlQUFSO0FBR0QsYUFKSTtBQUFMO0FBRko7QUFERixPQURGO0FBY0Q7Ozs7RUFyQmtDQyxNQUFNQyxTOztBQXlCM0MsSUFBSUMscUJBQXFCLFNBQXJCQSxrQkFBcUIsQ0FBQ1QsS0FBRDtBQUFBLFNBQ3ZCO0FBQUE7QUFBQTtBQUNBQSxVQUFNVSxXQUFOLENBQWtCTCxHQUFsQixDQUFzQjtBQUFBLGFBQ2xCLG9CQUFDLHNCQUFELElBQXdCLFlBQVlKLFVBQXBDLEVBQWdELEtBQUtBLFdBQVdVLEdBQWhFLEdBRGtCO0FBQUEsS0FBdEI7QUFEQSxHQUR1QjtBQUFBLENBQXpCOztBQVNBO0FBQ0E7QUFDQUMsT0FBT0gsa0JBQVAsR0FBNEJBLGtCQUE1QiIsImZpbGUiOiJSZXN0YXVyYW50bWVhbGxpc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgUmVzdGF1cmFudG1lYWxsaXN0PSAgKCkgPT4gKFxuLy8gICA8dWw+XG4vLyAgIDxsaT5ZdW1teSBtZWFsIG9uZTwvbGk+XG4vLyAgIDxsaT5ZdW1teSBtZWFsIHR3bzwvbGk+XG4vLyAgIDwvdWw+XG4vLyApXG4vLyB2YXIgUmVzdGF1cmFudG1lYWxsaXN0ID0gKHByb3BzKSA9Pihcbi8vICAgPHVsPlxuLy8gICAgIHtcbi8vICAgICAgICAocHJvcHMpPT4oPGxpPmhpPC9saT4pXG4vLyAgICAgfVxuLy8gICA8L3VsPlxuLy8gKTtcbmNsYXNzIFJldGF1cmFudGxpc3RlbnRyeWl0ZW0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8bGk+XG4gICAgICAgIDx1bD48bGk+e3RoaXMucHJvcHMucmVzdGF1cmFudC5uYW1lfTwvbGk+XG4gICAgICAgICAgICA8bGk+e3RoaXMucHJvcHMucmVzdGF1cmFudC5tZWFsfTwvbGk+XG4gICAgICAgICAgICA8dWw+e3RoaXMucHJvcHMucmVzdGF1cmFudC5pbmdyZWRpZW50cy5tYXAoaW5ncmVkaWVudD0+e1xuICAgICAgICAgICAgICByZXR1cm4gKDxsaT5cbiAgICAgICAgICAgICAgICB7aW5ncmVkaWVudH1cbiAgICAgICAgICAgICAgIDwvbGk+KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgKX08L3VsPlxuXG4gICAgICAgIDwvdWw+XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuXG5cbnZhciBSZXN0YXVyYW50bWVhbGxpc3QgPSAocHJvcHMpID0+IChcbiAgPG9sPlxuIHtwcm9wcy5yZXN0YXVyYW50cy5tYXAocmVzdGF1cmFudCA9PlxuICAgICAgPFJldGF1cmFudGxpc3RlbnRyeWl0ZW0gcmVzdGF1cmFudD17cmVzdGF1cmFudH0ga2V5PXtyZXN0YXVyYW50Ll9pZH0vPlxuICApfVxuICA8L29sPlxuKTtcblxuXG4vLyBJbiB0aGUgRVM2IHNwZWMsIGZpbGVzIGFyZSBcIm1vZHVsZXNcIiBhbmQgZG8gbm90IHNoYXJlIGEgdG9wLWxldmVsIHNjb3BlLlxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWQuXG53aW5kb3cuUmVzdGF1cmFudG1lYWxsaXN0ID0gUmVzdGF1cmFudG1lYWxsaXN0OyJdfQ==