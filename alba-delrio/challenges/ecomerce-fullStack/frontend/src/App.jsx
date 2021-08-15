import React from 'react';
import Header from './components/Header/Index';
import Cart from './components/Cart/Index';
import AtriclesList from './components/ArticlesList/Index';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <AtriclesList />
        <Cart />
      </div>
    </>
  );
}

export default App;
