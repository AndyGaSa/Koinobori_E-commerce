/* eslint-disable no-console */
import React from 'react';
import Books from '../Books/Books';
import './Quiz.css';

export default function Main() {
  const quiz = {
    books: 
    [
      'The Shining',
      'The adventure of Hukelberry Finn',
      'Macbeth',
      'It',
    ],
    rightAnswer: 'The adventure of Hukelberry Finn',
    authorImage: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain,_Brady-Handy_photo_portrait,_Feb_7,_1871,_cropped.jpg',
    authorName: 'Marc Twain',
  };
  let userAnswer=null;

  function isRightAnswer(book) {
    console.log(quiz.rightAnswer.toLowerCase() === book.toLowerCase());
  }
  function getAnswerClass(){
    if(userAnswer===true)return 'quiz--success'
    if(userAnswer===false)return 'quiz--error';
  }
  return (
    <>
      <section className={`container quiz`${getAnswerClass()}}>
        <img className="img-thumbnail" src={quiz.authorImage} alt="" />
        <Books books={quiz.books} validate={isRightAnswer} />
      </section>
    </>
  );
}
