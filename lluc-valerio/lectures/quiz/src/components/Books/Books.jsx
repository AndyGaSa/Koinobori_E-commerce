import React from 'react';
import './Books.css';

export default function Books({ books, validate }) {
  // return (
  //   <ul className="books">
  //     {books.map((book)} => {
  //       <li onClick= { () => validate(book) }>{book}</li>
  //     }
  //   </ul>
  // );
  return (
    <ul className="books" />
  );
}
