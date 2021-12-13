import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Customer from '../src/components/Customer';
import About from '../src/components/About'


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
          Learn React!
        </a>
        <BrowserRouter>
          <Routes>
            <Route path="/customer" element={Customer()} />
            <Route path="/about" element={About()} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
