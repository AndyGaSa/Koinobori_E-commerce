/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutImage() {
  const { logout } = useAuth0();

  return (

    <img className="login" onClick={() => logout()} src="https://i.ibb.co/KN3zKZY/logout.png" alt="logout" />
  );
}

export default LogoutImage;
