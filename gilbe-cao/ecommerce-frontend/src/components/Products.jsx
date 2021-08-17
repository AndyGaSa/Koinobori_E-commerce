/* eslint-disable max-len */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart } from '../redux/actions/actionCreator';

import './products.css';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  function handleAddClick(product) {
    dispatch(addToCart(product));
  }

  return (
    <div className="cards">
      {products.map((product) => (
        <div className="cards__item" key={product.name}>
          <div className="card">
            <div className="card__cover">
              <img src={product.image_url || 'https://images.punkapi.com/v2/192.png'} alt={product.name} />
            </div>

            <div className="card__content">
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>
                stock:
                {' '}
                {product.stock}
              </p>
            </div>

            <div className="card__actions">
              <button
                // eslint-disable-next-line no-alert
                onClick={() => handleAddClick(product)}
                type="button"
                disabled={product.stock < 1}
              >
                Add

              </button>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
}
