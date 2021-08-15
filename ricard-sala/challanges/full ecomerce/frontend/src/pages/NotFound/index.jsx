import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function NotFound() {
  return (
    <>
      <h3 className="not-found"> 404 -Page not found</h3>
      <div className="img-container">
        <img className="lost-img" src="https://www.moterus.es/system/photos/files/002/278/033/lluneta-discussion-2012-10-09-16-59-04_thumb_l.jpg?1393776475" alt="lost" />
      </div>
      <Link className="lost" to="/">TIRA PA CASA!!!</Link>
    </>
  );
}
