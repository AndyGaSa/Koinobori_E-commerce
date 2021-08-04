import React from 'react';
import { Link } from 'react-router-dom';
import './EmptyCart.scss';

export default function NotFound() {
  return (
<<<<<<< HEAD
    <>
      <h3>404 - Page not found</h3>

      <Link to="/">Back to home</Link>

    </>
=======
    <main>
      <section className="emptyCartSection">
        <h1>404 - Page not found</h1>
        <figure className="emptyCart">
          <img className="sadFace" src="https://s3-app.secretbakery.io/clawgame/www-ssstufff-com.myshopify.com/80/caras_filtro-04.png" alt="sadFace" />
        </figure>
        <Link to="/"><button className="backButton" type="button">Back to home</button></Link>
      </section>
    </main>
>>>>>>> 94698f12ee96ad3d90c6b086995d5026c6ea2e20
  );
}
