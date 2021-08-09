/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

// eslint-disable-next-line react/prop-types
export default function Books({ books }) {
  return (
    <div className="books">
      {books.map((book) => <li>{book}</li>)}
    </div>
  );
}
