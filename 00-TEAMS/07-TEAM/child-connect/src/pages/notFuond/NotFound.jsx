import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h3 data-testid="notFound-h3">404 - Page not found</h3>
      <Link to="/">Back to safety</Link>
    </>
  );
}
