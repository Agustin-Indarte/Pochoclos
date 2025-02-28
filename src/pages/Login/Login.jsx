import React from 'react';
import { LoginForm } from '../../components';
import './Login.css'; 

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-content">
                <img src="/logo-pochoclos.png" alt="Logo" className="logo" />
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;


