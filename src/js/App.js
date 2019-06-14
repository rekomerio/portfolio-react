import React from 'react';
import Nav from './NavBar';
import logo from '../logo.svg';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Portfolio of Reko Meriö
        </p>
      </header>
    </div>
  );
}

export default App;
