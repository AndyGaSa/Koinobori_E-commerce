import React, { useState } from 'react';
import Books from './Books';
import './Quiz.css';

export default function Quiz() {
  const [quiz] = useState({
    books: [
      'The shining',
      'The adventures of Huckleberry Finn',
      'Macbeth',
      'IT',
    ],
    rightAnswer: 'The adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg',
    authorName: 'Marc Twain',
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
    <section className="container">
      <div className={`quiz ${userAnswer}`}>
        <img
          className="img-thumbnail"
          src={quiz.authorImage}
          alt={quiz.authorName}
        />
        <Books books={quiz.books} validate={isRightAnswer} />
      </div>
      {showButton && (
      <div className="d-flex justify-content-end">
        <button
          className="btn btn-primary mt-4"
          type="button"
        >
          Next Quiz
        </button>
      </div>
      )}

    </section>
  );
}
