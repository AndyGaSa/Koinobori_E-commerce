import React from 'react';

import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

export default function Login() {
  return (
    <section className="login">
      <LoginButton />
      <LogoutButton />
    </section>
  );
}
