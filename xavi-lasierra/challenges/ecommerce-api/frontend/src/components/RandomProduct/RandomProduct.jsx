import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import propTypes from 'prop-types';

import { addProductToCart } from '../../redux/actions/cart.creator';
import getRandomProduct from '../../redux/actions/randomProducts.creator';

import './randomProduct.scss';

function RandomProduct({ user }) {
  const [randomProduct] = useSelector((store) => store.randomProduct);
  const dispatch = useDispatch();

  function addToCart(product) {
    if (user?.name) {
      dispatch(addProductToCart(product));
    }
  }

  useEffect(() => {
    dispatch(getRandomProduct());
  }, []);

  return (
    <section className="recomendation">
      {randomProduct
        && (
        <>
          <h2 className="recomendation__title">Our recomendation:</h2>
          <div className="recomendation__product">
            <div className="product__main-information">
              <h3 className="product__name">
                {randomProduct.name}
                {' '}
                <span className="product__price">
                  {randomProduct.price}
                  €
                </span>
              </h3>
              <img className="product__image" src={randomProduct.img} alt={randomProduct.name} />
            </div>
            <div className="product__buttons">
              <span>
                {randomProduct.stock}
                {' '}
                available
              </span>
              <button type="button" onClick={() => addToCart(randomProduct)}>Add to cart</button>
              <button type="button" onClick={() => dispatch(getRandomProduct())}>Another recomendation</button>
            </div>
          </div>
        </>
        )}
    </section>
  );
}

export default RandomProduct;

RandomProduct.propTypes = {
  user: propTypes.shape({
    _id: propTypes.string,
    name: propTypes.string,
    email: propTypes.string
  }).isRequired
};
