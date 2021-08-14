/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import sneakers from '../../sneakers-data/data';
import './style.scss';

export default function Sneakers() {
  const sneakerFilter = sneakers.filter(({ amount }) => amount > 0);

  const x = sneakerFilter.map(({ amount, price }) => amount * +price);
  const totalCart = x.reduce((acc, num) => acc + num);
  return (
    <section className="container-cart">
      <h2 className="cart">Cart</h2>
      <ul className="sneakers">

        {sneakerFilter.map(({
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
          {totalCart}
          €
        </div>
      </section>
    </section>
  );
}
