/* eslint-disable no-console */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

export default function Books({ books, validate }) {
  return (
    <ul className="books">
      {books.map((book) => (
        <li
          onClick={() => validate(book)}
        >
          {book}
        </li>
      ))}
    </ul>
  );
}
