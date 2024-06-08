import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Iframe from 'react-iframe';
import StandardBankLogo from '../../assets/stdbanklogo.jpg';
import '../../App.css';

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

    const handleStorageChange = (event) => {
      if(event.key === 'queue') {
        const updateQueue = JSON.parse(event.newValue) || [];
        setQueue(updateQueue);
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
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
      <div className="dashboard-content">
        <div className="left-block">
          <div className="upper-block">
            <h2>Próxima Senha</h2>
            {queue.length > 0 ? (
              <div>
                <p>Serviço: {queue[0].service}</p>
                <p>Balcão: {getCounter(queue[0].service)}</p>
                <p>Senha: {queue[0].ticketCode}</p>
              </div>
            ) : (
              <p>Nenhum cliente na fila</p>
            )}
          </div>
          <div className="lower-block">
            <h2>Publicidade</h2>
            <Iframe src="https://www.youtube.com/embed/KaMpT4pJI8k?si=PwvR4zbwYX9zs2oc" title="Publicidade" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen />
          </div>
        </div>
        <div className="right-block">
          <img src={StandardBankLogo} alt="Standard Bank" className="std-bank-logo" />
          <table>
            <thead>
              <tr>
                <th>Serviço</th>
                <th>Balcão</th>
                <th>Senha</th>
              </tr>
            </thead>
            <tbody>
              {queue.map((client, index) => (
                <tr key={index}>
                  <td>{client.service}</td>
                  <td>{getCounter(client.service)}</td>
                  <td>{client.ticketCode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
