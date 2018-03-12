// //=============== one massive comment Structure =======================================
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <img
//           className="Avatar"
//           src={props.author.avatarUrl}
//           alt={props.author.name}
//         />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64',
//   },
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('root')
// );
// //=================== ONLY THE AVATAR BROKEN OUT ================================================
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />

//   );
// }
// // The Avatar doesn’t need to know that it is being rendered inside a Comment. This is why we have given its prop a more generic name: user rather than author.
// // We recommend naming props from the component’s own point of view rather than the context in which it is being used.
// // We can now simplify Comment a tiny bit:

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <div className="UserInfo">
//         <Avatar user={props.author} />
//         <div className="UserInfo-name">
//           {props.author.name}
//         </div>
//       </div>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }
// //=================== broken down into two sub-structures ========================================
// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Avatar(props) {
//   return (
//     <img
//       className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// //// Unless explained it is not obvious what props.author needs, or in fact that is an object and NOT a string!!, both a  name and  and avatarUrl are needed {name: avatarUrl:}
// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: {
//     name: 'Hello Kitty',
//     avatarUrl: 'http://placekitten.com/g/64/64',
//   },
// };
// ReactDOM.render(
//   <Comment
//     date={comment.date}
//     text={comment.text}
//     author={comment.author}
//   />,
//   document.getElementById('app')
// );
"use strict";
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2NsaWVudC9jb21wb25lbnRzL2NvbW1lbnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJjb21tZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy89PT09PT09PT09PT09PT0gb25lIG1hc3NpdmUgY29tbWVudCBTdHJ1Y3R1cmUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbi8vICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIENvbW1lbnQocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnRcIj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm9cIj5cbi8vICAgICAgICAgPGltZ1xuLy8gICAgICAgICAgIGNsYXNzTmFtZT1cIkF2YXRhclwiXG4vLyAgICAgICAgICAgc3JjPXtwcm9wcy5hdXRob3IuYXZhdGFyVXJsfVxuLy8gICAgICAgICAgIGFsdD17cHJvcHMuYXV0aG9yLm5hbWV9XG4vLyAgICAgICAgIC8+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm8tbmFtZVwiPlxuLy8gICAgICAgICAgIHtwcm9wcy5hdXRob3IubmFtZX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tbWVudC10ZXh0XCI+e3Byb3BzLnRleHR9PC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnQtZGF0ZVwiPlxuLy8gICAgICAgICB7Zm9ybWF0RGF0ZShwcm9wcy5kYXRlKX1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuXG4vLyBjb25zdCBjb21tZW50ID0ge1xuLy8gICBkYXRlOiBuZXcgRGF0ZSgpLFxuLy8gICB0ZXh0OiAnSSBob3BlIHlvdSBlbmpveSBsZWFybmluZyBSZWFjdCEnLFxuLy8gICBhdXRob3I6IHtcbi8vICAgICBuYW1lOiAnSGVsbG8gS2l0dHknLFxuLy8gICAgIGF2YXRhclVybDogJ2h0dHA6Ly9wbGFjZWtpdHRlbi5jb20vZy82NC82NCcsXG4vLyAgIH0sXG4vLyB9O1xuLy8gUmVhY3RET00ucmVuZGVyKFxuLy8gICA8Q29tbWVudFxuLy8gICAgIGRhdGU9e2NvbW1lbnQuZGF0ZX1cbi8vICAgICB0ZXh0PXtjb21tZW50LnRleHR9XG4vLyAgICAgYXV0aG9yPXtjb21tZW50LmF1dGhvcn1cbi8vICAgLz4sXG4vLyAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbi8vICk7XG4vLyAvLz09PT09PT09PT09PT09PT09PT0gT05MWSBUSEUgQVZBVEFSIEJST0tFTiBPVVQgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBmdW5jdGlvbiBBdmF0YXIocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8aW1nIGNsYXNzTmFtZT1cIkF2YXRhclwiXG4vLyAgICAgICBzcmM9e3Byb3BzLnVzZXIuYXZhdGFyVXJsfVxuLy8gICAgICAgYWx0PXtwcm9wcy51c2VyLm5hbWV9XG4vLyAgICAgLz5cblxuLy8gICApO1xuLy8gfVxuLy8gLy8gVGhlIEF2YXRhciBkb2VzbuKAmXQgbmVlZCB0byBrbm93IHRoYXQgaXQgaXMgYmVpbmcgcmVuZGVyZWQgaW5zaWRlIGEgQ29tbWVudC4gVGhpcyBpcyB3aHkgd2UgaGF2ZSBnaXZlbiBpdHMgcHJvcCBhIG1vcmUgZ2VuZXJpYyBuYW1lOiB1c2VyIHJhdGhlciB0aGFuIGF1dGhvci5cbi8vIC8vIFdlIHJlY29tbWVuZCBuYW1pbmcgcHJvcHMgZnJvbSB0aGUgY29tcG9uZW504oCZcyBvd24gcG9pbnQgb2YgdmlldyByYXRoZXIgdGhhbiB0aGUgY29udGV4dCBpbiB3aGljaCBpdCBpcyBiZWluZyB1c2VkLlxuLy8gLy8gV2UgY2FuIG5vdyBzaW1wbGlmeSBDb21tZW50IGEgdGlueSBiaXQ6XG5cbi8vIGZ1bmN0aW9uIENvbW1lbnQocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnRcIj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm9cIj5cbi8vICAgICAgICAgPEF2YXRhciB1c2VyPXtwcm9wcy5hdXRob3J9IC8+XG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm8tbmFtZVwiPlxuLy8gICAgICAgICAgIHtwcm9wcy5hdXRob3IubmFtZX1cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiQ29tbWVudC10ZXh0XCI+XG4vLyAgICAgICAgIHtwcm9wcy50ZXh0fVxuLy8gICAgICAgPC9kaXY+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnQtZGF0ZVwiPlxuLy8gICAgICAgICB7Zm9ybWF0RGF0ZShwcm9wcy5kYXRlKX1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgIDwvZGl2PlxuLy8gICApO1xuLy8gfVxuLy8gLy89PT09PT09PT09PT09PT09PT09IGJyb2tlbiBkb3duIGludG8gdHdvIHN1Yi1zdHJ1Y3R1cmVzID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuLy8gICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbi8vIH1cblxuLy8gZnVuY3Rpb24gQXZhdGFyKHByb3BzKSB7XG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGltZ1xuLy8gICAgICAgY2xhc3NOYW1lPVwiQXZhdGFyXCJcbi8vICAgICAgIHNyYz17cHJvcHMudXNlci5hdmF0YXJVcmx9XG4vLyAgICAgICBhbHQ9e3Byb3BzLnVzZXIubmFtZX1cbi8vICAgICAvPlxuLy8gICApO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBVc2VySW5mbyhwcm9wcykge1xuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm9cIj5cbi8vICAgICAgIDxBdmF0YXIgdXNlcj17cHJvcHMudXNlcn0gLz5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiVXNlckluZm8tbmFtZVwiPntwcm9wcy51c2VyLm5hbWV9PC9kaXY+XG4vLyAgICAgPC9kaXY+XG4vLyAgICk7XG4vLyB9XG5cbi8vIC8vLy8gVW5sZXNzIGV4cGxhaW5lZCBpdCBpcyBub3Qgb2J2aW91cyB3aGF0IHByb3BzLmF1dGhvciBuZWVkcywgb3IgaW4gZmFjdCB0aGF0IGlzIGFuIG9iamVjdCBhbmQgTk9UIGEgc3RyaW5nISEsIGJvdGggYSAgbmFtZSBhbmQgIGFuZCBhdmF0YXJVcmwgYXJlIG5lZWRlZCB7bmFtZTogYXZhdGFyVXJsOn1cbi8vIGZ1bmN0aW9uIENvbW1lbnQocHJvcHMpIHtcbi8vICAgcmV0dXJuIChcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnRcIj5cbi8vICAgICAgIDxVc2VySW5mbyB1c2VyPXtwcm9wcy5hdXRob3J9IC8+XG4vLyAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIkNvbW1lbnQtdGV4dFwiPntwcm9wcy50ZXh0fTwvZGl2PlxuLy8gICAgICAgPGRpdiBjbGFzc05hbWU9XCJDb21tZW50LWRhdGVcIj5cbi8vICAgICAgICAge2Zvcm1hdERhdGUocHJvcHMuZGF0ZSl9XG4vLyAgICAgICA8L2Rpdj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuLy8gY29uc3QgY29tbWVudCA9IHtcbi8vICAgZGF0ZTogbmV3IERhdGUoKSxcbi8vICAgdGV4dDogJ0kgaG9wZSB5b3UgZW5qb3kgbGVhcm5pbmcgUmVhY3QhJyxcbi8vICAgYXV0aG9yOiB7XG4vLyAgICAgbmFtZTogJ0hlbGxvIEtpdHR5Jyxcbi8vICAgICBhdmF0YXJVcmw6ICdodHRwOi8vcGxhY2VraXR0ZW4uY29tL2cvNjQvNjQnLFxuLy8gICB9LFxuLy8gfTtcbi8vIFJlYWN0RE9NLnJlbmRlcihcbi8vICAgPENvbW1lbnRcbi8vICAgICBkYXRlPXtjb21tZW50LmRhdGV9XG4vLyAgICAgdGV4dD17Y29tbWVudC50ZXh0fVxuLy8gICAgIGF1dGhvcj17Y29tbWVudC5hdXRob3J9XG4vLyAgIC8+LFxuLy8gICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJylcbi8vICk7Il19