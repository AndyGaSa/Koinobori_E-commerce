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
      <h3 className="cart__user">name:riki</h3>
      <div className="cart__products">
        {productsToCart.map((element) => (<p>{element.name}</p>))}
      </div>
      <button className="button-cart" type="button">
        <img className="img-button" src="https://img.icons8.com/material-outlined/24/000000/fast-cart.png" alt="cart" />
        buy

      </button>
    </div>
  );
}
