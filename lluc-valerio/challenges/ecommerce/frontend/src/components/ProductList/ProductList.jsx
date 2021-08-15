import React from 'react';

import '../../styles/ProductList.scss';

export default function ProductList() {
  return (
    <section className="product-list">
      <h2 className="product-list__title">PRODUCT LIST</h2>
      <ul className="product-list__items">
        <li>
          <div className="item">
            <span className="item__name">Joc 1</span>
            <span className="item__price">70€</span>
            <span className="item__stock">Stock: 3</span>
            <button type="button">Add</button>
          </div>
        </li>
        <li>
          <div className="item">
            <span className="item__name">Joc 2</span>
            <span className="item__price">30€</span>
            <span className="item__stock">Stock: 1</span>
            <button type="button">Add</button>
          </div>
        </li>
      </ul>
    </section>
  );
}
