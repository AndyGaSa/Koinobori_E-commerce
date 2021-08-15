import React from 'react';

import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';

import './styles/App.scss';

function App() {
  return (
    <>
      <Header />
      <main className="ecommerce">
        <ProductList />
        <Cart />
      </main>
      <Footer />
    </>
  );
}

export default App;
