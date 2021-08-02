import React from 'react';
import { useSelector } from 'react-redux';

export default function Home() {
  const artist = useSelector((store) => store.artist);
  console.log(artist);
  return (
    <h1>Home Page</h1>
  );
}
