/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import '../../Styles/Styles.css';

export default function Header({ setCurrentView }) {
  return (
    <header className="header">
      <h1>Tour of Heroes</h1>
      <button type="button" onClick={() => setCurrentView('dashboard')}>Dashboard</button>
      <button type="button" onClick={() => setCurrentView('heroes')}>Heroes</button>
    </header>
  );
}
