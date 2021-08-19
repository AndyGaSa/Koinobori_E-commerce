import React from 'react';
import './Quiz.css';
import Books from '../Books/Books';

export default function Quiz() {
  const books = [
    'The Shining',
    'The adventure of Huckleberry Finn',
    'Macbeth',
    'IT',
  ];

  return (
    <div className="container">
      <picture className="imagen">
        <img className="img_1" src="https://image.jimcdn.com/app/cms/image/transf/none/path/sb13765d273d64146/image/i4da03b0b9a7ead22/version/1439063421/image.jpg" alt="" />
      </picture>
      <Books books={books} />
    </div>
  );
}
