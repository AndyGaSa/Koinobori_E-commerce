import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import loadProductList from '../../redux/actions/productList.creator';
import { addProductToCart } from '../../redux/actions/cart.creator';

export default function ProductList() {
  const productList = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProductList());
  }, []);

  return (
    <>
      <h2>Product List</h2>
      <ul>
        {
        productList.map((singleProduct) => (
          <li>
            <span>{`Product name ${singleProduct.name}`}</span>
            <span>{`${singleProduct.price}€}`}</span>
            <span>{`Stock ${singleProduct.stock} units`}</span>
            <button
              type="button"
              onClick={() => dispatch(addProductToCart(singleProduct))}
            >
              Add to cart
            </button>
          </li>
        ))
        }
      </ul>
    </>
  );
}
