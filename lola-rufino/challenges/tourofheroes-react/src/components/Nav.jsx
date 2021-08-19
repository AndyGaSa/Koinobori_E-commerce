import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';
import './dashboard.css';

export default function Nav() {
  return (
    <nav>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/heroes">Heroes</Link>
    </nav>
  );
}
