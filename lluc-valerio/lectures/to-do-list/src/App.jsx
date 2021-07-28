import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';

import FromToDoList from './page/FromToDoList';

import './App.css';

function App() {
  return (
  // <Provider>
    <BrowserRouter>
      <FromToDoList />
    </BrowserRouter>
  // </Provider>
  );
}

export default App;
