import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceOptions.css';

const ServiceOptions = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleServiceSelect = (service) => {
    localStorage.setItem('selectedService', service);

    const userName = localStorage.getItem('userName');
    let queuePosition = parseInt(localStorage.getItem('queuePosition'), 10)

    console.log('Usuário: ', userName);
    console.log('Serviço: ', service);
    console.log('Posição na Fila: ', queuePosition);

    localStorage.setItem('queuePosition', queuePosition+1)
    
    setFadeOut(true);
    setTimeout(() => {
      navigate('/ticket');
    }, 300);

  };    

  return (
    <div className={`service-options ${fadeOut ? 'fade-out' : ''}`}>
      <h1>Selecione o Serviço</h1>
      <ul>
        <li onClick={() => handleServiceSelect('NETPLUS')}>NETPLUS</li>
        <li onClick={() => handleServiceSelect('LEVANTAMENTO')}>LEVANTAMENTO</li>
        <li onClick={() => handleServiceSelect('DEPÓSITO')}>DEPÓSITO</li>
        <li onClick={() => handleServiceSelect('MONEYGRAM')}>MONEYGRAM</li>
        <li onClick={() => handleServiceSelect('QUIQMOLA')}>QUIQMOLA</li>
        <li onClick={() => handleServiceSelect('INFORMAÇÕES')}>INFORMAÇÕES</li>
        <li onClick={() => handleServiceSelect('RAO')}>RAO</li>
      </ul>
    </div>
  );
};

export default ServiceOptions;
