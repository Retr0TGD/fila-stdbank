import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TicketPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  }, [navigate]);

  return (
    <div>
      <h1>Retire a Senha</h1>
    </div>
  );
};

export default TicketPage;
