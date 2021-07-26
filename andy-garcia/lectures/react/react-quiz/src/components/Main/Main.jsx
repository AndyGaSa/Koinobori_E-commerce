import React from 'react';
import Imagen from './Imagen';
import Lista from './Lista';
import './Main.css';

function Main() {
  const books = [
    'The shining',
    'Macbeth',
    'book3',
    'Gilberto',
  ];

  return (
    <div className="mainContainer">
      <Imagen />
      <Lista books={books} />
    </div>
  );
}

export default Main;
