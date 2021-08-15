/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss';
import axios from 'axios';

// eslint-disable-next-line react/prop-types
export default function Cart({ user, email }) {
  const inCart = useSelector(({ cart }) => cart);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setBasket(inCart);
    if (basket.length > 0) {
      setTotal(inCart.map((e) => e.price).reduce((t, num) => t + Math.round(num)));
    }
  }, [inCart]);

  const createCartinBBDD = async () => {
    // Create user if exist
    await axios.post('/api/users', { name: user, email });
    // Get user ObjectId
    const objId = await axios.get(`api/users/?name=${user}`);
    // Create or update cart
    await axios.post('/api/cart', {
      user: objId.data[0]._id,
      products: inCart.map((e) => e),
    });
  };

  return (
    <div className="wrapper-cart">
      {console.log(inCart)}
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
      <button type="button" onClick={createCartinBBDD}>Crer Usuario</button>
    </div>
  );
}
