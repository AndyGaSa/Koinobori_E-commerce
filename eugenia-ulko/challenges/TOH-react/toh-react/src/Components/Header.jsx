import React from 'react';
import './Header.css';
import '../App.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <h2>Tour of Heroes</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/details">Details</Link>
      </nav>
    </header>
  );
}
