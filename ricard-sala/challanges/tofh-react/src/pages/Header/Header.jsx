/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import '../../Styles/Styles.css';

export default function Header({ setCurrentView }) {
  return (
    <header className="header">
      <h1>Tour of Heroes</h1>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/heroes">Heroes</Link>
      </nav>
    </header>
  );
}
