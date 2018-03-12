"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      restaurants: [{ name: "r1", key: "kr1" }, { name: "r2", key: "kr2" }],
      currentrestaurant: null
    };
    return _this;
  }

  _createClass(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      //   this.getAllrestaurants();
    }
  }, {
    key: "getAllrestaurants",
    value: function getAllrestaurants(query) {
      var _this2 = this;

      // var options = {
      //   key: this.props.API_KEY,
      //   query: query
      // };

      this.props.getAllRestaurants(options, function (restaurants) {
        return _this2.setState({
          restaurants: restaurants
          //currentrestaurant: restaurants[0]
        });
      });
    }

    // handlerestaurantListEntryTitleClick(restaurant) {
    //   this.setState({
    //     currentrestaurant: restaurant
    //   });
    // }

  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement("div", { className: "row" })
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-5" },
            React.createElement(Restaurantmeallist
            //             handlerestaurantListEntryTitleClick={this.handlerestaurantListEntryTitleClick.bind(this)}
            , { restaurants: this.state.restaurants
            })
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined


window.App = App;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXN0YXVyYW50cyIsIm5hbWUiLCJrZXkiLCJjdXJyZW50cmVzdGF1cmFudCIsInF1ZXJ5IiwiZ2V0QWxsUmVzdGF1cmFudHMiLCJvcHRpb25zIiwic2V0U3RhdGUiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxtQkFBYSxDQUFDLEVBQUNDLE1BQUssSUFBTixFQUFXQyxLQUFJLEtBQWYsRUFBRCxFQUF1QixFQUFDRCxNQUFLLElBQU4sRUFBV0MsS0FBSSxLQUFmLEVBQXZCLENBREY7QUFFWEMseUJBQW1CO0FBRlIsS0FBYjtBQUhpQjtBQU9sQjs7Ozt3Q0FFbUI7QUFDckI7QUFDRTs7O3NDQUVpQkMsSyxFQUFPO0FBQUE7O0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFdBQUtOLEtBQUwsQ0FBV08saUJBQVgsQ0FBNkJDLE9BQTdCLEVBQXNDLFVBQUNOLFdBQUQ7QUFBQSxlQUNwQyxPQUFLTyxRQUFMLENBQWM7QUFDWlAsdUJBQWFBO0FBQ2I7QUFGWSxTQUFkLENBRG9DO0FBQUEsT0FBdEM7QUFNRDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUVTO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFFBQWY7QUFDQSx1Q0FBSyxXQUFVLEtBQWY7QUFEQSxTQURGO0FBS0U7QUFBQTtBQUFBLFlBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBV0UsZ0NBQUM7QUFDWjtBQURXLGdCQUVFLGFBQWEsS0FBS0QsS0FBTCxDQUFXQztBQUYxQjtBQVhGO0FBREY7QUFMRixPQURGO0FBMEJEOzs7O0VBN0RlUSxNQUFNQyxTOztBQWdFeEI7QUFDQTs7O0FBQ0FDLE9BQU9iLEdBQVAsR0FBYUEsR0FBYiIsImZpbGUiOiJBcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICByZXN0YXVyYW50czogW3tuYW1lOlwicjFcIixrZXk6XCJrcjFcIn0se25hbWU6XCJyMlwiLGtleTpcImtyMlwifV0sXG4gICAgICBjdXJyZW50cmVzdGF1cmFudDogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAvLyAgIHRoaXMuZ2V0QWxscmVzdGF1cmFudHMoKTtcbiAgfVxuXG4gIGdldEFsbHJlc3RhdXJhbnRzKHF1ZXJ5KSB7XG4gICAgLy8gdmFyIG9wdGlvbnMgPSB7XG4gICAgLy8gICBrZXk6IHRoaXMucHJvcHMuQVBJX0tFWSxcbiAgICAvLyAgIHF1ZXJ5OiBxdWVyeVxuICAgIC8vIH07XG5cbiAgICB0aGlzLnByb3BzLmdldEFsbFJlc3RhdXJhbnRzKG9wdGlvbnMsIChyZXN0YXVyYW50cykgPT5cbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICByZXN0YXVyYW50czogcmVzdGF1cmFudHMsXG4gICAgICAgIC8vY3VycmVudHJlc3RhdXJhbnQ6IHJlc3RhdXJhbnRzWzBdXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBoYW5kbGVyZXN0YXVyYW50TGlzdEVudHJ5VGl0bGVDbGljayhyZXN0YXVyYW50KSB7XG4gIC8vICAgdGhpcy5zZXRTdGF0ZSh7XG4gIC8vICAgICBjdXJyZW50cmVzdGF1cmFudDogcmVzdGF1cmFudFxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNVwiPlxuICAgICAgICAgIHsvKlxuICAgICAgICAgICAgKiBJdCdzIHZlcnkgaW1wb3J0YW50IHRvIGJpbmQgdGhlIGNvbnRleHQgb2YgdGhpcyBjYWxsYmFjay5cbiAgICAgICAgICAgICogQWxzbyBhY2NlcHRhYmxlIGlzIHRvIHBhc3MgYSBhbm9ueW1vdXMgZnVuY3Rpb24gZXhwcmVzc2lvbiB3aXRoIGEgZmF0XG4gICAgICAgICAgICAqIGFycm93IHRoYXQgaW5oZXJpdHMgdGhlIHN1cnJvdW5kaW5nIGxleGljYWwgYHRoaXNgIGNvbnRleHQ6XG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqICAgaGFuZGxlcmVzdGF1cmFudExpc3RFbnRyeVRpdGxlQ2xpY2s9eyhyZXN0YXVyYW50KSA9PiB0aGlzLm9ucmVzdGF1cmFudExpc3RFbnRyeUNsaWNrKHJlc3RhdXJhbnQpfVxuICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtIG9yIC1cbiAgICAgICAgICAgICogICBoYW5kbGVyZXN0YXVyYW50TGlzdEVudHJ5VGl0bGVDbGljaz17KGN1cnJlbnRyZXN0YXVyYW50KSA9PiB0aGlzLnNldFN0YXRlKHtjdXJyZW50cmVzdGF1cmFudH0pfVxuICAgICAgICAgICAgKlxuICAgICAgICAgICAgKi99XG4gICAgICAgICAgICA8UmVzdGF1cmFudG1lYWxsaXN0XG4gLy8gICAgICAgICAgICAgaGFuZGxlcmVzdGF1cmFudExpc3RFbnRyeVRpdGxlQ2xpY2s9e3RoaXMuaGFuZGxlcmVzdGF1cmFudExpc3RFbnRyeVRpdGxlQ2xpY2suYmluZCh0aGlzKX1cbiAgICAgICAgICAgICAgcmVzdGF1cmFudHM9e3RoaXMuc3RhdGUucmVzdGF1cmFudHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7Il19