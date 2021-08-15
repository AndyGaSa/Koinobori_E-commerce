/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../redux/actions/actionCreators';
import './Products.css';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <section className="products-list">
      <h1>Todos Los Productos:</h1>
      <ul>
        {products.map(({
          name,
          price,
          image,
          currency,
          description,
        }) => (
          <li key={name}>
            <h2 className="product-name">
              {name}
            </h2>
            <div className="product-main">
              <div className="product-content">
                <figure className="product-figure-container">
                  <img src={image} alt="Caramelos Paco" className="product-figure-container__image" />
                </figure>
                <article className="product-information">
                  <p className="product-information__price">
                    Price:
                    {' '}
                    {price}
                    {currency}
                  </p>
                  <p className="product-information__description">{description}</p>
                </article>
              </div>
              <button type="button" className="btn-comprar">Comprar</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
