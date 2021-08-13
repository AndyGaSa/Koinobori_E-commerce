import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-section">
      <h1 className="not-found-404">404 error</h1>
      <h2 className="not-found-title">Page Not Found</h2>
      <p className="not-found-description">Sorry, We Couldn’t Find this Page</p>
      <Link to="/" className="not-found-button" type="button">Back to safety</Link>
    </section>
  );
}
