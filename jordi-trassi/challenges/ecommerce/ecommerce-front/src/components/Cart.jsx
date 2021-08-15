import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCarts } from '../redux/actions/actionCreators';
import './Cart.css';

export default function Carts() {
  const carts = useSelector((store) => store.carts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCarts());
  }, []);

  return (
    <section className="cart-body">
      <ul>
        {carts.map(({
          _id,
        }) => (
          <li key={_id}>nuevo cart</li>
        ))}
      </ul>
      <h2>Su lista de productos:</h2>
      <button type="button" className="btn-pagar">Pagar</button>
    </section>

  );
}
