import React from 'react';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';

import './styles/App.css';

function App() {
  return (
    <main className="ecommerce">
      <Header />
      <ProductList />
      <Cart />
    </main>
  );
}

export default App;
