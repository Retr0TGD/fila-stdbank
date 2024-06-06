import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ServiceOptions from './screens/ServiceOptions';
import TicketPage from './screens/TicketPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServiceOptions />} />
          <Route path="/ticket" element={<TicketPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
