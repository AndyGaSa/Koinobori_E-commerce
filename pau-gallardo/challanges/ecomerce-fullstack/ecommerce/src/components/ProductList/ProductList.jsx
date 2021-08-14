import React from 'react';

export default function ProductList() {
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {
        productsMock.map((singleProduct) => (
          <li>
            <span>{`Product name ${singleProduct.name}`}</span>
            <span>{`${singleProduct.price}€}`}</span>
            <span>{`Stock ${singleProduct.stock} units`}</span>
            <button
              type="button"
            >
              Add to cart
            </button>
          </li>
        ))
        }
      </ul>
    </>
  );
}
