import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const ServiceOptions = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleServiceSelect = (service) => {

    const userName = localStorage.getItem('userName');

    const queue = JSON.parse(localStorage.getItem('queue')) || [];

    const queuePosition = queue.length+1;

    const newClient = {
      name: userName,
      service,
      position: queuePosition
    };

    queue.push(newClient);

    localStorage.setItem('queue', JSON.stringify(queue));

    console.log('Usuário: ', userName);
    console.log('Serviço: ', service);
    console.log('Posição na Fila: ', queuePosition);
    
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
