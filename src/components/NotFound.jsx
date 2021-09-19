import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.scss';

export default function NotFound() {
  return (
    <main>
      <section className="emptyCartSection">
        <h1>404 - Page not found</h1>
        <figure className="emptyCart">
          <img className="sadFace" src="https://s3-app.secretbakery.io/clawgame/www-ssstufff-com.myshopify.com/80/caras_filtro-04.png" alt="sadFace" />
        </figure>
        <Link to="/"><button className="backButton" type="button">Back to home</button></Link>
      </section>
    </main>
  );
}
