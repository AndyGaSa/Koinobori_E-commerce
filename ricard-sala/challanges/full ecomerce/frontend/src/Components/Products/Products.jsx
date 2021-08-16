import { element } from 'prop-types';
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

      {products.map((elements) => (
        <div className="product-card__container-item">
          <div className="product-card-img">
            <img src={elements.img} alt="imagen" />
          </div>
          <div className="product-card-info">
            <div>
              <li>{elements.name}</li>
            </div>
            <div>
              <span className="product-card-price">
                price:
                {elements.price}
              </span>
            </div>
            <div>
              <span className="product-card-stock">
                stock
                {elements.stock}
              </span>
            </div>
            <button
              type="button"
              onClick={() => reduxCartList(elements)}
              className="add-cart"
              disabled={element.stock < 1}
            >
              ADD

            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
