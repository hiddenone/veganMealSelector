"use strict";

// TODO: Render the `App` component to the DOM

var getRestaurantDummyData = function getRestaurantDummyData() {
  return [{ name: "McDonalds", meal: "salad", ingredients: ["lettuce"] }, { name: "Vege-grill", meal: "mushroom burgers", ingredients: ["lettuce", "mushrooms", "bread"] }, { name: "Hong Kong Charlies", meal: "pad thai", ingredients: ["lettuce", "mushrooms", "rice"] }, { name: "Vegetarian House", meal: "Pho Noodle Soupt", ingredients: ["lettuce", "mushrooms", "Pho", "bamboo-shoots"], crumbs: ["IT CHANGED"], notinthemodel: ["testing will not go into db"] }];
};

var fetchRestaurantData = function fetchRestaurantData(callback) {
  fetch('restaurants').then(function (response) {
    return response.json();
  }).then(function (myJson) {
    callback(myJson);
    console.log("STUFF FROM fetchRestaurantData:", myJson);
  });
};

ReactDOM.render(React.createElement(App, { getAllRestaurants: getRestaurantDummyData, fetchAllRestaurants: fetchRestaurantData }), document.getElementById('app'));

//// ======= 3 ===== Creating components
// FUNCTIONAL COMPONENT-----
/*function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}*/
//EQUIVALENT CLASS COMPONENT
// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }


// function App() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('app')
// );


//===== 2 =====// NOTE: CREATE FROM REACT TUTORIAL, NEEDED TO CONVERT ELEMENT TO A FUNCTION
// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez'
// };

// const AnElement = ()=> (
//   <h1>
//     Hello, {formatName(user)}!
//   </h1>
// );

// ReactDOM.render(
//   <AnElement />,
//   document.getElementById('app')
// );
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiZ2V0UmVzdGF1cmFudER1bW15RGF0YSIsIm5hbWUiLCJtZWFsIiwiaW5ncmVkaWVudHMiLCJjcnVtYnMiLCJub3RpbnRoZW1vZGVsIiwiZmV0Y2hSZXN0YXVyYW50RGF0YSIsImNhbGxiYWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwibXlKc29uIiwiY29uc29sZSIsImxvZyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxJQUFJQSx5QkFBeUIsU0FBekJBLHNCQUF5QixHQUFVO0FBQ3BDLFNBQWEsQ0FDSixFQUFDQyxNQUFLLFdBQU4sRUFBa0JDLE1BQUssT0FBdkIsRUFBK0JDLGFBQVksQ0FBQyxTQUFELENBQTNDLEVBREksRUFFSixFQUFDRixNQUFLLFlBQU4sRUFBbUJDLE1BQUssa0JBQXhCLEVBQTJDQyxhQUFZLENBQUMsU0FBRCxFQUFXLFdBQVgsRUFBdUIsT0FBdkIsQ0FBdkQsRUFGSSxFQUdKLEVBQUNGLE1BQU0sb0JBQVAsRUFBNkJDLE1BQUssVUFBbEMsRUFBOENDLGFBQVksQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixNQUF6QixDQUExRCxFQUhJLEVBSVosRUFBQ0YsTUFBTSxrQkFBUCxFQUEyQkMsTUFBSyxrQkFBaEMsRUFBb0RDLGFBQVksQ0FBQyxTQUFELEVBQVksV0FBWixFQUF5QixLQUF6QixFQUErQixlQUEvQixDQUFoRSxFQUFnSEMsUUFBTyxDQUFDLFlBQUQsQ0FBdkgsRUFBc0lDLGVBQWMsQ0FBQyw2QkFBRCxDQUFwSixFQUpZLENBQWI7QUFLRixDQU5EOztBQVFBLElBQUlDLHNCQUFzQixTQUF0QkEsbUJBQXNCLENBQVNDLFFBQVQsRUFBa0I7QUFDMUNDLFFBQU0sYUFBTixFQUNDQyxJQURELENBQ00sVUFBU0MsUUFBVCxFQUFtQjtBQUN2QixXQUFPQSxTQUFTQyxJQUFULEVBQVA7QUFDRCxHQUhELEVBSUNGLElBSkQsQ0FJTSxVQUFTRyxNQUFULEVBQWlCO0FBQ3JCTCxhQUFTSyxNQUFUO0FBQ0FDLFlBQVFDLEdBQVIsQ0FBWSxpQ0FBWixFQUE4Q0YsTUFBOUM7QUFDRCxHQVBEO0FBUUQsQ0FURDs7QUFZQUcsU0FBU0MsTUFBVCxDQUNBLG9CQUFDLEdBQUQsSUFBSyxtQkFBbUJoQixzQkFBeEIsRUFBZ0QscUJBQXFCTSxtQkFBckUsR0FEQSxFQUVFVyxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBRkY7O0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFJlbmRlciB0aGUgYEFwcGAgY29tcG9uZW50IHRvIHRoZSBET01cblxudmFyIGdldFJlc3RhdXJhbnREdW1teURhdGEgPSBmdW5jdGlvbigpe1xuICAgcmV0dXJuICAgICAgIFtcbiAgICAgICAgICAgIHtuYW1lOlwiTWNEb25hbGRzXCIsbWVhbDpcInNhbGFkXCIsaW5ncmVkaWVudHM6W1wibGV0dHVjZVwiXX0sXG4gICAgICAgICAgICB7bmFtZTpcIlZlZ2UtZ3JpbGxcIixtZWFsOlwibXVzaHJvb20gYnVyZ2Vyc1wiLGluZ3JlZGllbnRzOltcImxldHR1Y2VcIixcIm11c2hyb29tc1wiLFwiYnJlYWRcIl19LFxuICAgICAgICAgICAge25hbWU6IFwiSG9uZyBLb25nIENoYXJsaWVzXCIsIG1lYWw6XCJwYWQgdGhhaVwiLCBpbmdyZWRpZW50czpbXCJsZXR0dWNlXCIsIFwibXVzaHJvb21zXCIsIFwicmljZVwiXX0sXG4gICAge25hbWU6IFwiVmVnZXRhcmlhbiBIb3VzZVwiLCBtZWFsOlwiUGhvIE5vb2RsZSBTb3VwdFwiLCBpbmdyZWRpZW50czpbXCJsZXR0dWNlXCIsIFwibXVzaHJvb21zXCIsIFwiUGhvXCIsXCJiYW1ib28tc2hvb3RzXCJdLGNydW1iczpbXCJJVCBDSEFOR0VEXCJdLG5vdGludGhlbW9kZWw6W1widGVzdGluZyB3aWxsIG5vdCBnbyBpbnRvIGRiXCJdfV07XG59XG5cbnZhciBmZXRjaFJlc3RhdXJhbnREYXRhID0gZnVuY3Rpb24oY2FsbGJhY2spe1xuICBmZXRjaCgncmVzdGF1cmFudHMnKVxuICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gIH0pXG4gIC50aGVuKGZ1bmN0aW9uKG15SnNvbikge1xuICAgIGNhbGxiYWNrKG15SnNvbik7XG4gICAgY29uc29sZS5sb2coXCJTVFVGRiBGUk9NIGZldGNoUmVzdGF1cmFudERhdGE6XCIsbXlKc29uKTtcbiAgfSk7XG59XG5cblxuUmVhY3RET00ucmVuZGVyKFxuPEFwcCBnZXRBbGxSZXN0YXVyYW50cz17Z2V0UmVzdGF1cmFudER1bW15RGF0YX0gZmV0Y2hBbGxSZXN0YXVyYW50cz17ZmV0Y2hSZXN0YXVyYW50RGF0YX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuKTtcblxuXG4vLy8vID09PT09PT0gMyA9PT09PSBDcmVhdGluZyBjb21wb25lbnRzXG4vLyBGVU5DVElPTkFMIENPTVBPTkVOVC0tLS0tXG4vKmZ1bmN0aW9uIFdlbGNvbWUocHJvcHMpIHtcbiAgcmV0dXJuIDxoMT5IZWxsbywge3Byb3BzLm5hbWV9PC9oMT47XG59Ki9cbi8vRVFVSVZBTEVOVCBDTEFTUyBDT01QT05FTlRcbi8vIGNsYXNzIFdlbGNvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuLy8gICByZW5kZXIoKSB7XG4vLyAgICAgcmV0dXJuIDxoMT5IZWxsbywge3RoaXMucHJvcHMubmFtZX08L2gxPjtcbi8vICAgfVxuLy8gfVxuXG5cblxuLy8gZnVuY3Rpb24gQXBwKCkge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8V2VsY29tZSBuYW1lPVwiU2FyYVwiIC8+XG4vLyAgICAgICA8V2VsY29tZSBuYW1lPVwiQ2FoYWxcIiAvPlxuLy8gICAgICAgPFdlbGNvbWUgbmFtZT1cIkVkaXRlXCIgLz5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICA8QXBwIC8+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbi8vICk7XG5cblxuXG4vLz09PT09IDIgPT09PT0vLyBOT1RFOiBDUkVBVEUgRlJPTSBSRUFDVCBUVVRPUklBTCwgTkVFREVEIFRPIENPTlZFUlQgRUxFTUVOVCBUTyBBIEZVTkNUSU9OXG4vLyBmdW5jdGlvbiBmb3JtYXROYW1lKHVzZXIpIHtcbi8vICAgcmV0dXJuIHVzZXIuZmlyc3ROYW1lICsgJyAnICsgdXNlci5sYXN0TmFtZTtcbi8vIH1cblxuLy8gY29uc3QgdXNlciA9IHtcbi8vICAgZmlyc3ROYW1lOiAnSGFycGVyJyxcbi8vICAgbGFzdE5hbWU6ICdQZXJleidcbi8vIH07XG5cbi8vIGNvbnN0IEFuRWxlbWVudCA9ICgpPT4gKFxuLy8gICA8aDE+XG4vLyAgICAgSGVsbG8sIHtmb3JtYXROYW1lKHVzZXIpfSFcbi8vICAgPC9oMT5cbi8vICk7XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPEFuRWxlbWVudCAvPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4vLyApOyJdfQ==