import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button type="button" onClick={() => loginWithRedirect()}>
      <img className="login__button" src="https://i.ibb.co/khZxvbP/login-button-0000-LOGIN.png" alt="login-button" />
    </button>
  );
};

export default LoginButton;
