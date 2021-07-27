/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles.css';
import './Header.css';

export default function Header() {
  return (
    <header>
      <nav>
        <h1>Tour of Heroes</h1>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
        <Link to="/details">Details</Link>

      </nav>
    </header>
  );
}
