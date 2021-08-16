import React from 'react';
import { useSelector } from 'react-redux';

import Products from '../../components/Products/Products';
import Cart from '../../components/Cart/Cart';

import './homePage.scss';

function HomePage() {
  const currentUser = useSelector(({ user }) => user);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <main>
      <div className="main__flex-container">
        <Cart user={currentUser} />
        <Products user={currentUser} />
      </div>
      <button className="main__back-to-top-button" type="button" onClick={scrollTop}>Back to top</button>
    </main>
  );
}

export default HomePage;
