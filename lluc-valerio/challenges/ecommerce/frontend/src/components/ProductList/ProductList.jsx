import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { loadProducts } from '../../redux/actions/actionCreator';
import { loadProducts, addCartItems } from '../../redux/actions/actionCreator';

import '../../styles/ProductList.scss';

export default function ProductList() {
  // const products = useSelector((store) => store.products);
  const products = useSelector((store) => store.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  async function addItem(product) {
    const newCartItem = {
      products: {
        // eslint-disable-next-line no-underscore-dangle
        product: product._id,
        amount: 1
      }
    };
    await dispatch(addCartItems('61146a4a814bd28b7cd95bf2', newCartItem));
    dispatch(loadProducts());
  }

  return (
    <section className="product-list">
      {/* <div>holiiiii</div> */}
      <h2 className="product-list__title">PRODUCT LIST</h2>
      <ul className="product-list__items">
        {products?.map((product) => (
          <li key={product.name}>
            <div className="item">
              <span className="item__name">{product.name}</span>
              <span className="item__price">
                {product.price}
                {' '}
                €
              </span>
              <span className="item__stock">
                Stock:
                {' '}
                {product.stock}
              </span>
              <button onClick={() => { addItem(product); }} disabled={product.stock < 1} type="button">Add</button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
