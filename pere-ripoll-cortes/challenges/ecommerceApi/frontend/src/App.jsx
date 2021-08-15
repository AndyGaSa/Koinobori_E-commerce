import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import ProductList from './components/productList/ProductList';
import Cart from './components/cart/Cart';
import { loadProducts } from './redux/actions/actionCreator';
import InitialPage from './components/initialPage/InitialPage';
import './App.scss';

function App() {
  const { user, isAuthenticated, isLoanding } = useAuth0();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  if (isLoanding) {
    return <div>Loanding...</div>;
  }

  return (
    isAuthenticated ? (
      <>
        <div className="wrapper">
          <div className="ProductList">
            <ProductList user={user.name} email={user.email} picture={user.picture} />
          </div>
          <div className="Cart">
            <Cart />
          </div>
        </div>
      </>
    ) : <InitialPage />
  );
}

export default App;
