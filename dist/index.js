'use strict';

// TODO: Render the `App` component to the DOM

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NsaWVudC9pbmRleC5qc3giXSwibmFtZXMiOlsiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBQSxTQUFTQyxNQUFULENBQ0Esb0JBQUMsR0FBRCxPQURBLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRjs7QUFNQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogUmVuZGVyIHRoZSBgQXBwYCBjb21wb25lbnQgdG8gdGhlIERPTVxuXG5SZWFjdERPTS5yZW5kZXIoXG48QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbik7XG5cblxuLy8vLyA9PT09PT09IDMgPT09PT0gQ3JlYXRpbmcgY29tcG9uZW50c1xuLy8gRlVOQ1RJT05BTCBDT01QT05FTlQtLS0tLVxuLypmdW5jdGlvbiBXZWxjb21lKHByb3BzKSB7XG4gIHJldHVybiA8aDE+SGVsbG8sIHtwcm9wcy5uYW1lfTwvaDE+O1xufSovXG4vL0VRVUlWQUxFTlQgQ0xBU1MgQ09NUE9ORU5UXG4vLyBjbGFzcyBXZWxjb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbi8vICAgcmVuZGVyKCkge1xuLy8gICAgIHJldHVybiA8aDE+SGVsbG8sIHt0aGlzLnByb3BzLm5hbWV9PC9oMT47XG4vLyAgIH1cbi8vIH1cblxuXG5cbi8vIGZ1bmN0aW9uIEFwcCgpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2PlxuLy8gICAgICAgPFdlbGNvbWUgbmFtZT1cIlNhcmFcIiAvPlxuLy8gICAgICAgPFdlbGNvbWUgbmFtZT1cIkNhaGFsXCIgLz5cbi8vICAgICAgIDxXZWxjb21lIG5hbWU9XCJFZGl0ZVwiIC8+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPEFwcCAvPixcbi8vICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXG4vLyApO1xuXG5cblxuLy89PT09PSAyID09PT09Ly8gTk9URTogQ1JFQVRFIEZST00gUkVBQ1QgVFVUT1JJQUwsIE5FRURFRCBUTyBDT05WRVJUIEVMRU1FTlQgVE8gQSBGVU5DVElPTlxuLy8gZnVuY3Rpb24gZm9ybWF0TmFtZSh1c2VyKSB7XG4vLyAgIHJldHVybiB1c2VyLmZpcnN0TmFtZSArICcgJyArIHVzZXIubGFzdE5hbWU7XG4vLyB9XG5cbi8vIGNvbnN0IHVzZXIgPSB7XG4vLyAgIGZpcnN0TmFtZTogJ0hhcnBlcicsXG4vLyAgIGxhc3ROYW1lOiAnUGVyZXonXG4vLyB9O1xuXG4vLyBjb25zdCBBbkVsZW1lbnQgPSAoKT0+IChcbi8vICAgPGgxPlxuLy8gICAgIEhlbGxvLCB7Zm9ybWF0TmFtZSh1c2VyKX0hXG4vLyAgIDwvaDE+XG4vLyApO1xuXG4vLyBSZWFjdERPTS5yZW5kZXIoXG4vLyAgIDxBbkVsZW1lbnQgLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxuLy8gKTsiXX0=