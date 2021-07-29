import React from 'react';
import Books from './Books';
import './Quiz.css';

export default function Quiz() {
  const quiz = {
    books: ['The Shining',
      'The adventures of Huckleberry Finn',
      'Macbeth',
      'IT'
    ],
    rightAnswer: 'The adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Mark Twain'
  };

  function isRightAnswer(book) {
    return quiz.rightAnswer.toLocaleLowerCase() === book.toLocaleLowerCase();
  }

  return (
    <section className="main-quiz">
      <img
        className="img"
        src={quiz.authorImage}
        alt={quiz.authorName}
      />
      <Books books={quiz.books} validate={isRightAnswer} />
    </section>
  );
}
