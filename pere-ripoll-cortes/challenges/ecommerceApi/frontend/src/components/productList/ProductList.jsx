import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductList.scss';
import actionType from '../../redux/actions/actionType';

export default function ProductList() {
  const products = useSelector((store) => store.productsList);
  const dispatch = useDispatch();

  const addCart = (product) => {
    dispatch({
      type: actionType.ADD_PRODUCT_CART,
      data: product,
    });
  };

  return (
    <div className="wrapper">
      {products.map((e) => (
        <div>
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

  );
}
