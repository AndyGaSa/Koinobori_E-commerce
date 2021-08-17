import React from 'react';
import { Link } from 'react-router-dom';

export default function Friends() {
  return (
    <section>
      <div>Friends</div>
      <div>Principal</div>
      <Link to="../">
        Main
      </Link>
      <Link to="../Adversaries">
        Adversaries
      </Link>
    </section>
  );
}
