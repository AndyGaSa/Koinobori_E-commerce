/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable no-sparse-arrays */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import sneakers from '../../sneakers-data/data';
import { loadCart } from '../../redux/actions/sneakers.creators';

import './style.scss';

export default function Cart() {
  const carts = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCart());
  }, []);
  let aux;
  carts && (aux = [0, ...carts]);
  let y = [];
  aux && ([, y] = aux);
  let cartList;
  carts && (cartList = carts.map(({ sneakers }) => sneakers));
  let sneakerList;
  cartList && (sneakerList = cartList.map((sneaker) => sneaker[0].sneaker));

  // const sneakerFilter = sneakerList.filter(({ amount }) => amount > 0);
  // const x = await sneakerList.map(({ amount, price }) => amount * +price);
  // const totalCart = await x.reduce((acc, num) => acc + num);
  return (
    <section className="container-cart">
      <nav className="cart-delete">
        <h2 className="cart">Cart</h2>
        <button type="button">
          Delete Cart
        </button>
      </nav>
      <ul className="sneakers">

        {sneakerList.map(({
          name, img, price, amount,
        }) => (

          <section className="sneaker-container">
            <div className="sneaker-photo">
              <img className="cart-photo" src={img} alt="" srcSet="" />

            </div>
            <div className="sneaker-description">
              <div className="sneaker-name">
                <p className="name">
                  {name}
                </p>
              </div>
              <div className="sneaker-name">
                <p className="price">
                  {price}
                  €
                </p>
              </div>
            </div>
            <div className="sneaker-amount">

              <button type="button" className="cart-add">
                -
              </button>
              <p className="amount">{amount}</p>
              <button type="button" className="cart-add">
                +
              </button>
            </div>
          </section>
        ))}

      </ul>
      <section className="total-container">
        <p>TOTAL</p>
        <div className="total">

          €
        </div>
      </section>
    </section>
  );
}
