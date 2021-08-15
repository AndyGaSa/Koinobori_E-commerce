import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.scss';
import actionType from '../../redux/actions/actionType';
import LogoutButton from '../login/LogoutButton';

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types
export default function ProductList({ email }) {
  const products = useSelector((store) => store.productsList);
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch({
      type: actionType.ADD_PRODUCT_CART,
      data: product,
    });
  };

  return (
    <>
      <header className="header">
        <p>{email}</p>
        <LogoutButton />
      </header>
      <div className="wrapper">
        {products.map((e) => (
          <div className="unit">
            <p>{e.name}</p>
            <p>
              {e.price}
              €
            </p>
            <p>
              {e.stock}
              Units
            </p>
            <img className="tractor-img" alt="tractor" src={e.img} />
            <button type="button" onClick={() => addCart(e)}>Add</button>
          </div>
        ))}
      </div>
    </>
  );
}
