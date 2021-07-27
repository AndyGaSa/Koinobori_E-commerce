import React from 'react';

// eslint-disable-next-line react/prop-types
function Header({ setCurrentPage }) {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <button type="button" onClick={() => setCurrentPage('dashboard')}> Dashboard</button>
      <button type="button" onClick={() => setCurrentPage('heroes')}> Heroes </button>
    </>
  );
}

export default Header;
