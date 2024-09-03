import logo from './logo.svg';
import './App.css';
import React from 'react';
   
  import Message from './Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
        <div className="App">
         <h1>Welcome to My App</h1>
         <Message text="Hello, this is a message!" />
       </div>
      </header>
    </div>
  );
}

export default App;
