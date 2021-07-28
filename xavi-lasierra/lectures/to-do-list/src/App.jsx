import React from 'react';
import { Provider } from 'react-redux';

import ToDoList from './pages/ToDoList';
import Header from './components/Header';

import configureStore from './redux/store';

import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <Header />
        <ToDoList />
      </div>
    </Provider>

  );
}

export default App;
