import React from 'react';
import { useSelector } from 'react-redux';

import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

import './homePage.scss';

function HomePage() {
  const currentUser = useSelector(({ user }) => user);

  return (
    <main>
      <Cart user={currentUser} />
      <Products user={currentUser} />
    </main>
  );
}

export default HomePage;
