/* eslint-disable prefer-const */
import React, { useState } from 'react';
import Books from './Books';
import './Quiz.css';

function Quiz() {
  const [userAnswer, setAnswer] = useState(null);

  const [quiz] = useState({
    books: ['The Shining', 'The Adventures of Huckeleberry Finn', 'Macbeth', 'IT'],
    rightAnswer: 'The Adventures of Huckeleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Mark Twain'
  });

  function isTheRightAnswer(book) {
    const userAnswerClass = quiz.rightAnswer.toLowerCase() === book.toLowerCase() ? 'quiz--success' : 'quiz--error';
    setAnswer(userAnswerClass);
  }

  return (
    <main className={`quiz d-flex align-items-center container p-3 ${userAnswer}`}>
      <img className="img-thumbnail" src={quiz.authorImage} alt={quiz.authorName} />
      <Books books={quiz.books} validate={isTheRightAnswer} />
    </main>
  );
}

export default Quiz;
