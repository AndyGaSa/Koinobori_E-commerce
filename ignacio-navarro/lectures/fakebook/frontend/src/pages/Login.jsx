import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export default function Login() {
  const { loginWithRedirect } = useAuth0();
  return (
    <section className="login__container">
      {/* <input type="text" name="username" id="input-username" placeholder="Username" />
      <input type="text" name="password" id="input-password" placeholder="Password" /> */}
      <button type="button" onClick={() => loginWithRedirect()}>login</button>
    </section>
  );
}
