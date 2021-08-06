import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../../components/LogoutButton/LogoutButton';
import LoginButton from '../../components/LoginButton';

export default function Login() {
  const { isAuthenticated } = useAuth0();
  return (
    <header>
      <h1>Login</h1>
      { isAuthenticated
        ? <LogoutButton />
        : <LoginButton />}
      <hr />
    </header>
  );
}
