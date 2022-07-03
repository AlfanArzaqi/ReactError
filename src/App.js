import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar.Js';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="flex justify-between bg-black">
            <div>
              <a href="#"> Logo </a>
            </div>
            <div>
              <a href="#"> About </a>
            </div>
        </div>
      </header>
      <body>
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
