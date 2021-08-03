import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer__upper">
        <div className="footer__upper-container">
          <p>PRIVACY POLICY</p>
          <p>REFUND POLICY</p>
        </div>
        <div className="footer__upper-container">
          <p>CONTACT</p>
          <p>+81 670894356</p>
          <p>Japó, 〒101-0021 Tokyo, Chiyoda City, Sotokanda, 1 Chome−11−11 ビルディング</p>
        </div>
        <div>
          <iframe className="map" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.977453855084!2d139.7723633154756!3d35.70217243018953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ea73ea6f4ff%3A0x5eb9f1e50fe061e3!2zQWtpaGFiYXJhLCBUYWl0xY0sIFTDsnF1aW8gMTEwLTAwMDYsIEphcMOz!5e0!3m2!1sca!2ses!4v1627911411085!5m2!1sca!2ses" allowFullScreen="" loading="lazy" />
        </div>
      </div>
      <div className="footer__lower">
        <span>© 2021, Koinobori, All Rights Reserved.</span>
      </div>
    </footer>
  );
}
