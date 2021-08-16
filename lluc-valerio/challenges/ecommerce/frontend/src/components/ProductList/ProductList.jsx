import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions/actionCreator';

import '../../styles/ProductList.scss';

export default function ProductList() {
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <section className="product-list">
      {/* <div>holiiiii</div> */}
      <h2 className="product-list__title">PRODUCT LIST</h2>
      <ul className="product-list__items">
        {products?.map((product) => (
          <li key={product.name}>
            <div className="item">
              <span className="item__name">{product.name}</span>
              <span className="item__price">
                {product.price}
                {' '}
                €
              </span>
              <span className="item__stock">
                Stock:
                {' '}
                {product.stock}
              </span>
              <button type="button">Add</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
