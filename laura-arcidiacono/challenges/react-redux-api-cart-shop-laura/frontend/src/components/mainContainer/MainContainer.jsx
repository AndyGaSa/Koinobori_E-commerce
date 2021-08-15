import React from 'react';
import Products from '../products/Products';
import Cart from '../cart/Cart';

import './MainContainer.css';

function MainContainer() {
  return (
    <main className="mainContainer">
      <Products />
      <Cart />
    </main>
  );
}

export default MainContainer;
