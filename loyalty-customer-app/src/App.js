import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Customer from '../src/components/Customer';
import About from '../src/components/About'
import Navigation from '../src/components/Navigation'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
          <Routes>
            <Route path="/customer" element={<Customer loyaltyid="2705112545587" />} />
            <Route path="/about" element={<About version="1.0.0.0" />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
