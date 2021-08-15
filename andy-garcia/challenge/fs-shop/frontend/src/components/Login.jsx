import React from 'react';
import LoginButton from './LoginButton';
import './Login.css';

function Login() {
  return (
    <div className="Login">
      <div>
        <h1>HEY!</h1>
        <h2>LOOKS THAT YOU ARE NOT LOGGED IN...</h2>
        <h3>You are missing all of it...</h3>
        <LoginButton />
      </div>
    </div>
  );
}

export default Login;
