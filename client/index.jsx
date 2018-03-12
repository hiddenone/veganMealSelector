// TODO: Render the `App` component to the DOM

ReactDOM.render(
<App />,
  document.getElementById('app')
);


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