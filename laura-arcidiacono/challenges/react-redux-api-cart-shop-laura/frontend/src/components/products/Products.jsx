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
    <ul className="products_list">
      {products.map((product) => (
        <div key={product.name} className="list-itmes_container">
          <li className="list_item">
            <img src={product.img} alt={product.name} className="item_img" />
            <article className="item_article">
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
            <button onClick={() => console.log('Comprar')} type="button" className="item_button">Comprar</button>
          </li>
        </div>
      ))}
    </ul>
  );
}
