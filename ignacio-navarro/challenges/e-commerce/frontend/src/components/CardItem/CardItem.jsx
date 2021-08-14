/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './CardItem.scss';

export default function CardItem() {
  return (
    <figure>
      <img src="https://images.punkapi.com/v2/7.png" alt="beer" />
      <figcaption>item 001</figcaption>
      <span>80.00$</span>
    </figure>
  );
}
