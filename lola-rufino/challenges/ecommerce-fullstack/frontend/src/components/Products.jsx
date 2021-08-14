import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import loadProducts from '../redux/actions/actionCreators';
import './Products.scss';

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
        {products.map((product) => (
          <li className="list__container">
            <div className="list__item">
              {product.name}
              ,
            </div>
            <div className="list__item">
              {' '}
              {product.price}
              €,
            </div>
            <div className="list__item">
              {' '}
              {product.stock}
              units
            </div>
            <div className="list__item">
              {' '}
              <button type="button" className="list__button">Add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
