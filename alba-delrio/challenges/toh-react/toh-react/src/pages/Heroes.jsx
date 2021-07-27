/* eslint-disable react/prop-types */
import React from 'react';
import heroes from '../assets/constants';
import './Heroes.css';

export default function Heroes({ setCurrentPage }) {
  return (
    <>
      <h3>My Heroes</h3>
      <ul>{heroes.map(({ name }) => <li>{name}</li>)}</ul>
      <h3>Magenta is my hero!</h3>
      <button type="button" onClick={() => setCurrentPage('details')}>View Details</button>
    </>
  );
}
