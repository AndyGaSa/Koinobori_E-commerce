import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h3>404 - Page not founf</h3>
      <Link to="/heroes">Back to safety</Link>
    </>
  );
}
