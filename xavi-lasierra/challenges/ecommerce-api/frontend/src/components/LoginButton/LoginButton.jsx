import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './loginButton.scss';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button data-testid="login-button" className="login-button" type="button" onClick={() => loginWithRedirect()}>Login</button>
  );
}

export default LoginButton;
