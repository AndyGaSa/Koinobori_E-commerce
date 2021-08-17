import React from 'react';
import { Link } from 'react-router-dom';

export default function Adversaries() {
  return (
    <section>
      <div>adversaries</div>
      <Link to="../Friends">
        Friends
      </Link>
      <Link to="../">
        Principal
      </Link>
    </section>
  );
}
