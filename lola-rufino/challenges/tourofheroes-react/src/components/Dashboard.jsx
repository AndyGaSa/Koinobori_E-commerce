import React from 'react';
import '../styles.css';
import './dashboard.css';

export default function Dashboard() {
  const url = '';
  return (
    <>
      <h2>Top Heroes</h2>
      <a href={url}>Abe Sapien</a>
      <a href={url}>Abin Sur</a>
      <a href={url}>Abomination</a>
      <a href={url}>Abraxas</a>
    </>
  );
}
