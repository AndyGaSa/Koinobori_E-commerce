import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const stockList = useSelector((store) => store.stock);
  return (
    <>
      <p>{stockList?.clothes?.accessories[0]?.name || 'hola'}</p>
      <p>Hola soy el headers</p>
    </>
  );
}
