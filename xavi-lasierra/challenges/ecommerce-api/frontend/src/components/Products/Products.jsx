import React from 'react';

import products from '../../mocks/products.mock';
import './products.scss';

function Product() {
  return (
    <ul className="products">
      { products.map((product) => (
        <li className="products__product">
          <img className="product__image" src={product.img} alt={product.name} />
          <span className="product__name">{product.name}</span>
        </li>
      ))}
    </ul>
  );
}

export default Product;
