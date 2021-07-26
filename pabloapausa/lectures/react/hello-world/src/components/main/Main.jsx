import React, { useState } from 'react';
import Books from './Books';
import './Main.css';

// Qué significa 'useState'.

export default function Main() {
  const [quiz] = useState({
    books: ['The shining', 'The Adventures of Huckleberry Finn', 'Macbeth', 'IT'],
    rightAnswer: 'The Adventures of Huckleberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Marc Twain',
  });
  const [userAnswer, setUserAnswer] = useState(null);
  const [showButton, setShowButton] = useState(false);

  function isRightAnswer(book) {
    const isEquals = quiz.rightAnswer.toLowerCase() === book.toLowerCase();
    const userAnswerClass = quiz.rightAnswer.toLowerCase() === book.toLowerCase()
      ? 'quiz--success'
      : 'quiz--error';
    setUserAnswer(userAnswerClass);
    setShowButton(isEquals);
    // 'setUserAnswer' y 'setShownButton' dónde se declaran.
  }

  return (
    <section className="container">
      <div className={`quiz ${userAnswer}`}>
        <img className="img-thumbnail" src={quiz.authorImage} alt={quiz.authorName} />
        <Books books={quiz.books} />
      </div>
      {showButton && (
      <div className="">
        <button className="" type="button">Next Quiz</button>
      </div>
      )}
    </section>
  );
}

// El componente quiz controla lo que presenta el componente Books
