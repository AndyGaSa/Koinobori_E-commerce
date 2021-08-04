import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Login.scss';

export default function Login() {
  return (
    <main className="login__main">
      <Link to="comic-list">
        <img className="login__button" src="https://i.ibb.co/khZxvbP/login-button-0000-LOGIN.png" alt="login-button" />
      </Link>

    </main>
  );
}
