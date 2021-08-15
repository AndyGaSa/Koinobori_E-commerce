/* eslint-disable camelcase */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import './CartItem.scss';
import { useSelector } from 'react-redux';

export default function CartItem({ productId, amount }) {
  const beersList = useSelector((store) => store.products);
  const { name, price, image_url } = beersList.find((current) => current._id === productId);
  return (
    <div className="cart-item__container">
      <img className="cart-item__image" src={image_url} alt="beer" />
      <span>{name}</span>
      <span>{price}</span>
      <button type="button"> - </button>
      <span>{amount}</span>
      <button type="button"> + </button>
    </div>
  );
}
