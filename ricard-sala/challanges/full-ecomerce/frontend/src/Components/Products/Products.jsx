/* eslint-disable no-console */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts, addToCart } from '../../redux/actions/actionCreators';
import './styles.scss';

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
    <div className="product-card__container">
      {products?.map((product) => (
        <div className="product-card__container-item">
          <div className="product-card-img">
            <img src={product.img} alt="imagen" />
          </div>
          <div className="product-card-info">
            <div>
              <li>{product.name}</li>
            </div>
            <div>
              <span className="product-card-price">
                price:
                {product.price}
              </span>
            </div>
            <div>
              <span className="product-card-stock">
                stock
                {product.stock}
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleAddClick(product)}
              className="add-cart"
              disabled={product.stock < 1}
            >
              ADD

            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
