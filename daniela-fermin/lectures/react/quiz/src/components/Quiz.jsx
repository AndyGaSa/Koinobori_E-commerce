import React, { useState } from 'react';
import Books from './Books';
import './Quiz.css';

export default function Quiz() {
  const [quiz] = useState({
    books: ['The Shinning',
      'The Adventures of Huckleberry Finn',
      'MacBeth',
      'It'],
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Mar Twain',
    rightAnswer: 'The Adventures of Huckleberry Finn'
  });
  const [userAnswer, setUserAnswer] = useState(null);
  const [showButton, setShowButton] = useState(false);

  function isRightAnswer(book) {
    const isEquals = quiz.rightAnswer.toLowerCase() === book.toLowerCase();
    const userAnswerClass = isEquals
      ? 'quiz--success'
      : 'quiz--error';

    setUserAnswer(userAnswerClass);
    setShowButton(isEquals);
  }
  return (
    <>
      <main className={`quiz ${userAnswer}`}>
        <img className="img-thumbnail" src={quiz.authorImage} alt={quiz.authorName} />
        <Books books={quiz.books} validate={isRightAnswer} />
      </main>
      {showButton && (
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary mt-4"
          type="button"
        >
          Next

        </button>
      </div>
      )}

    </>
  );
}
