import React from 'react';
import Header from '../components/Header';
import Quiz from '../components/Quiz';
import './AuthorQuiz.css';

export default function AuthorQuiz() {
  return (
    <>
      <main className="author-quiz">
        <Header />
        <Quiz />
      </main>
    </>
  );
}
