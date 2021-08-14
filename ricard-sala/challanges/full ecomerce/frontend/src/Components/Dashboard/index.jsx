import React from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
// import Products from '../../Components/Products';

export default function Dasboard() {
  const Products = [{ name: 'product1', price: '25$', stock: 10 }, { name: 'product2', price: '25$', stock: 10 }];
  return (
    <>
      <h2>Dashboard</h2>
      <div className="products-list">
        {Products.map((name) => (
          <>
            <ul className="product" />
            <div className="product-features">
              <h3> producto</h3>
              <span>price</span>
              <span>stock</span>
            </div>
            {Products.name}
            <button type="button">
              <Link to={`/cart/${name}`} key={Cart} className="Cart" />

            </button>
          </>
        ))}
      </div>
    </>
  );
}
