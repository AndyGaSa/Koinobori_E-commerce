import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import products from '../../mocks/products.mock';
import './products.scss';

function Product() {
  return (
    <ul className="products">
      { products.map((product) => (
        <li className="products__product">
          <img className="product__image" src={product.img} alt={product.name} />
          <div className="product__information">
            <h3 className="product__name">{product.name}</h3>
            <span className="product__stock">
              {product.stock}
              {' '}
              available
            </span>
          </div>
          <span className="product__price">
            {product.price}
            €
          </span>
          <button className="product__add-button" type="button" aria-label="Add"><FontAwesomeIcon icon={faPlusSquare} /></button>
        </li>
      ))}
    </ul>
  );
}

export default Product;
