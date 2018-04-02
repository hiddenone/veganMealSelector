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
      React.createElement("input", { id: "name", type: "text", name: "name", value: props.currentsearchrestaurant, onChange: props.handleOnChangeSearchRestaurant })
    ),
    React.createElement(
      "div",
      { className: "group2" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Meal"
      ),
      React.createElement("input", { id: "email", type: "text", name: "email", value: props.currentsearchmeal, onChange: props.handleOnChangeSearchMeal })
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

window.SearchForRestaurantMeal = SearchForRestaurantMeal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL1NlYXJjaEZvclJlc3RhdXJhbnRNZWFsLmpzeCJdLCJuYW1lcyI6WyJTZWFyY2hGb3JSZXN0YXVyYW50TWVhbCIsInByb3BzIiwiY3VycmVudHNlYXJjaHJlc3RhdXJhbnQiLCJoYW5kbGVPbkNoYW5nZVNlYXJjaFJlc3RhdXJhbnQiLCJjdXJyZW50c2VhcmNobWVhbCIsImhhbmRsZU9uQ2hhbmdlU2VhcmNoTWVhbCIsImhhbmRsZVN1Ym1pdFNlYXJjaE1lYWwiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsMEJBQTBCLFNBQTFCQSx1QkFBMEIsQ0FBQ0MsS0FBRCxFQUFTO0FBQ3JDLFNBQVE7QUFBQTtBQUFBO0FBQ1I7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQ007QUFBQTtBQUFBLFVBQU8sU0FBUSxNQUFmO0FBQUE7QUFBQSxPQUROO0FBRU0scUNBQU8sSUFBRyxNQUFWLEVBQWlCLE1BQUssTUFBdEIsRUFBOEIsTUFBSyxNQUFuQyxFQUEwQyxPQUFPQSxNQUFNQyx1QkFBdkQsRUFBZ0YsVUFBVUQsTUFBTUUsOEJBQWhHO0FBRk4sS0FEUTtBQUtWO0FBQUE7QUFBQSxRQUFLLFdBQVUsUUFBZjtBQUNRO0FBQUE7QUFBQSxVQUFPLFNBQVEsT0FBZjtBQUFBO0FBQUEsT0FEUjtBQUVRLHFDQUFPLElBQUcsT0FBVixFQUFrQixNQUFLLE1BQXZCLEVBQStCLE1BQUssT0FBcEMsRUFBNEMsT0FBT0YsTUFBTUcsaUJBQXpELEVBQTRFLFVBQVVILE1BQU1JLHdCQUE1RjtBQUZSLEtBTFU7QUFTVjtBQUFBO0FBQUE7QUFDVSxtQkFBVSx5QkFEcEI7QUFFVSxpQkFBU0osTUFBTUssc0JBRnpCO0FBQUE7QUFBQSxLQVRVO0FBWVYsZ0NBQUksV0FBVSxXQUFkO0FBWlUsR0FBUjtBQWVELENBaEJEOztBQWtCQUMsT0FBT1AsdUJBQVAsR0FBaUNBLHVCQUFqQyIsImZpbGUiOiJTZWFyY2hGb3JSZXN0YXVyYW50TWVhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBTZWFyY2hGb3JSZXN0YXVyYW50TWVhbCA9IChwcm9wcyk9PntcbiAgcmV0dXJuICg8ZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwMVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5SZXN0YXVyYW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3Byb3BzLmN1cnJlbnRzZWFyY2hyZXN0YXVyYW50fSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlT25DaGFuZ2VTZWFyY2hSZXN0YXVyYW50fS8+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5NZWFsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiICBuYW1lPVwiZW1haWxcIiB2YWx1ZT17cHJvcHMuY3VycmVudHNlYXJjaG1lYWx9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVPbkNoYW5nZVNlYXJjaE1lYWx9Lz5cbjwvZGl2PlxuPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXRTZWFyY2hNZWFsfT5TZWFyY2g8L2J1dHRvbj5cbjxiciBjbGFzc05hbWU9XCJjbGVhcmJvdGhcIiAvPlxuXG4gIDwvZGl2Pilcbn1cblxud2luZG93LlNlYXJjaEZvclJlc3RhdXJhbnRNZWFsID0gU2VhcmNoRm9yUmVzdGF1cmFudE1lYWw7XG4iXX0=