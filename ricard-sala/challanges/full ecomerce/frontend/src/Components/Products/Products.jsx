import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionTypes from '../../redux/actions/actionTypes';
import './styles.scss';

export default function Products() {
  const products = useSelector((store) => store.productList);
  const dispatch = useDispatch();
  const reduxCartList = (product) => {
    dispatch({
      type: actionTypes.ADD_TO_CART,
      data: product,
    });
  };
  return (

    <div className="product-card__container">

      {products.map((e) => (
        <div className="product-card__container-item">
          <div className="product-card-img">
            <img src={e.img} alt="imagen" />
          </div>
          <div className="product-card-info">
            <div>
              <li>{e.name}</li>
            </div>
            <div>
              <span className="product-card-price">
                price:
                {e.price}
              </span>
            </div>
            <div>
              <span className="product-card-stock">
                stock
                {e.stock}
              </span>
            </div>
            <button type="button" onClick={() => reduxCartList(e)} className="add-cart">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}
