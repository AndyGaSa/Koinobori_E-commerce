import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { addProductToCart } from '../../redux/actions/cart.creator';
import './products.scss';

function Products({ user }) {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  function addToCart(product) {
    if (user?.name) {
      dispatch(addProductToCart(product));
    }
  }

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
          <button className="product__add-button" type="button" aria-label="Add" onClick={() => addToCart(product)}><FontAwesomeIcon icon={faPlusSquare} /></button>
        </li>
      ))}
    </ul>
  );
}

export default Products;

Products.propTypes = {
  user: propTypes.shape({
    _id: propTypes.string,
    name: propTypes.string,
    email: propTypes.string
  }).isRequired
};
