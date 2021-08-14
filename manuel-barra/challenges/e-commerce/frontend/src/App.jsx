import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './redux/actions/actionCreators';

function App() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <>
      <h1>Hola mundo</h1>
      <ul>
        {products.map((product) => <li key={product.name}>{product.name}</li>)}
      </ul>
    </>

  );
}

export default App;
