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
            <div className="product-container">
              <div className="product-container__content">
                <figure className="product-container__figure">
                  <img src={product.image} alt="Caramelos Paco" className="product-container__figure--image" />
                </figure>
                <article className="product-information">
                  <p className="product-information__price">
                    <span>
                      Precio:
                    </span>
                    {' '}
                    {product.price}
                    {product.currency}
                    {' '}
                    Ud.
                  </p>
                  <p className="product-information__description">
                    {product.description}
                  </p>
                  <p className="product-information__stock">
                    Stock:
                    {' '}
                    {product.stock}
                    {' '}
                    Uds.
                  </p>
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
