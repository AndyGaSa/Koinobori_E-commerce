/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ setCurrentPage }) {
  return (
    <div>
      <button type="button" onClick={() => setCurrentPage('dashboard')}>Dashboard</button>
      <button type="button" onClick={() => setCurrentPage('heroes')}>Heroes</button>
    </div>
  );
}
