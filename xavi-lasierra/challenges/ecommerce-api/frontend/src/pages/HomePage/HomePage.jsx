import React from 'react';

import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

import './homePage.scss';

function HomePage() {
  return (
    <main>
      <Cart />
      <Products />
    </main>
  );
}

export default HomePage;
