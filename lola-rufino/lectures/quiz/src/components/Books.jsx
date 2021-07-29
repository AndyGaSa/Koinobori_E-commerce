/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import './Books.css';

export default function Books({ books }) {
  return (
    <ul>
      {books.map((book) => <li onClick={() => console.log(book)}>{book}</li>)}
    </ul>
  );
}
