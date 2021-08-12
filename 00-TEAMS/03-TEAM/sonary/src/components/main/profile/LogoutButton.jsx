import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button
      data-testid="logout"
      className="logout"
      type="button"
      onClick={() => logout()}
    >
      Log out
    </button>
  );
}

export default LogoutButton;
