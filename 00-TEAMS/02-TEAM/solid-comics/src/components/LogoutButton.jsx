import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button type="button" className="nav-logout" onClick={() => logout({ returnTo: window.location.origin })}>
      <span className="nav-logout__text">LogOut</span>
    </button>
  );
};

export default LogoutButton;
