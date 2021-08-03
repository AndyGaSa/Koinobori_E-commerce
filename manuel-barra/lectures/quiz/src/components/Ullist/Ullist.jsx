/* eslint-disable react/prop-types */
import React from 'react';

export default function Ullist({ books }) {
  return (
    <ul>
      {books.map((book) => <li>{book}</li>)}
    </ul>
  );
}
