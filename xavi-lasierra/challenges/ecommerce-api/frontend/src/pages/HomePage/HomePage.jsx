import React from 'react';
import { useSelector } from 'react-redux';

import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

import './homePage.scss';

function HomePage() {
  const user = useSelector((store) => store.user);

  return (
    <main>
      <Cart user={user} />
      <Products user={user} />
    </main>
  );
}

export default HomePage;
