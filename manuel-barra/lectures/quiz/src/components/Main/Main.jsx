import React from 'react';
import Ullist from '../Ullist/Ullist';
import Img from '../Img/Img';

export default function Main() {
  const books = ['The shining', 'The adventures of Huckleberry finn', 'Macbeth', 'IT'];
  return (
    <main>
      <Img />
      <Ullist books={books} />
    </main>
  );
}
