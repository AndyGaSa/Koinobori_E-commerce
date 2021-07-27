import React from 'react';
import '../styles.css';

// eslint-disable-next-line react/prop-types
export default function Nav({ setCurrentView }) {
  return (
    <nav>
      { setCurrentView }
      <button type="button" onClick={() => setCurrentView('dashboard')}>Dashboard</button>
      <button type="button" onClick={() => setCurrentView('heroes')}>Heroes</button>
    </nav>
  );
}
