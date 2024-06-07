import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe';
import './Dashboard.css';

const Dashboard = () => {
  const [queue, setQueue] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const isAdminAuthenticated = localStorage.getItem('isAdminAuthenticated');
    if (isAdminAuthenticated !== 'true') {
      navigate('/login');
    }

    const queueData = JSON.parse(localStorage.getItem('queue')) || [];
    setQueue(queueData);
  }, [navigate]);

  const getCounter = (service) => {
    const serviceCounters = {
      'NETPLUS': 1,
      'LEVANTAMENTO': 2,
      'DEPÓSITO': 3,
      'MONEYGRAM': 4,
      'QUIQMOLA': 5,
      'INFORMAÇÕES': 6,
      'RAO': 7,
    };
    return serviceCounters[service] || 'Unknown';
  };

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="dashboard-content">
        <div className="left-block">
          <div className="upper-block">
            <h2>Próxima Senha</h2>
            {queue.length > 0 ? (
              <div>
                <p>Serviço: {queue[0].service}</p>
                <p>Balcão: {getCounter(queue[0].service)}</p>
                <p>Posicão na fila: 1</p>
              </div>
            ) : (
              <p>Nenhum cliente na fila</p>
            )}
          </div>
          <div className="lower-block">
            <h2>Publicidade</h2>
            <Iframe url="https://www.youtube.com/watch?v=ESZU5j-NHpA" width="100%" height="200px" id="myId" className="myClassname" display="initial" position="relative"/>
          </div>
        </div>
        <div className="right-block">
          <h2>Standard Bank</h2>
          <ul>
            {queue.map((client, index) => (
              <li key={index}>
                {client.name} - Serviço: {client.service} - Balcão: {getCounter(client.service)} - Posicão na fila: {index + 1}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
