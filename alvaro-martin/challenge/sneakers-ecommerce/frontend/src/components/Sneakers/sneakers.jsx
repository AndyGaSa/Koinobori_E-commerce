/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import sneakers from '../../sneakers-data/data';
import './style.scss';

export default function Sneakers() {
  return (
    <>

      <ul className="sneakers">
        {sneakers.map(({ name, img, price }) => (
          <section className="sneaker-container">
            <div className="sneaker-photo">
              <img className="photo" src={img} alt="" srcSet="" />

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
                </p>
              </div>
            </div>
            <div className="sneaker-amount">

              <button type="button" className="add">
                +
              </button>
            </div>
          </section>
        ))}

      </ul>
    </>
  );
}
