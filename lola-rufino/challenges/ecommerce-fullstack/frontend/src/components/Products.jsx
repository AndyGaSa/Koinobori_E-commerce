/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemToCart, loadProducts, loadCart } from '../redux/actions/actionCreators';
import './Products.scss';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();
  const [productRunning, setProductRunning] = useState(true);

  useEffect(() => {
    setProductRunning(true);
    dispatch(loadCart());
  }, [productRunning]);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <main>
      <h2>Product List</h2>
      <ul className="list__wrapper">
        {products.map((product) => (
          <li key={product.name} className="list__container">
            <div className="list__item">
              <img className="list__image" src={product.image} alt={`${product.name} product`} />
            </div>
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
              <button type="button" className="list__button" onClick={() => { addItemToCart(product._id); setProductRunning(false); }}>+</button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
