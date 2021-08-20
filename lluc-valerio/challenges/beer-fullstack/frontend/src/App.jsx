import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect((() => {
    fetch('api/beers')
      .then((response) => {
        // eslint-disable-next-line no-debugger
        // debugger;
        // eslint-disable-next-line no-console
        console.log('************');
        console.log('JSON Response:');
        console.log('************');
        console.log(response.json);
        return response.json();
      })
      .then((data) => {
      // eslint-disable-next-line no-debugger
        // debugger;
        // eslint-disable-next-line no-console
        console.log('************');
        console.log('JSON Data:');
        console.log('************');
        console.log(data);
      })
      .catch((error) => {
      // eslint-disable-next-line no-debugger
        // debugger;
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }), []);
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
