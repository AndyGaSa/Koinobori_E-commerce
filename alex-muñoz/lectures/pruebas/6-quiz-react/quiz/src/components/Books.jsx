import React from 'react';

export default function Books() {
  const books = [
    'The',
    'Thee',
    'Madhb',
    'IT'
  ];
  return (

    <ul className="books">
      {books.map((book) => <li>{book}</li>)}
    </ul>
  );
}
