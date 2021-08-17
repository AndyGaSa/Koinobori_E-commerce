import React from 'react';
import { Link } from 'react-router-dom';

export default function Principal() {
  return (
    <section>
      <div>Principal</div>
      <Link to="../Friends">
        Friends
      </Link>
      <Link to="../Adversaries">
        Adversaries
      </Link>
    </section>
  );
}
