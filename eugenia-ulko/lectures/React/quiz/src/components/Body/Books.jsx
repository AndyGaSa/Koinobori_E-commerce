/* eslint-disable linebreak-style */
import React from 'react';
import 'Books'

export default function Books({ books }) {
   
   
    const books = [
        'Question 1',
        'Question 2',
        'Question 3',
        'Question 4'
  ]
  
    return (
        <ul className="books">
            {books.map((books) => <li>{book}</li> )}
        </ul>
  );
}

export default Books;
