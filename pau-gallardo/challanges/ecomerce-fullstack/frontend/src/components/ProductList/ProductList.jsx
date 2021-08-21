import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import loadProductList from '../../redux/actions/productList.creator';
import { addProductToCart } from '../../redux/actions/cart.creator';

import './ProductList.scss';

export default function ProductList() {
  const productList = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductList());
  }, []);

  return (
    <>
      <div className="proli-container">
        <h2 className="proli-container__tittle">Product List</h2>
        <ul className="proli-container__list">
          {
        productList.map((singleProduct) => (
          <li
            className="proli-container__list__component"
            data-testid={`list-item-${singleProduct.name}`}
            key={`key-${singleProduct.name}`}
          >
            <span className="proli-container__list__component__stuff">{`Product name: ${singleProduct.name}`}</span>
            <span className="proli-container__list__component__stuff">{`${singleProduct.price}€`}</span>
            <span className="proli-container__list__component__stuff">{`Stock ${singleProduct.stock} units`}</span>
            <button
              type="button"
              onClick={() => dispatch(addProductToCart(singleProduct))}
              data-testid="add-button"
            >
              Add to cart
            </button>
          </li>
        ))
        }
        </ul>
      </div>
    </>
  );
}
