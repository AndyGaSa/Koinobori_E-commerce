import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';

// eslint-disable-next-line react/prop-types
export default function Cart() {
  const inCart = useSelector(({ cart }) => cart);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setBasket(inCart);
    if (basket.length > 0) {
      setTotal(inCart.map((e) => e.price).reduce((t, num) => t + Math.round(num)));
    }
  }, [inCart]);

  return (
    <div className="wrapper-cart">
      <h1>Basket</h1>
      {basket.map((e) => (
        <div className="singleProduct">
          <p>{e.name}</p>
          <p>|</p>
          <p>
            {e.price}
            €
          </p>
        </div>
      ))}
      <p>---------------------</p>
      <p>
        Total:
        {' '}
        {total}
        €
      </p>
      <button type="button">Buy and Go</button>
    </div>
  );
}
