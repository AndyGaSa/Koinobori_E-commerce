/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/actionCreator';

import './Products.css';

export default function Products() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <ul className="products__list">
      {products.map((product) => (
        <div key={product.name} className="list-items__container">
          <li className="list-items__item">
            <img src={product.img} alt={product.name} className="list-item__img" />
            <article className="list-item__article">
              <h3>{product.name}</h3>
              <h4>{product.author}</h4>
              <p>
                Precio:
                {' '}
                {product.price}
                {' '}
              </p>
              <p>
                Stock disponible:
                {' '}
                {product.stock}
                {' '}
              </p>
            </article>
            <button
              onClick={() => console.log('Comprar')}
              type="button"
              className="list-item__button"
            >
              Comprar
            </button>
          </li>
        </div>
      ))}
    </ul>
  );
}
