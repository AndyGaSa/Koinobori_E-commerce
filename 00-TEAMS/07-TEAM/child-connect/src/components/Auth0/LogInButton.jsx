import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      data-testid="logIn-button-test"
      type="button"
      className="login-button"
      onClick={() => loginWithRedirect({ returnTo: 'http://localhost:3000/dashboard' })}
    >
      Log In
    </button>
  );
}

export default LoginButton;
