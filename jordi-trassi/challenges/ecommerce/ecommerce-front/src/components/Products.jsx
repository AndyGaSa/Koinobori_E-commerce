/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart } from '../redux/actions/actionCreators';

import './Products.css';

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
    <section className="products-list">
      <h1>Todos Los Productos:</h1>
      <ul>
        {products.map((product) => (
          <li key={product.name}>
            <h2 className="product-name">
              {product.name}
            </h2>
            <div className="product-main">
              <div className="product-content">
                <figure className="product-figure-container">
                  <img src={product.image} alt="Caramelos Paco" className="product-figure-container__image" />
                </figure>
                <article className="product-information">
                  <p className="product-information__price">
                    Price:
                    {' '}
                    {product.price}
                    {product.currency}
                  </p>
                  <p className="product-information__description">{product.description}</p>
                </article>
              </div>
              <button
                type="button"
                className="btn-comprar"
                disabled={product.stock < 1}
                onClick={() => handleAddClick(product)}
              >
                Comprar
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
