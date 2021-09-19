import React from 'react';
import './EmptyCart.scss';
import { Link } from 'react-router-dom';

export default function EmptyCart() {
  return (
    <main>
      <section className="emptyCartSection">
        <h1>SHOPPING CART</h1>
        <figure className="emptyCart">
          <img className="sadFace" src="https://s3-app.secretbakery.io/clawgame/www-ssstufff-com.myshopify.com/80/caras_filtro-04.png" alt="sadFace" />
          <figcaption className="caption">Your cart is empty! That’s not cool...</figcaption>
        </figure>
        <Link to="/"><button className="backButton" type="button">Go back shopping</button></Link>
      </section>
    </main>
  );
}
