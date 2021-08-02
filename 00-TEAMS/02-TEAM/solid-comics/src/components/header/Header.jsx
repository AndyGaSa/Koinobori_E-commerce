import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <Link to="profile">Profile</Link>
      <Link to="comic-list">Comics</Link>
      <Link to="battle">Battle</Link>
      <Link to="log-out">LogOut</Link>
    </header>
  );
}
