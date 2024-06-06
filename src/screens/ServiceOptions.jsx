import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceOptions.css';

const ServiceOptions = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('');

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    localStorage.setItem('selectedService', service);

    const userName = localStorage.getItem('userName');

    console.log('Usuário: ', userName);
    console.log('Service: ', selectedService);
    console.log('Queue Position: 1');
    
    navigate('/ticket');

  };    

  return (
    <div className="service-options">
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
