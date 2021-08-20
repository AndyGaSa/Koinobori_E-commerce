/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadSneakers } from '../../redux/actions/sneakers.creators';
import './style.scss';

export default function Sneakers() {
  const sneakers = useSelector((store) => store.sneakers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadSneakers());
  }, []);
  return (
    <section className="container-cart">
      <h2 className="cart">Sneakers</h2>
      <ul className="sneakers">
        {sneakers?.map(({ name, img, price }) => (
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
                  €
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
    </section>
  );
}
