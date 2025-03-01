import React from 'react';
import { LoginForm } from '../../components';
import './Login.css'; 

const Login = () => {
    return (
        <div className="login-page">
            <div className="login-content">
                <img src="public\Logo-Pochoclos.png" alt="Logo" className="logo" />
                <LoginForm/>
            </div>
        </div>
    );
};

export default Login;


