import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLoginClick = () => {
        if(username === 'admin' && password === '$ucce$$1!') {
            localStorage.setItem('isAdminAuthenticated', 'true');
            navigate('/dashboard');
        } else {
            document.write('Invalid username or password');
        }
    };

    return (
        <div className="container">
            <h1>Login</h1>
            <input type="text" value={username} onChange={handleUsernameChange} placeholder='username' />
            <input type="password" value={password} onChange={handlePasswordChange} placeholder='password' />
            <button className="next-button" onClick={handleLoginClick}>Login</button>
        </div>
    )
}

export default Login;