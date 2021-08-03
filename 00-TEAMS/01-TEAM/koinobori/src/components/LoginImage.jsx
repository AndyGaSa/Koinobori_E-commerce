/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginImage() {
  const { loginWithRedirect } = useAuth0();

  return (
    <img className="login" onClick={() => loginWithRedirect()} src="https://i.ibb.co/tHp0Kz7/login.png" alt="login" />
  );
}

export default LoginImage;
