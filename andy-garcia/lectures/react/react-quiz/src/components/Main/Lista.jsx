/* eslint-disable react/prop-types */
import React from 'react';
import './Lista.css';

function Lista({ books }) {
  return (
    <>
      <ul className="books">
        {books.map((book) => <li>{book}</li>)}
      </ul>
    </>
  );
}

export default Lista;
