import React, { useState } from 'react';
import './App.css';
import { FaArrowRight } from 'react-icons/fa';

function App() {
  const [name, setName] = useState('');
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleNextClick = () => {
    console.log("User name: ", name);
  }
  return (
    <div className="App">
      <div className="container">
        <h1>Queue Management System</h1>
        <input type="text" value={name} onChange={handleNameChange} placeholder="Insira o Seu Nome" />
        <button className="next-button" onClick={handleNextClick}>
          Próximo
          <FaArrowRight className="arrow-icon"/>
        </button>
      </div>
    </div>
  );
}

export default App;
