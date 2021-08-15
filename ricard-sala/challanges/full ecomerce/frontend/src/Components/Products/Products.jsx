import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

export default function Products() {
  const products = useSelector((store) => store.productList);
  return (

    <div className="product-card__container">

      {products.map((e) => (
        <div className="product-card__container-item">
          <div className="product-card-img">
            <img src={e.img} alt="imagen" />
          </div>
          <div className="product-card-info">
            <div>
              <li>{e.name}</li>
            </div>
            <div>
              <span className="product-card-price">
                price:
                {e.price}
              </span>
            </div>
            <div>
              <span className="product-card-stock">
                stock
                {e.stock}
              </span>
            </div>
            <button type="button" className="add-cart">ADD</button>
          </div>
        </div>
      ))}
    </div>
  );
}
