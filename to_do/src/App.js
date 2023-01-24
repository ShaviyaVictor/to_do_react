// import logo from './logo.svg';
// import './App.css';

import { PureComponent } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// PureComponent
// function App() {
//   return (
//     <h1>Hello World!</h1>
//   );
// }

// FunctionalComponent
// let App = () => {
//   return(
//     <div className="App-header">
//       <h1>
//         Hello World!
//       </h1>
//     </div>
//   )
// }

// PureComponent with Time
function App(props) {

  const currentDate = new Date();

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        The time right now is: <code>{currentDate.toLocaleTimeString()}</code>
      </h2>
    </div>
  )

}

export default App;
