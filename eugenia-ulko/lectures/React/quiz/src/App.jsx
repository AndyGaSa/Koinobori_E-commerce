import React from 'react';
import './App.css';
import AuthorQuiz from './components/Body/AuthorQuiz';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AuthorQuiz />
      </div>
    </>
  );
}

export default App;
