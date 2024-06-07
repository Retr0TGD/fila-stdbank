import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './screens/Home';
import ServiceOptions from './screens/ServiceOptions';
import TicketPage from './screens/TicketPage';
import Login from './screens/authentication/Login';
import Dashboard from './screens/authentication/Dashboard';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<ServiceOptions />} />
          <Route path="/ticket" element={<TicketPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
