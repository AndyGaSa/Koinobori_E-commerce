/* eslint-disable no-undef */
import React, { useState } from 'react';
import Books from '../Books/Books';
import './Quiz.css';

export default function Quiz() {
  const [quiz] = useState({
    books: [
      'The Shining',
      'The Adventures of Huckleberry Finn',
      'Macbeth',
      'It'
    ],
    rightAnswer: 'The Adventures of Huckleberry Finn',
    authorImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_0SmHX3qIwChZa6iDxuiIoww0RqNywfhqzppfWP0k6lpyxfVMiFYq3MmTWBjSY0_hn04t925mmxxkkg&usqp=CAU',
    authorName: 'Mark Twain'
  });
  const [userAnswer, setUserAnswer] = useState(null);

  function isRightAnswer(book) {
    const isEquals = quiz.rightAnswer.toLowerCase() === book.toLowerCase();
    const userAnswerClass = isEquals ? 'quiz--success' : 'quiz--error';
    setUserAnswer(userAnswerClass);
    setShowButton(isEquals);
  }

  return (

    <div className={`quiz ${userAnswer}`}>
      <img src={quiz.authorImage} alt={quiz.authorName} />
      <Books books={quiz.books} validate={isRightAnswer} />

    </div>
  );
}
