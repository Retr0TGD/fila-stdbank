import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNextClick = () => {
    localStorage.setItem('userName', name);
    navigate('/services');
  };

  return (
    <div className="container">
      <h1>Queue Management System</h1>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter your name"
      />
      <button className="next-button" onClick={handleNextClick}>
        Próximo <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Home;
