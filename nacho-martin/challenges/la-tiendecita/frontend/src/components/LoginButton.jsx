import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import('../styles/logIn.scss');

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();

  return <button className="login__button" type="button" onClick={() => loginWithRedirect()}>Log In</button>;
}
