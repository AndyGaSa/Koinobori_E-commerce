import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function LoginButton() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <>
      <button
        type="button"
        onClick={() => loginWithRedirect()}
      >
        Log In
      </button>
      <p>{isAuthenticated}</p>
    </>
  );
}

export default LoginButton;
