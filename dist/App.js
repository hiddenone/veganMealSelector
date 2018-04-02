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
      restaurants: [],
      currentrestaurant: null,
      currentmeal: null,
      currentsearchrestaurant: null,
      currentsearchmeal: null,
      restaurant: null,
      meal: null,
      navselect: 'all'
    };
    _this.handleClickOnNav = _this.handleClickOnNav.bind(_this, ["Add Restaurant", "View"]);
    _this.handleMealSubmit = _this.handleMealSubmit.bind(_this);
    _this.handleOnChangeRestaurant = _this.handleOnChangeRestaurant.bind(_this);
    _this.handleOnChangeMeal = _this.handleOnChangeMeal.bind(_this);
    _this.handleOnChangeSearchRestaurant = _this.handleOnChangeSearchRestaurant.bind(_this);
    _this.handleOnChangeSearchMeal = _this.handleOnChangeSearchMeal.bind(_this);
    _this.handleSubmitSearchMeal = _this.handleSubmitSearchMeal.bind(_this);

    return _this;
  }

  _createClass(App, [{
    key: "handleClickOnNav",
    value: function handleClickOnNav(validValues, e) {
      var that = this;
      console.log(e.target.innerHTML, "validValues:", validValues, "s:", e.target.innerHTML.toString());
      var x = e.target.innerHTML.toString();
      validValues.forEach(function (value) {
        if (x.indexOf(value) > -1) {
          that.setState({ navselect: value });
        }
      });
    }
  }, {
    key: "handleOnChangeMeal",
    value: function handleOnChangeMeal(e) {
      console.log("MealCHANGE", e.target.value);
      this.setState({ currentmeal: e.target.value });
    }
  }, {
    key: "handleOnChangeRestaurant",
    value: function handleOnChangeRestaurant(e) {
      console.log("RestaurantCHANGE", e.target.value);
      this.setState({ currentrestaurant: e.target.value });
    }
  }, {
    key: "handleOnChangeSearchMeal",
    value: function handleOnChangeSearchMeal(e) {
      console.log("MealCHANGE", e.target.value);
      this.setState({ currentsearchmeal: e.target.value });
    }
  }, {
    key: "handleOnChangeSearchRestaurant",
    value: function handleOnChangeSearchRestaurant(e) {
      console.log("RestaurantCHANGE", e.target.value);
      this.setState({ currentsearchrestaurant: e.target.value });
    }

    /////////////////

  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      //////this.getAllRestaurants();
      this.fetchRestaurantData();
    }

    // getAllRestaurants() {
    //    let that = this;
    //    //var restaurants = this.props.getAllRestaurants();
    //    this.props.fetchAllRestaurants(function(restaurants){
    //        //console.log('restaurants>>>>>>>>>>>>>>>>');
    //        that.setState({
    //           restaurants: restaurants
    //     })
    //    });
    // }
    //////////////////////////////////////////

  }, {
    key: "fetchRestaurantData",
    value: function fetchRestaurantData() {
      var _this2 = this;

      var that = this;
      fetch('restaurants').then(function (response) {
        return response.json();
      }).then(function (restaurants) {
        console.log("STUFF FROM ZZZZZZZZZZZZZZZ fetchRestaurantData:", restaurants);
        _this2.setState({ restaurants: restaurants });
      });
    }
  }, {
    key: "postRestaurantMeal",
    value: function postRestaurantMeal(data) {
      var _this3 = this;

      var url = 'restaurant/meal';

      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (res) {
        return res.json();
      }).catch(function (error) {
        return console.error('Error:', error);
      }).then(function (response) {
        console.log('Success:', response);
        _this3.fetchRestaurantData();
      });
    }
  }, {
    key: "handleMealSubmit",
    value: function handleMealSubmit(e) {
      e.preventDefault();
      var restaurantMealData = {
        name: this.state.currentrestaurant,
        meal: this.state.currentmeal
      };
      console.log("DEBUG handleMealSubmit", restaurantMealData);
      this.postRestaurantMeal(restaurantMealData);
    }
  }, {
    key: "postRestaurantSearchMeal",
    value: function postRestaurantSearchMeal(data) {
      var url = 'restaurant/search/';
      var that = this;
      fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function (res) {
        return res.json();
      }).catch(function (error) {
        return console.error('Error:', error);
      }).then(function (response) {
        console.log('Success!!!!:', response);
        //this.fetchRestaurantData();
        that.setState({ restaurants: response });
      });
    }
  }, {
    key: "handleSubmitSearchMeal",
    value: function handleSubmitSearchMeal(e) {
      e.preventDefault();
      var restaurantMealData = {
        name: this.state.currentsearchrestaurant,
        meal: this.state.currentsearchmeal
      };
      console.log("DEBUG handleMealSubmit", restaurantMealData);
      this.postRestaurantSearchMeal(restaurantMealData);
    }
  }, {
    key: "render",
    value: function render() {
      var util1 = null;
      var util2 = null;
      var util3 = null;
      if (this.state.navselect === 'View') {
        util1 = React.createElement(Restaurantmeallist, { restaurants: this.state.restaurants });
      } else if (this.state.navselect === 'Add Restaurant') {
        util2 = React.createElement(AddRestaurantMeal, { restaurant: this.state.currentrestaurant, meal: this.state.currentmeal, handleSubmit: this.handleMealSubmit, handleOnChangeRestaurant: this.handleOnChangeRestaurant, handleOnChangeMeal: this.handleOnChangeMeal });
        util3 = React.createElement(SearchForRestaurantMeal, { restaurant: this.state.currentrestaurant, meal: this.state.currentmeal, handleSubmitSearchMeal: this.handleSubmitSearchMeal, handleOnChangeSearchRestaurant: this.handleOnChangeSearchRestaurant, handleOnChangeSearchMeal: this.handleOnChangeSearchMeal });
      } else if (this.state.navselect === 'all') {
        util1 = React.createElement(Restaurantmeallist, { restaurants: this.state.restaurants });
        util3 = React.createElement(SearchForRestaurantMeal, { restaurant: this.state.currentrestaurant, meal: this.state.currentmeal, handleSubmitSearchMeal: this.handleSubmitSearchMeal, handleOnChangeSearchRestaurant: this.handleOnChangeSearchRestaurant, handleOnChangeSearchMeal: this.handleOnChangeSearchMeal });
        util2 = React.createElement(AddRestaurantMeal, { restaurant: this.state.currentrestaurant, meal: this.state.currentmeal, handleSubmit: this.handleMealSubmit, handleOnChangeRestaurant: this.handleOnChangeRestaurant, handleOnChangeMeal: this.handleOnChangeMeal });
      }
      return React.createElement(
        "div",
        null,
        React.createElement(
          "nav",
          { className: "navbar" },
          React.createElement(
            "div",
            { className: "row" },
            React.createElement(Navcomponent, { handleClick: this.handleClickOnNav })
          )
        ),
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(
            "div",
            { className: "col-md-5" },
            util2,
            util3,
            util1
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJyZXN0YXVyYW50cyIsImN1cnJlbnRyZXN0YXVyYW50IiwiY3VycmVudG1lYWwiLCJjdXJyZW50c2VhcmNocmVzdGF1cmFudCIsImN1cnJlbnRzZWFyY2htZWFsIiwicmVzdGF1cmFudCIsIm1lYWwiLCJuYXZzZWxlY3QiLCJoYW5kbGVDbGlja09uTmF2IiwiYmluZCIsImhhbmRsZU1lYWxTdWJtaXQiLCJoYW5kbGVPbkNoYW5nZVJlc3RhdXJhbnQiLCJoYW5kbGVPbkNoYW5nZU1lYWwiLCJoYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnQiLCJoYW5kbGVPbkNoYW5nZVNlYXJjaE1lYWwiLCJoYW5kbGVTdWJtaXRTZWFyY2hNZWFsIiwidmFsaWRWYWx1ZXMiLCJlIiwidGhhdCIsImNvbnNvbGUiLCJsb2ciLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJ0b1N0cmluZyIsIngiLCJmb3JFYWNoIiwidmFsdWUiLCJpbmRleE9mIiwic2V0U3RhdGUiLCJmZXRjaFJlc3RhdXJhbnREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInVybCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiaGVhZGVycyIsIkhlYWRlcnMiLCJyZXMiLCJjYXRjaCIsImVycm9yIiwicHJldmVudERlZmF1bHQiLCJyZXN0YXVyYW50TWVhbERhdGEiLCJuYW1lIiwicG9zdFJlc3RhdXJhbnRNZWFsIiwicG9zdFJlc3RhdXJhbnRTZWFyY2hNZWFsIiwidXRpbDEiLCJ1dGlsMiIsInV0aWwzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUdqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsbUJBQWEs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QURGO0FBUEYsT0FERjtBQStCRDs7OztFQWhMZUcsTUFBTUMsUzs7QUFtTHhCO0FBQ0E7OztBQUNBQyxPQUFPMUQsR0FBUCxHQUFhQSxHQUFiIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcmVzdGF1cmFudHM6IFtdLFxuICAgICAgY3VycmVudHJlc3RhdXJhbnQ6IG51bGwsXG4gICAgICBjdXJyZW50bWVhbDogbnVsbCxcbiAgICAgIGN1cnJlbnRzZWFyY2hyZXN0YXVyYW50OiBudWxsLFxuICAgICAgY3VycmVudHNlYXJjaG1lYWw6IG51bGwsXG4gICAgICByZXN0YXVyYW50OiBudWxsLFxuICAgICAgbWVhbDpudWxsLFxuICAgICAgbmF2c2VsZWN0OiAnYWxsJ1xuICAgIH07XG50aGlzLmhhbmRsZUNsaWNrT25OYXYgPSB0aGlzLmhhbmRsZUNsaWNrT25OYXYuYmluZCh0aGlzLFtcIkFkZCBSZXN0YXVyYW50XCIsXCJWaWV3XCJdKTtcbnRoaXMuaGFuZGxlTWVhbFN1Ym1pdCA9IHRoaXMuaGFuZGxlTWVhbFN1Ym1pdC5iaW5kKHRoaXMpO1xudGhpcy5oYW5kbGVPbkNoYW5nZVJlc3RhdXJhbnQgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlUmVzdGF1cmFudC5iaW5kKHRoaXMpO1xudGhpcy5oYW5kbGVPbkNoYW5nZU1lYWwgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlTWVhbC5iaW5kKHRoaXMpO1xudGhpcy5oYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnQgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlU2VhcmNoUmVzdGF1cmFudC5iaW5kKHRoaXMpO1xudGhpcy5oYW5kbGVPbkNoYW5nZVNlYXJjaE1lYWwgPSB0aGlzLmhhbmRsZU9uQ2hhbmdlU2VhcmNoTWVhbC5iaW5kKHRoaXMpO1xudGhpcy5oYW5kbGVTdWJtaXRTZWFyY2hNZWFsID0gdGhpcy5oYW5kbGVTdWJtaXRTZWFyY2hNZWFsLmJpbmQodGhpcyk7XG5cbiAgfVxuICBoYW5kbGVDbGlja09uTmF2KHZhbGlkVmFsdWVzLCBlKXtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgY29uc29sZS5sb2coZS50YXJnZXQuaW5uZXJIVE1MLCBcInZhbGlkVmFsdWVzOlwiLHZhbGlkVmFsdWVzLFwiczpcIixlLnRhcmdldC5pbm5lckhUTUwudG9TdHJpbmcoKSk7XG4gICAgICB2YXIgeCA9IGUudGFyZ2V0LmlubmVySFRNTC50b1N0cmluZygpO1xuICAgICAgdmFsaWRWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgIGlmKHguaW5kZXhPZih2YWx1ZSk+LTEpe1xuICAgICAgICAgICB0aGF0LnNldFN0YXRlKHtuYXZzZWxlY3Q6dmFsdWV9KTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgfVxuICBoYW5kbGVPbkNoYW5nZU1lYWwoZSl7XG4gICAgIGNvbnNvbGUubG9nKFwiTWVhbENIQU5HRVwiLGUudGFyZ2V0LnZhbHVlKVxuICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50bWVhbDplLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgaGFuZGxlT25DaGFuZ2VSZXN0YXVyYW50KGUpe1xuICAgICBjb25zb2xlLmxvZyhcIlJlc3RhdXJhbnRDSEFOR0VcIixlLnRhcmdldC52YWx1ZSlcbiAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudHJlc3RhdXJhbnQ6ZS50YXJnZXQudmFsdWV9KVxuICB9XG4gICBoYW5kbGVPbkNoYW5nZVNlYXJjaE1lYWwoZSl7XG4gICAgIGNvbnNvbGUubG9nKFwiTWVhbENIQU5HRVwiLGUudGFyZ2V0LnZhbHVlKVxuICAgICB0aGlzLnNldFN0YXRlKHtjdXJyZW50c2VhcmNobWVhbDplLnRhcmdldC52YWx1ZX0pXG4gIH1cbiAgaGFuZGxlT25DaGFuZ2VTZWFyY2hSZXN0YXVyYW50KGUpe1xuICAgICBjb25zb2xlLmxvZyhcIlJlc3RhdXJhbnRDSEFOR0VcIixlLnRhcmdldC52YWx1ZSlcbiAgICAgdGhpcy5zZXRTdGF0ZSh7Y3VycmVudHNlYXJjaHJlc3RhdXJhbnQ6ZS50YXJnZXQudmFsdWV9KVxuICB9XG5cbi8vLy8vLy8vLy8vLy8vLy8vXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIC8vLy8vL3RoaXMuZ2V0QWxsUmVzdGF1cmFudHMoKTtcbiAgICB0aGlzLmZldGNoUmVzdGF1cmFudERhdGEoKTtcbiAgfVxuXG4gIC8vIGdldEFsbFJlc3RhdXJhbnRzKCkge1xuICAvLyAgICBsZXQgdGhhdCA9IHRoaXM7XG4gIC8vICAgIC8vdmFyIHJlc3RhdXJhbnRzID0gdGhpcy5wcm9wcy5nZXRBbGxSZXN0YXVyYW50cygpO1xuICAvLyAgICB0aGlzLnByb3BzLmZldGNoQWxsUmVzdGF1cmFudHMoZnVuY3Rpb24ocmVzdGF1cmFudHMpe1xuICAvLyAgICAgICAgLy9jb25zb2xlLmxvZygncmVzdGF1cmFudHM+Pj4+Pj4+Pj4+Pj4+Pj4+Jyk7XG4gIC8vICAgICAgICB0aGF0LnNldFN0YXRlKHtcbiAgLy8gICAgICAgICAgIHJlc3RhdXJhbnRzOiByZXN0YXVyYW50c1xuICAvLyAgICAgfSlcbiAgLy8gICAgfSk7XG4gIC8vIH1cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5mZXRjaFJlc3RhdXJhbnREYXRhKCl7XG4gIGxldCB0aGF0ID0gdGhpcztcbiAgZmV0Y2goJ3Jlc3RhdXJhbnRzJylcbiAgLnRoZW4ocmVzcG9uc2UgPT5yZXNwb25zZS5qc29uKClcbiAgIClcbiAgLnRoZW4ocmVzdGF1cmFudHMgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiU1RVRkYgRlJPTSBaWlpaWlpaWlpaWlpaWlogZmV0Y2hSZXN0YXVyYW50RGF0YTpcIixyZXN0YXVyYW50cyk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7cmVzdGF1cmFudHM6cmVzdGF1cmFudHN9KVxuICB9KTtcbn1cblxucG9zdFJlc3RhdXJhbnRNZWFsKGRhdGEpe1xuICB2YXIgdXJsID0gJ3Jlc3RhdXJhbnQvbWVhbCc7XG5cbmZldGNoKHVybCwge1xuICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0pXG59KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSlcbi50aGVuKHJlc3BvbnNlID0+IHtjb25zb2xlLmxvZygnU3VjY2VzczonLCByZXNwb25zZSk7XG4gICB0aGlzLmZldGNoUmVzdGF1cmFudERhdGEoKTtcblxufSk7XG59XG5oYW5kbGVNZWFsU3VibWl0KGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHJlc3RhdXJhbnRNZWFsRGF0YSA9IHtcbiAgICBuYW1lOiB0aGlzLnN0YXRlLmN1cnJlbnRyZXN0YXVyYW50LFxuICAgIG1lYWw6IHRoaXMuc3RhdGUuY3VycmVudG1lYWxcbiAgfVxuICBjb25zb2xlLmxvZyhcIkRFQlVHIGhhbmRsZU1lYWxTdWJtaXRcIixyZXN0YXVyYW50TWVhbERhdGEpXG4gIHRoaXMucG9zdFJlc3RhdXJhbnRNZWFsKHJlc3RhdXJhbnRNZWFsRGF0YSk7XG59XG5wb3N0UmVzdGF1cmFudFNlYXJjaE1lYWwoZGF0YSl7XG4gIHZhciB1cmwgPSAncmVzdGF1cmFudC9zZWFyY2gvJztcbmxldCB0aGF0ID0gdGhpcztcbmZldGNoKHVybCwge1xuICBtZXRob2Q6ICdQT1NUJywgLy8gb3IgJ1BVVCdcbiAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXG4gIGhlYWRlcnM6IG5ldyBIZWFkZXJzKHtcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIH0pXG59KS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKSlcbi50aGVuKHJlc3BvbnNlID0+IHtjb25zb2xlLmxvZygnU3VjY2VzcyEhISE6JywgcmVzcG9uc2UpO1xuICAgLy90aGlzLmZldGNoUmVzdGF1cmFudERhdGEoKTtcbiAgIHRoYXQuc2V0U3RhdGUoe3Jlc3RhdXJhbnRzOnJlc3BvbnNlfSlcbn0pO1xufVxuaGFuZGxlU3VibWl0U2VhcmNoTWVhbChlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjb25zdCByZXN0YXVyYW50TWVhbERhdGEgPSB7XG4gICAgbmFtZTogdGhpcy5zdGF0ZS5jdXJyZW50c2VhcmNocmVzdGF1cmFudCxcbiAgICBtZWFsOiB0aGlzLnN0YXRlLmN1cnJlbnRzZWFyY2htZWFsXG4gIH1cbiAgY29uc29sZS5sb2coXCJERUJVRyBoYW5kbGVNZWFsU3VibWl0XCIscmVzdGF1cmFudE1lYWxEYXRhKVxuICB0aGlzLnBvc3RSZXN0YXVyYW50U2VhcmNoTWVhbChyZXN0YXVyYW50TWVhbERhdGEpO1xufVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHZhciB1dGlsMSA9IG51bGw7XG4gICAgdmFyIHV0aWwyID0gbnVsbDtcbiAgICB2YXIgdXRpbDMgPSBudWxsO1xuICAgIGlmKHRoaXMuc3RhdGUubmF2c2VsZWN0PT09J1ZpZXcnKXtcbiAgICAgIHV0aWwxID0gPFJlc3RhdXJhbnRtZWFsbGlzdCByZXN0YXVyYW50cz17dGhpcy5zdGF0ZS5yZXN0YXVyYW50c30vPlxuICAgIH1lbHNlIGlmKHRoaXMuc3RhdGUubmF2c2VsZWN0PT09J0FkZCBSZXN0YXVyYW50Jyl7XG4gICAgICB1dGlsMiA9IDxBZGRSZXN0YXVyYW50TWVhbCByZXN0YXVyYW50PXt0aGlzLnN0YXRlLmN1cnJlbnRyZXN0YXVyYW50fSAgbWVhbD17dGhpcy5zdGF0ZS5jdXJyZW50bWVhbH0gaGFuZGxlU3VibWl0PXt0aGlzLmhhbmRsZU1lYWxTdWJtaXR9IGhhbmRsZU9uQ2hhbmdlUmVzdGF1cmFudD17dGhpcy5oYW5kbGVPbkNoYW5nZVJlc3RhdXJhbnR9IGhhbmRsZU9uQ2hhbmdlTWVhbD17dGhpcy5oYW5kbGVPbkNoYW5nZU1lYWx9Lz5cbiAgICAgIHV0aWwzID0gPFNlYXJjaEZvclJlc3RhdXJhbnRNZWFsIHJlc3RhdXJhbnQ9e3RoaXMuc3RhdGUuY3VycmVudHJlc3RhdXJhbnR9ICBtZWFsPXt0aGlzLnN0YXRlLmN1cnJlbnRtZWFsfSBoYW5kbGVTdWJtaXRTZWFyY2hNZWFsPXt0aGlzLmhhbmRsZVN1Ym1pdFNlYXJjaE1lYWx9IGhhbmRsZU9uQ2hhbmdlU2VhcmNoUmVzdGF1cmFudD17dGhpcy5oYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnR9IGhhbmRsZU9uQ2hhbmdlU2VhcmNoTWVhbD17dGhpcy5oYW5kbGVPbkNoYW5nZVNlYXJjaE1lYWx9Lz5cbiAgICB9ZWxzZSBpZih0aGlzLnN0YXRlLm5hdnNlbGVjdD09PSdhbGwnKXtcbiAgICAgIHV0aWwxID0gPFJlc3RhdXJhbnRtZWFsbGlzdCByZXN0YXVyYW50cz17dGhpcy5zdGF0ZS5yZXN0YXVyYW50c30vPlxuICAgICAgdXRpbDMgPSA8U2VhcmNoRm9yUmVzdGF1cmFudE1lYWwgcmVzdGF1cmFudD17dGhpcy5zdGF0ZS5jdXJyZW50cmVzdGF1cmFudH0gIG1lYWw9e3RoaXMuc3RhdGUuY3VycmVudG1lYWx9IGhhbmRsZVN1Ym1pdFNlYXJjaE1lYWw9e3RoaXMuaGFuZGxlU3VibWl0U2VhcmNoTWVhbH0gaGFuZGxlT25DaGFuZ2VTZWFyY2hSZXN0YXVyYW50PXt0aGlzLmhhbmRsZU9uQ2hhbmdlU2VhcmNoUmVzdGF1cmFudH0gaGFuZGxlT25DaGFuZ2VTZWFyY2hNZWFsPXt0aGlzLmhhbmRsZU9uQ2hhbmdlU2VhcmNoTWVhbH0vPlxuICAgICAgIHV0aWwyID0gPEFkZFJlc3RhdXJhbnRNZWFsIHJlc3RhdXJhbnQ9e3RoaXMuc3RhdGUuY3VycmVudHJlc3RhdXJhbnR9ICBtZWFsPXt0aGlzLnN0YXRlLmN1cnJlbnRtZWFsfSBoYW5kbGVTdWJtaXQ9e3RoaXMuaGFuZGxlTWVhbFN1Ym1pdH0gaGFuZGxlT25DaGFuZ2VSZXN0YXVyYW50PXt0aGlzLmhhbmRsZU9uQ2hhbmdlUmVzdGF1cmFudH0gaGFuZGxlT25DaGFuZ2VNZWFsPXt0aGlzLmhhbmRsZU9uQ2hhbmdlTWVhbH0vPlxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPE5hdmNvbXBvbmVudCBoYW5kbGVDbGljaz0ge3RoaXMuaGFuZGxlQ2xpY2tPbk5hdn0vPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC01XCI+XG4gICAgICAgICAgey8qXG4gICAgICAgICAgICAqIEl0J3MgdmVyeSBpbXBvcnRhbnQgdG8gYmluZCB0aGUgY29udGV4dCBvZiB0aGlzIGNhbGxiYWNrLlxuICAgICAgICAgICAgKiBBbHNvIGFjY2VwdGFibGUgaXMgdG8gcGFzcyBhIGFub255bW91cyBmdW5jdGlvbiBleHByZXNzaW9uIHdpdGggYSBmYXRcbiAgICAgICAgICAgICogYXJyb3cgdGhhdCBpbmhlcml0cyB0aGUgc3Vycm91bmRpbmcgbGV4aWNhbCBgdGhpc2AgY29udGV4dDpcbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogICBoYW5kbGVyZXN0YXVyYW50TGlzdEVudHJ5VGl0bGVDbGljaz17KHJlc3RhdXJhbnQpID0+IHRoaXMub25yZXN0YXVyYW50TGlzdEVudHJ5Q2xpY2socmVzdGF1cmFudCl9XG4gICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC0gb3IgLVxuICAgICAgICAgICAgKiAgIGhhbmRsZXJlc3RhdXJhbnRMaXN0RW50cnlUaXRsZUNsaWNrPXsoY3VycmVudHJlc3RhdXJhbnQpID0+IHRoaXMuc2V0U3RhdGUoe2N1cnJlbnRyZXN0YXVyYW50fSl9XG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqL31cbiB7LyogICAgICAgICAgIHJlc3RhdXJhbnRtZWFsbGlzdFxuICAgICAgICAgICAgIGhhbmRsZXJlc3RhdXJhbnRMaXN0RW50cnlUaXRsZUNsaWNrPXt0aGlzLmhhbmRsZXJlc3RhdXJhbnRMaXN0RW50cnlUaXRsZUNsaWNrLmJpbmQodGhpcyl9XG4gICAgICAgICAgICAgcmVzdGF1cmFudHM9e3RoaXMuc3RhdGUucmVzdGF1cmFudHN9XG4gICAgICAgICAgIC8+ICovfVxuICAgICAgICAgICAge3V0aWwyfVxuICAgICAgICAgICAge3V0aWwzfVxuICAgICAgICAgICAge3V0aWwxfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuLy8gSW4gdGhlIEVTNiBzcGVjLCBmaWxlcyBhcmUgXCJtb2R1bGVzXCIgYW5kIGRvIG5vdCBzaGFyZSBhIHRvcC1sZXZlbCBzY29wZVxuLy8gYHZhcmAgZGVjbGFyYXRpb25zIHdpbGwgb25seSBleGlzdCBnbG9iYWxseSB3aGVyZSBleHBsaWNpdGx5IGRlZmluZWRcbndpbmRvdy5BcHAgPSBBcHA7Il19