import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import './LoginButton.scss';

const loginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return <button className="button-login" type="button" onClick={() => loginWithRedirect()}>Log in</button>;
};

export default loginButton;
