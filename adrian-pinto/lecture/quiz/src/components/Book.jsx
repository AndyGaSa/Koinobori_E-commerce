/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-console */
import React from 'react';
import '../style/book.css';

const Book = ({ books }) => (books.map((book) => <p className="book" onClick={() => console.log('olis')}>{book}</p>));

export default Book;
