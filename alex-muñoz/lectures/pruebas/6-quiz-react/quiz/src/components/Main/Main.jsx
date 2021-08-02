import React from 'react';
import Books from '../Books';
import './Main.css';

export default function Main() {
  return (
    <main className="container">
      <img className="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg" alt="Marc Twain" />
      <Books />
    </main>
  );
}
