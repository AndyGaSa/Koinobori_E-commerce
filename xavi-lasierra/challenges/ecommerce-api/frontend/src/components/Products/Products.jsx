import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import getProducts from '../../redux/actions/products.creator';
import './products.scss';

function Product() {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <ul className="products">
      { products.map((product) => (
        <li className="products__product" key={`${product.name}-shoe`}>
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
