"use strict";

var AddRestaurantMeal = function AddRestaurantMeal(props) {
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
      React.createElement("input", { id: "name", type: "text", name: "name", value: props.currentrestaurant, onChange: props.handleOnChangeRestaurant })
    ),
    React.createElement(
      "div",
      { className: "group2" },
      React.createElement(
        "label",
        { htmlFor: "email" },
        "Meal"
      ),
      React.createElement("input", { id: "email", type: "text", name: "email", value: props.currentmeal, onChange: props.handleOnChangeMeal })
    ),
    React.createElement(
      "button",
      {
        className: "btn btn-link float-left",
        onClick: props.handleSubmit },
      "Add"
    ),
    React.createElement("br", { className: "clearboth" })
  );
};

window.AddRestaurantMeal = AddRestaurantMeal;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL0FkZFJlc3RhdXJhbnRNZWFsLmpzeCJdLCJuYW1lcyI6WyJBZGRSZXN0YXVyYW50TWVhbCIsInByb3BzIiwiY3VycmVudHJlc3RhdXJhbnQiLCJoYW5kbGVPbkNoYW5nZVJlc3RhdXJhbnQiLCJjdXJyZW50bWVhbCIsImhhbmRsZU9uQ2hhbmdlTWVhbCIsImhhbmRsZVN1Ym1pdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxvQkFBb0IsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVM7QUFDL0IsU0FBUTtBQUFBO0FBQUE7QUFDUjtBQUFBO0FBQUEsUUFBSyxXQUFVLFFBQWY7QUFDTTtBQUFBO0FBQUEsVUFBTyxTQUFRLE1BQWY7QUFBQTtBQUFBLE9BRE47QUFFTSxxQ0FBTyxJQUFHLE1BQVYsRUFBaUIsTUFBSyxNQUF0QixFQUE4QixNQUFLLE1BQW5DLEVBQTBDLE9BQU9BLE1BQU1DLGlCQUF2RCxFQUEwRSxVQUFVRCxNQUFNRSx3QkFBMUY7QUFGTixLQURRO0FBS1Y7QUFBQTtBQUFBLFFBQUssV0FBVSxRQUFmO0FBQ1E7QUFBQTtBQUFBLFVBQU8sU0FBUSxPQUFmO0FBQUE7QUFBQSxPQURSO0FBRVEscUNBQU8sSUFBRyxPQUFWLEVBQWtCLE1BQUssTUFBdkIsRUFBK0IsTUFBSyxPQUFwQyxFQUE0QyxPQUFPRixNQUFNRyxXQUF6RCxFQUFzRSxVQUFVSCxNQUFNSSxrQkFBdEY7QUFGUixLQUxVO0FBU1Y7QUFBQTtBQUFBO0FBQ1UsbUJBQVUseUJBRHBCO0FBRVUsaUJBQVNKLE1BQU1LLFlBRnpCO0FBQUE7QUFBQSxLQVRVO0FBWVYsZ0NBQUksV0FBVSxXQUFkO0FBWlUsR0FBUjtBQWVELENBaEJEOztBQWtCQUMsT0FBT1AsaUJBQVAsR0FBMkJBLGlCQUEzQiIsImZpbGUiOiJBZGRSZXN0YXVyYW50TWVhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBBZGRSZXN0YXVyYW50TWVhbCA9IChwcm9wcyk9PntcbiAgcmV0dXJuICg8ZGl2PlxuICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwMVwiPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5SZXN0YXVyYW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHR5cGU9XCJ0ZXh0XCIgIG5hbWU9XCJuYW1lXCIgdmFsdWU9e3Byb3BzLmN1cnJlbnRyZXN0YXVyYW50fSBvbkNoYW5nZT17cHJvcHMuaGFuZGxlT25DaGFuZ2VSZXN0YXVyYW50fS8+XG48L2Rpdj5cbjxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAyXCI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIj5NZWFsPC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiZW1haWxcIiB0eXBlPVwidGV4dFwiICBuYW1lPVwiZW1haWxcIiB2YWx1ZT17cHJvcHMuY3VycmVudG1lYWx9IG9uQ2hhbmdlPXtwcm9wcy5oYW5kbGVPbkNoYW5nZU1lYWx9Lz5cbjwvZGl2PlxuPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBmbG9hdC1sZWZ0XCJcbiAgICAgICAgICBvbkNsaWNrPXtwcm9wcy5oYW5kbGVTdWJtaXR9PkFkZDwvYnV0dG9uPlxuPGJyIGNsYXNzTmFtZT1cImNsZWFyYm90aFwiIC8+XG5cbiAgPC9kaXY+KVxufVxuXG53aW5kb3cuQWRkUmVzdGF1cmFudE1lYWwgPSBBZGRSZXN0YXVyYW50TWVhbDtcblxuXG4iXX0=