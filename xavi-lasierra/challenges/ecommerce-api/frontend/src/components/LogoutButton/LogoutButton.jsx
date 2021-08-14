import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './logoutButton.scss';

function LogoutButton() {
  const { logout } = useAuth0();

  return (
    <button className="logout-button" type="button" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
}

export default LogoutButton;
