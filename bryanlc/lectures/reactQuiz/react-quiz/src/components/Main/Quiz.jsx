import React from 'react';
import Books from './Books';
import './Quiz.css';

export default function Quiz() {
  const quiz = {
    book: [
      'The shining',
      'The adventures of Huckleberry Finn',
      'Macbeth',
      'IT'],
    rightAnswer: 'The adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
    authorName: 'Marc Twain'
  };
  /*
  function answer(book) {
    if (quiz.book.toLowerCase() === book.toLowerCase()) {
      'acert';
    }els;
  } */

  return (

    <section className="container">
      <div>
        <a href="d">
          <img className="img-thumbnail" src="https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg" alt="" />
        </a>
      </div>
      <Books books={quiz.book} />
    </section>
  );
}
