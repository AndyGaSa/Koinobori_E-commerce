/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

function Books({ books, validate }) {
  return (
    <ul className="books list-unstyled">
      {books.map((book) => <li onClick={() => validate(book)}>{book}</li>)}
    </ul>
  );
}

export default Books;
