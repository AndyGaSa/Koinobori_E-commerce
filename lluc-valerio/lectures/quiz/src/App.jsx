import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';
import Books from './components/Books/Books';

function App() {
  return (
    <>
      <Header className="Header" />
      <section className="main-section">
        <Quiz />
        <Books />
      </section>
      {/* <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          {' '}
          <code>src/App.js</code>
          {' '}
          and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div> */}
    </>
  );
}

export default App;
