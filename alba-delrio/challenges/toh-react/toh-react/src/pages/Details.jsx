/* eslint-disable react/prop-types */
import React from 'react';

export default function Details({ setCurrentPage }) {
  return (
    <>
      <h2>Magenta details!</h2>
      <span className="hero-id">id:</span>
      <span>
        name:
        <input type="text" className="hero-name" />
      </span>
      <button type="button" onClick={() => setCurrentPage('heroes')}>Back</button>
    </>
  );
}
