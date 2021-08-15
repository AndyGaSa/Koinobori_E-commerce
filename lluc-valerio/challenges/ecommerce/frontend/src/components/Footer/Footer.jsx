import React from 'react';

import '../../styles/Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <span className="text">Total Price:</span>
      <span className="price">20€</span>
      <button type="button">Pay</button>
    </footer>
  );
}
