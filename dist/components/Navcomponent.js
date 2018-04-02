"use strict";

var Navcomponent = function Navcomponent(props) {
  return React.createElement(
    "div",
    { className: "navlabel" },
    React.createElement(
      "div",
      { className: "nav1", onClick: props.handleClick },
      React.createElement(
        "label",
        { htmlFor: "viewnav" },
        "View"
      )
    ),
    React.createElement(
      "div",
      { className: "nav2", onClick: props.handleClick },
      React.createElement(
        "label",
        { htmlFor: "addrestaurant" },
        "Add Restaurant"
      )
    ),
    React.createElement("div", { className: "clearboth" })
  );
};

window.Navcomponent = Navcomponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL05hdmNvbXBvbmVudC5qc3giXSwibmFtZXMiOlsiTmF2Y29tcG9uZW50IiwicHJvcHMiLCJoYW5kbGVDbGljayIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFTO0FBQzFCLFNBQVE7QUFBQTtBQUFBLE1BQU0sV0FBVSxVQUFoQjtBQUNSO0FBQUE7QUFBQSxRQUFLLFdBQVUsTUFBZixFQUFzQixTQUFTQSxNQUFNQyxXQUFyQztBQUNNO0FBQUE7QUFBQSxVQUFPLFNBQVEsU0FBZjtBQUFBO0FBQUE7QUFETixLQURRO0FBSVY7QUFBQTtBQUFBLFFBQUssV0FBVSxNQUFmLEVBQXNCLFNBQVNELE1BQU1DLFdBQXJDO0FBQ1E7QUFBQTtBQUFBLFVBQU8sU0FBUSxlQUFmO0FBQUE7QUFBQTtBQURSLEtBSlU7QUFPVixpQ0FBSyxXQUFVLFdBQWY7QUFQVSxHQUFSO0FBU0QsQ0FWRDs7QUFZQUMsT0FBT0gsWUFBUCxHQUFzQkEsWUFBdEIiLCJmaWxlIjoiTmF2Y29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIE5hdmNvbXBvbmVudCA9IChwcm9wcyk9PntcbiAgcmV0dXJuICg8ZGl2ICBjbGFzc05hbWU9XCJuYXZsYWJlbFwiPlxuICA8ZGl2IGNsYXNzTmFtZT1cIm5hdjFcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidmlld25hdlwiPlZpZXc8L2xhYmVsPlxuPC9kaXY+XG48ZGl2IGNsYXNzTmFtZT1cIm5hdjJcIiBvbkNsaWNrPXtwcm9wcy5oYW5kbGVDbGlja30+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWRkcmVzdGF1cmFudFwiPkFkZCBSZXN0YXVyYW50PC9sYWJlbD5cbjwvZGl2PlxuPGRpdiBjbGFzc05hbWU9XCJjbGVhcmJvdGhcIj48L2Rpdj5cbiAgPC9kaXY+KVxufVxuXG53aW5kb3cuTmF2Y29tcG9uZW50ID0gTmF2Y29tcG9uZW50O1xuXG5cbiJdfQ==