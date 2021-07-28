import React from 'react';
import './App.css';
import Input from './components/Input/Input';
import List from './components/List/List';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Input />
      <List />
      <button className="btn btn-primary" type="button">This is a button</button>
    </>
  );
}

export default App;
