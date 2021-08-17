import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { addProductToCart } from '../../redux/actions/cart.creator';
import getProducts from '../../redux/actions/products.creator';
import selectOptions from '../../utils/selectOptions';
import './products.scss';

function Products({ user }) {
  const dispatch = useDispatch();
  const allProducts = useSelector(({ products }) => products);

  const [inputValue, setInputValue] = useState('');
  const [selectValue, setSelectValue] = useState('name');

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  function addToCart(product) {
    if (user?.name) {
      dispatch(addProductToCart(product));
    }
  }

  function searchProducts(option, filter) {
    dispatch(getProducts(option, filter.trim()));
  }

  return (
    <>
      <h2 className="hide-element">Shoes</h2>
      <form>
        <input type="text" placeholder="Search" value={inputValue} onChange={({ target: { value } }) => setInputValue(value)} />
        <select value={selectValue} onChange={({ target: { value } }) => setSelectValue(value)}>
          {selectOptions
            .map(({ value, text }) => (<option key={value} value={value}>{text}</option>))}
        </select>
        <button
          type="button"
          onClick={() => searchProducts(selectValue, inputValue)}
        >
          Search

        </button>
      </form>
      <ul className="products">
        { allProducts.map((product) => (
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
    </>
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
