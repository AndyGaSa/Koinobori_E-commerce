import React from 'react';
import { useSelector } from 'react-redux';
import LoginBtn from './loginBtn';
import LogoutBtn from './logoutBtn';

export default function Header() {
  const islogged = useSelector((store) => store.user);
  return (
    <header>
      <h1>header</h1>
      {islogged ? <LogoutBtn /> : <LoginBtn />}

    </header>
  );
}
