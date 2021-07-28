/* eslint-disable prefer-const */
import React, { useState } from 'react';
import Books from './Books';
import './Quiz.css';

function Quiz() {
  const [userAnswer, setAnswer] = useState(null);
  const [button, showButton] = useState(false);

  const quiz = {
    books: ['The Shining', 'The Adventures of Huckeleberry Finn', 'Macbeth', 'IT'],
    rightAnswer: 'The Adventures of Huckeleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Mark Twain'
  };

  function isTheRightAnswer(book) {
    const answer = quiz.rightAnswer.toLowerCase() === book.toLowerCase();
    const userAnswerClass = answer ? 'quiz--success' : 'quiz--error';
    setAnswer(userAnswerClass);
    showButton(answer);
  }

  return (
    <main className="container">
      <section className={`quiz d-flex align-items-center p-3 ${userAnswer}`}>
        <img className="img-thumbnail" src={quiz.authorImage} alt={quiz.authorName} />
        <Books books={quiz.books} validate={isTheRightAnswer} />
      </section>
      {button && (
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-primary mt-4">Next Quiz</button>
        </div>
      )}
    </main>
  );
}

export default Quiz;
