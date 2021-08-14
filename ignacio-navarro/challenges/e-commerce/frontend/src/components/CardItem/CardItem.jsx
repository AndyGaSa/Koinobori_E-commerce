/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CardItem.scss';
import { Link } from 'react-router-dom';

export default function CardItem() {
  return (
    <Link to={`/details/${beer?.id}`} className="card-item__container">
      <img src="https://images.punkapi.com/v2/7.png" alt="beer" />
      <figcaption>item 001</figcaption>
      <span>80.00$</span>
    </Link>
  );
}
