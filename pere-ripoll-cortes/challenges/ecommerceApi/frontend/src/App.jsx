import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ProductList from './components/productList/ProductList';
import Cart from './components/cart/Cart';
import { loadProducts } from './redux/actions/actionCreator';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <ProductList />
      <Cart />
    </>
  );
}

export default App;
