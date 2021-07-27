/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <h1>Tour of Heroes</h1>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/heroes">Heroes</Link>
    </header>
  );
}
