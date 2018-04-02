"use strict";

var SearchForRestaurantMeal = function SearchForRestaurantMeal(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "group1" },
      React.createElement(
        "label",
        { htmlFor: "name" },
        "Restaurant"
      ),
      React.createElement("input", { id: "name", type: "text", name: "name", value: props.searchrestaurant, onChange: props.handleOnChangeSearchRestaurant })
    ),
    React.createElement(
      "div",
      { className: "group2" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Meal"
      ),
      React.createElement("input", { id: "email", type: "text", name: "email", value: props.searchmeal, onChange: props.handleOnChangeSearchMeal })
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-link float-left",
        onClick: props.handleSubmitSearchMeal },
      "Search"
    ),
    React.createElement("br", { className: "clearboth" })
  );
};

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL3NlYXJjaC5qc3giXSwibmFtZXMiOlsiU2VhcmNoRm9yUmVzdGF1cmFudE1lYWwiLCJwcm9wcyIsInNlYXJjaHJlc3RhdXJhbnQiLCJoYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnQiLCJzZWFyY2htZWFsIiwiaGFuZGxlT25DaGFuZ2VTZWFyY2hNZWFsIiwiaGFuZGxlU3VibWl0U2VhcmNoTWVhbCIsIndpbmRvdyIsIlNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSwwQkFBMEIsU0FBMUJBLHVCQUEwQixDQUFDQyxLQUFELEVBQVM7QUFDckMsU0FBUTtBQUFBO0FBQUE7QUFDUjtBQUFBO0FBQUEsUUFBSyxXQUFVLFFBQWY7QUFDTTtBQUFBO0FBQUEsVUFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLE9BRE47QUFFTSxxQ0FBTyxJQUFHLE1BQVYsRUFBaUIsTUFBSyxNQUF0QixFQUE4QixNQUFLLE1BQW5DLEVBQTBDLE9BQU9BLE1BQU1DLGdCQUF2RCxFQUF5RSxVQUFVRCxNQUFNRSw4QkFBekY7QUFGTixLQURRO0FBS1Y7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQ1E7QUFBQTtBQUFBLFVBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxPQURSO0FBRVEscUNBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssTUFBdkIsRUFBK0IsTUFBSyxPQUFwQyxFQUE0QyxPQUFPRixNQUFNRyxVQUF6RCxFQUFxRSxVQUFVSCxNQUFNSSx3QkFBckY7QUFGUixLQUxVO0FBU1Y7QUFBQTtBQUFBO0FBQ1UsbUJBQVUseUJBRHBCO0FBRVUsaUJBQVNKLE1BQU1LLHNCQUZ6QjtBQUFBO0FBQUEsS0FUVTtBQVlWLGdDQUFJLFdBQVUsV0FBZDtBQVpVLEdBQVI7QUFlRCxDQWhCRDs7QUFrQkFDLE9BQU9DLE1BQVAsR0FBZ0JBLE1BQWhCIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hGb3JSZXN0YXVyYW50TWVhbCA9IChwcm9wcyk9PntcbiAgcmV0dXJuICg8ZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwMVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5SZXN0YXVyYW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3Byb3BzLnNlYXJjaHJlc3RhdXJhbnR9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnR9Lz5cbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9XCJncm91cDJcIj5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPk1lYWw8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJlbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtwcm9wcy5zZWFyY2htZWFsfSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlT25DaGFuZ2VTZWFyY2hNZWFsfS8+XG48L2Rpdj5cbjxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZmxvYXQtbGVmdFwiXG4gICAgICAgICAgb25DbGljaz17cHJvcHMuaGFuZGxlU3VibWl0U2VhcmNoTWVhbH0+U2VhcmNoPC9idXR0b24+XG48YnIgY2xhc3NOYW1lPVwiY2xlYXJib3RoXCIgLz5cblxuICA8L2Rpdj4pXG59XG5cbndpbmRvdy5TZWFyY2ggPSBTZWFyY2g7XG4iXX0=