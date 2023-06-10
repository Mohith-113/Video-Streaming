// import logo from './logo.svg';
// import './App.css';
// import './Components/Slider'

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

import React from 'react'
import Slider from './Components/Slider';


export default function App() {
  return (
    <div>
      <Slider/>
      <h1>Mohith Anabathula</h1>
    </div>
  )
}

