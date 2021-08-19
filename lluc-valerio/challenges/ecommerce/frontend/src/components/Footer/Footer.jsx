import React from 'react';
import { useSelector } from 'react-redux';

import '../../styles/Footer.scss';

export default function Footer() {
  const items = useSelector((store) => store.items);

  return (
    <footer className="footer">
      <span className="text">Total Price:</span>
      <span className="price">
        {
            items.products?.map((item) => (item.product.price * item.amount))
              ?.reduce((acc, cv) => acc + cv, 0)
          }
      </span>
      <button type="button">Pay</button>
    </footer>
  );
}
