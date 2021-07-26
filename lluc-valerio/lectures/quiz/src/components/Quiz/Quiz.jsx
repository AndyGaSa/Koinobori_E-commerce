import React from 'react';
import './Quiz.css';

export default function Portrait() {
  const quiz = {
    books: [
      'The shining',
      'The adventures of Huckleberry Finn',
      'Macbeth',
      'IT'
    ],
    rightAnswer: 'The adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Marc Twain'
  };
  return (
    <section className="container quiz">
      <img
        className="picture"
        src={quiz.authorImage}
        alt={quiz.authorName}
      />
      <Books books={quiz.books} />
    </section>
  );
}
