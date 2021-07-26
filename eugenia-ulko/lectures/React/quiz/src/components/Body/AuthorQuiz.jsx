/* eslint-disable linebreak-style */
import React from 'react';
import './AuthorQuiz.css';

export default function AuthorQuiz() {
   
    const quiz = {
        books: [
            'Question 1',
            'Question 2',
            'Question 3',
            'Question 4'
        ],
        rightAnswer: 'Question 2',
        authorImage: 'https://es.wikipedia.org/wiki/Mark_Twain#/media/Archivo:Mark_Twain_by_AF_Bradley.jpg',
        authorName: 'Marc Twain',
    }

    function isRightAnswer(book) {
        quiz.rightAnswer.toLowerCase() === <book className="toLowerCase"></book>
    }

  return (
    <div className="container quiz">
      <img 
      className="img-thumbnail"
      src={quiz.authorImage} 
      alt={quiz.authorName}
      </div>
      <Books books= {books} />
  );
}

export default AuthorQuiz;
