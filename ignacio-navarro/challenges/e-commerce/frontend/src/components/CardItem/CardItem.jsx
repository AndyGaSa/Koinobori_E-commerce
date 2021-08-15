/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CardItem.scss';
import { Link } from 'react-router-dom';
import { updateCart } from '../../redux/actions/actionCreator';

export default function CardItem({ beer }) {
  const currentCart = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  function addToCart() {
    if (beer._id) {
      dispatch(updateCart(beer, currentCart));
    }
  }
  return (
    <div className="card-item__container">
      <Link to={`/details/${beer._id}`} className="card-item__link">
        <img src={beer?.image_url} alt="beer" />
        <figcaption>{beer?.name}</figcaption>
        <span>
          {Math.round(((+beer.ibu / 10) - 0.1) * 100) / 100}
          {' '}
          $
        </span>
      </Link>
      <button className="card-item__buy" type="button" onClick={addToCart}>Add</button>
    </div>
  );
}
