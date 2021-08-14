import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from './redux/actions/actionCreators';
import './App.css';

function App() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <div className="App">
      <h1>Ecommerce</h1>
      <ul>
        {products.map((product) => <li key={product.name}>{product.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
