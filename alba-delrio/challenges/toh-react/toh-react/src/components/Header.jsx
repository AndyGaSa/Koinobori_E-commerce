/* eslint-disable arrow-spacing */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

export default function Header({ setCurrentPage }) {
  return (
    <>
      <h1>Tour of Heroes</h1>
      <button type="button" onClick={()=>setCurrentPage('dashboard')}>Dashboard</button>
      <button type="button" onClick={() => setCurrentPage('heroes')}>Heroes</button>
    </>
  );
}
