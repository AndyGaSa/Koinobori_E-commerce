import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LogOutButton.css';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      type="button"
      className="log-button"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      LogOut
    </button>
  );
}

export default LogoutButton;
