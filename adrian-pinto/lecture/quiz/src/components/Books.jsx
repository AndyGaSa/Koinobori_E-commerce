import React from 'react';
import Book from './Book';
import '../style/books.css';

const Books = () => {
  const books = [
    'The shining',
    'The adventures of Huckleberry Finn',
    'Macbeth',
    'IT',
  ];

  return (
    <article>
      <Book books={books} />
    </article>
  );
};

export default Books;
