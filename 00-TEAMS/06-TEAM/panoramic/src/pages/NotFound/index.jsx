import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="not-found-section">
      <h1 className="not-found-title">NotFound</h1>
      <p className="not-found-404">404 error</p>
      <Link to="/" className="not-found-button" type="button">Back to safety</Link>
    </section>
  );
}
