import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ServiceOptions from './screens/ServiceOptions';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceOptions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
