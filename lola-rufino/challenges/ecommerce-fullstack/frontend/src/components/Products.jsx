import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadProducts from '../redux/actions/actionCreators';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);
  return (
    <main>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => <li>{product.name}</li>)}
      </ul>
    </main>
  );
}
