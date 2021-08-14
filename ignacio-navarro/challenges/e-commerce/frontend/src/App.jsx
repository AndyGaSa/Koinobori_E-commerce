import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardItem from './components/CardItem/CardItem';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </main>
    </div>
  );
}

export default App;
