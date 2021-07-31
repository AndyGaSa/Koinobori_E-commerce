/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

// eslint-disable-next-line react/prop-types
export default function Books({ books, validate }) {
  return (
    <ul className="books">
      {books.map((book) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
        <li
          onClick={() => validate(book)}
        >
          {book}
        </li>
      ))}
    </ul>

  );
}
