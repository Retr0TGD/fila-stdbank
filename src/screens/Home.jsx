import React, { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [name, setName] = useState('');
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleNextClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      localStorage.setItem('userName', name);
      localStorage.setItem('selectedService', '');
      navigate('/services');
    }, 300)
  };

  return (
    <div className={`container ${fadeOut ? 'fade-out' : ''}`}>
      <h1>Queue Management System</h1>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Insira o Seu Nome"
      />
      <button className="next-button" onClick={handleNextClick}>
        Próximo 
        <FaArrowRight className="arrow-icon" />
      </button>
    </div>
  );
};

export default Home;
