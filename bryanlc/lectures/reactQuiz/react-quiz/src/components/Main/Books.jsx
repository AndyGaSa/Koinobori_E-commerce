/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

export default function Books({ books }) {
  return (
    <ul className="books">
      {books.map((book) => <li>{book}</li>)}
    </ul>
  );
}
