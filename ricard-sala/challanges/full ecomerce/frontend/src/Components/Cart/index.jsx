import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

export default function Cart() {
  const [productsToCart, setProductsToCart] = useState([]);
  const cartRedux = useSelector((store) => store.cart);
  useEffect(() => {
    setProductsToCart(cartRedux);
  }, [cartRedux]);
  return (
    <div className="cart">
      <h3 className="cart__user">riki CART</h3>
      <div className="cart__products">
        {productsToCart.map((element) => (
          <div className="cart-item">
            <img className="cart-img" src={element.img} alt="imagen" />
            <div className="cart-info">
              <span className="cart-name">{element.name}</span>
              <span className="cart-price">{element.price}</span>
            </div>
            <button className="delete-button" type="button">X</button>
          </div>
        )) }
      </div>
      <button className="button-cart" type="button">
        <img className="img-button" src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" alt="cart" />
        buy

      </button>
    </div>
  );
}
